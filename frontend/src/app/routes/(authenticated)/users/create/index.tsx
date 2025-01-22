import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute } from "@tanstack/react-router";
import FormUser from "../-components/form-user";
import { useCreateUser } from "./-hooks/use-create-user";
import {
  createUserValidation,
  TCreateUserValidation,
} from "../-validations/create-user-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { TUpdateUserValidation } from "../-validations/update-user-validation";
import { useEffect } from "react";

const CreateUserPage = () => {
  useEffect(() => {
      document.title = "Create User";
    }, []);

  const { mutate } = useCreateUser();

  const form = useForm<TCreateUserValidation | TUpdateUserValidation>({
    resolver: zodResolver(createUserValidation),
  });

  const handleSubmit = (
    data: TCreateUserValidation | TUpdateUserValidation
  ) => {
    mutate(data as TCreateUserValidation);
  };

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Users",
      path: "/users",
    },
    {
      label: "Create User",
      path: "/users/create",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Create User"
        description="Create user"
        breadcrumbs={breadcrumbs}
      >
        <FormUser onSubmit={handleSubmit} type="create" form={form} />
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute("/(authenticated)/users/create/")({
  component: CreateUserPage,
});
