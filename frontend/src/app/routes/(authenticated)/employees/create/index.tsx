import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useCreateEmployee } from "../-hooks/use-create-employee";
import { useForm } from "react-hook-form";
import {
  createEmployeeValidation,
  TCreateEmployeeValidation,
} from "../-validations/create-employee-validation";
import { TUpdateEmployeeValidation } from "../-validations/update-employee-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { ROLE } from "@/common/enums/role-enum";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import FormEmployee from "../-components/form-employee";

const CreateEmployeePage = () => {
  useEffect(() => {
    document.title = "Create Employee";
  }, []);

  const { mutate } = useCreateEmployee();

  const form = useForm<TCreateEmployeeValidation | TUpdateEmployeeValidation>({
    resolver: zodResolver(createEmployeeValidation),
  });

  const handleSubmit = (
    data: TCreateEmployeeValidation | TUpdateEmployeeValidation
  ) => {
    console.log("[data]", data);
    mutate(data as TCreateEmployeeValidation);
  };

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
      label: "Create Employee",
      path: "/employees/create",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Create Employee"
        description="Create Employee"
        breadcrumbs={breadcrumbs}
      >
        <FormEmployee onSubmit={handleSubmit} type="create" form={form} />
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute("/(authenticated)/employees/create/")({
  component: CreateEmployeePage,
});
