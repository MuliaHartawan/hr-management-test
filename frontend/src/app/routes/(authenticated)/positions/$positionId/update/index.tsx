import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetPosition } from "../-hooks/use-get-position";
import { useForm } from "react-hook-form";
import {
  TUpdatePositionValidation,
  updatePositionValidation,
} from "../../-validations/update-position-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdatePosition } from "./-hooks/use-update-position";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import Page from "@/app/_components/layouts/page/main";
import FormPosition from "../../-components/form-position";

export const UpdatePositionPage = () => {
  useEffect(() => {
    document.title = "Update Position";
  }, []);

  const { positionId } = Route.useParams();

  const { data } = useGetPosition(Number(positionId));

  const form = useForm<TUpdatePositionValidation>({
    resolver: zodResolver(updatePositionValidation),
  });

  const { mutate } = useUpdatePosition();

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
      label: "Update Position",
      path: `/positions/${positionId}/update`,
    },
  ];

  const handleSubmit = (data: TUpdatePositionValidation) => {
    mutate({
      id: Number(positionId),
      data,
    });
  };

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Create Update Position"
        description="Create position"
        breadcrumbs={breadcrumbs}
      >
        <FormPosition
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
  "/(authenticated)/positions/$positionId/update/"
)({
  component: UpdatePositionPage,
});
