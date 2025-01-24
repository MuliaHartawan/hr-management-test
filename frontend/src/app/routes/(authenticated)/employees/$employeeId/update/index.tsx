import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetEmployee } from "../-hooks/use-get-employee";
import { useForm } from "react-hook-form";
import {
  TUpdateEmployeeValidation,
  updateEmployeeValidation,
} from "../../-validations/update-employee-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateEmployee } from "./-hooks/use-update-employee";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { ROLE } from "@/common/enums/role-enum";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import FormEmployee from "../../-components/form-employee";

export const UpdateEmployeePage = () => {
  useEffect(() => {
    document.title = "Update Employee";
  }, []);

  const { employeeId } = Route.useParams();

  const { data } = useGetEmployee(Number(employeeId));

  const form = useForm<TUpdateEmployeeValidation>({
    resolver: zodResolver(updateEmployeeValidation),
  });

  const { mutate } = useUpdateEmployee();

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Employees",
      path: "/employees",
    },
    {
      label: "Update Employee",
      path: `/employees/${employeeId}/update`,
    },
  ];

  const handleSubmit = (data: TUpdateEmployeeValidation) => {
    mutate({
      id: Number(employeeId),
      data,
    });
  };

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Update Employee"
        description="Update employee"
        breadcrumbs={breadcrumbs}
      >
        <FormEmployee
          onSubmit={handleSubmit}
          type="update"
          form={form}
          defaultValues={data}
        />
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute(
  "/(authenticated)/employees/$employeeId/update/"
)({
  component: UpdateEmployeePage,
});
