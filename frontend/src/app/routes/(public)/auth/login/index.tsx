import {
  loginSchema,
  TLoginSchema,
} from "@/app/routes/(public)/auth/login/-validations/login-schema";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "@/app/_components/layouts/auth-layout";
import { useLogin } from "./-hooks/use-login";
import { FormLogin } from "./-components/form-login";

export const Route = createFileRoute("/(public)/auth/login/")({
  component: LoginPage,
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({ to: "/dashboard" });
    }
  },
});

function LoginPage() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const mutation = useLogin();

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: TLoginSchema) => {
    mutation.mutate(data);
  };

  return (
    <AuthLayout title="Login" description="Login to your account">
      <FormLogin
        form={form}
        isPending={mutation.isPending}
        onSubmit={onSubmit}
      />
    </AuthLayout>
  );
}
