import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import {
  createShiftValidation,
  TCreateShiftValidation,
} from "../-validations/create-shift-validation";
import { TUpdateShiftValidation } from "../-validations/update-shift-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateShift } from "./-hooks/use-create-shift";
import { TBreadcrumb } from "@/app/_components/types/breadcrumb-types";
import { PageGuard } from "@/app/_components/layouts/guard/page-guard";
import { ROLE } from "@/common/enums/role-enum";
import Page from "@/app/_components/layouts/page/main";
import FormShift from "../-components/form-shift";
import { useEffect } from "react";

const CreateShiftPage = () => {
  useEffect(() => {
      document.title = "Create Shift";
    }, []);

  const { mutate } = useCreateShift();

  const form = useForm<TCreateShiftValidation | TUpdateShiftValidation>({
    resolver: zodResolver(createShiftValidation),
  });

  const handleSubmit = (
    data: TCreateShiftValidation | TUpdateShiftValidation
  ) => {
    mutate(data as TCreateShiftValidation);
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
      label: "Create Shift",
      path: "/shifts/create",
    },
  ];

  return (
    <PageGuard allowedRoles={[ROLE.HRD]}>
      <Page
        title="Create Shift"
        description="Create shift"
        breadcrumbs={breadcrumbs}
      >
        <FormShift onSubmit={handleSubmit} type="create" form={form} />
      </Page>
    </PageGuard>
  );
};

export const Route = createFileRoute("/(authenticated)/shifts/create/")({
  component: CreateShiftPage,
});
