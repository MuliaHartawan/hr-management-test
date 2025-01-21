import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import Page from "@/app/_components/layouts/page/main";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { ROLE } from "@/common/enums/role-enum";
import { createFileRoute } from "@tanstack/react-router";
import { useUpdateUser } from "./-hooks/use-update-user";
import {
  TUpdateUserValidation,
  updateUserValidation,
} from "../../-validations/update-user-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetUser } from "../-hooks/use-get-user";
import FormUser from "../../-components/form-user";
import { useEffect } from "react";

export const UpdateUserPage = () => {
  useEffect(() => {
    document.title = "Update User";
  }, []);
  const { userId } = Route.useParams();
  const { data } = useGetUser(Number(userId));

  const form = useForm<TUpdateUserValidation>({
    resolver: zodResolver(updateUserValidation),
    defaultValues: {
      is_active: data?.is_active,
      role_id: data?.role.id,
    },
  });

  const { mutate } = useUpdateUser();

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
      label: "Update User",
      path: `/users/${userId}/update`,
    },
  ];

  const handleSubmit = (data: TUpdateUserValidation) => {
    mutate({
      id: Number(userId),
      data,
    });
  };

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Create Update User"
        description="Create user"
        breadcrumbs={breadcrumbs}
      >
        <FormUser
          onSubmit={handleSubmit}
          type="update"
          form={form}
          defaultValues={data}
        />
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute("/(authenticated)/users/$userId/update/")({
  component: UpdateUserPage,
});
