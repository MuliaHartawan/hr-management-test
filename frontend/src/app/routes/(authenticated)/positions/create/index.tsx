import { createFileRoute } from "@tanstack/react-router";
import { useCreatePosition } from "./-hooks/use-create-position";
import { useForm } from "react-hook-form";
import {
  createPositionValidation,
  TCreatePositionValidation,
} from "../-validations/create-position-validation";
import { TUpdatePositionValidation } from "../-validations/update-position-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import Page from "@/app/_components/layouts/page/main";
import FormPosition from "../-components/form-position";

const CreatePositionPage = () => {
  const { mutate } = useCreatePosition();

  const form = useForm<TCreatePositionValidation | TUpdatePositionValidation>({
    resolver: zodResolver(createPositionValidation),
  });

  const handleSubmit = (
    data: TCreatePositionValidation | TUpdatePositionValidation
  ) => {
    mutate(data as TCreatePositionValidation);
  };

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Positions",
      path: "/positions",
    },
    {
      label: "Create Position",
      path: "/positions/create",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Create Position"
        description="Create position"
        breadcrumbs={breadcrumbs}
      >
        <FormPosition onSubmit={handleSubmit} type="create" form={form} />
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute("/(authenticated)/positions/create/")({
  component: CreatePositionPage,
});
