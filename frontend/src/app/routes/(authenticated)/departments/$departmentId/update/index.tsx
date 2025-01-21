import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetDepartment } from "../-hooks/use-get-department";
import {
  TUpdateDepartmentValidation,
  updateDepartmentValidation,
} from "../../-validations/update-department-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpdateDepartment } from "./-hooks/use-update-department";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { ROLE } from "@/common/enums/role-enum";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import FormDepartment from "../../-components/form-department";

export const UpdateDepartmentPage = () => {
  useEffect(() => {
    document.title = "Update Department";
  }, []);

  const { departmentId } = Route.useParams();
  const { data } = useGetDepartment(Number(departmentId));

  const form = useForm<TUpdateDepartmentValidation>({
    resolver: zodResolver(updateDepartmentValidation),
  });

  const { mutate } = useUpdateDepartment();

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Departments",
      path: "/departments",
    },
    {
      label: "Update Department",
      path: `/departments/${departmentId}/update`,
    },
  ];

  const handleSubmit = (data: TUpdateDepartmentValidation) => {
    mutate({
      id: Number(departmentId),
      data,
    });
  };

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Create Update Department"
        description="Create department"
        breadcrumbs={breadcrumbs}
      >
        <FormDepartment
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
  "/(authenticated)/departments/$departmentId/update/"
)({
  component: UpdateDepartmentPage,
});
