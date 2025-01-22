import { createFileRoute } from "@tanstack/react-router";
import { useCreateDepartment } from "./-hooks/use-create-department";
import { TCreateDepartmentValidation } from "../-validations/create-department-validation";
import { useForm } from "react-hook-form";
import {
  TUpdateDepartmentValidation,
  updateDepartmentValidation,
} from "../-validations/update-department-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { ROLE } from "@/common/enums/role-enum";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import FormDepartment from "../-components/form-department";
import { useEffect } from "react";

const CreateDepartmentPage = () => {
  useEffect(() => {
      document.title = "Create Department";
    }, []);

  const { mutate } = useCreateDepartment();

  const form = useForm<
    TCreateDepartmentValidation | TUpdateDepartmentValidation
  >({
    resolver: zodResolver(updateDepartmentValidation),
  });

  const handleSubmit = (
    data: TCreateDepartmentValidation | TUpdateDepartmentValidation
  ) => {
    mutate(data as TCreateDepartmentValidation);
  };

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
      label: "Create Department",
      path: "/departments/create",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Create Department"
        description="Create department"
        breadcrumbs={breadcrumbs}
      >
        <FormDepartment onSubmit={handleSubmit} type="create" form={form} />
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute("/(authenticated)/departments/create/")({
  component: CreateDepartmentPage,
});
