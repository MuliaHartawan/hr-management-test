import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateShift } from "./-hooks/use-update-shift";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import {
  TUpdateShiftValidation,
  updateShiftValidation,
} from "../../-validations/update-shift-validation";
import Page from "@/app/_components/layouts/page/main";
import FormShift from "../../-components/form-shift";
import { useGetShift } from "../-hooks/use-get-shift";
import { useEffect } from "react";

const UpdateShiftPage = () => {
  useEffect(() => {
    document.title = "Update Shift";
  }, []);
  const { shiftId } = Route.useParams();

  const { data } = useGetShift(Number(shiftId));

  const form = useForm<TUpdateShiftValidation>({
    resolver: zodResolver(updateShiftValidation),
  });

  const { mutate } = useUpdateShift();

  const handleSubmit = (data: TUpdateShiftValidation) => {
    mutate(data as TUpdateShiftValidation);
  };

  const breadcrumbs: TBreadcrumb[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Shifts",
      path: "/shifts",
    },
    {
      label: "Update Shift",
      path: "/shifts/update",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Update Shift"
        description="Update ashift"
        breadcrumbs={breadcrumbs}
      >
        <FormShift
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
  "/(authenticated)/shifts/$shiftId/update/"
)({
  component: UpdateShiftPage,
});
