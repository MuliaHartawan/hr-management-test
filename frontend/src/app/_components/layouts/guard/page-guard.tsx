import { useUser } from "@/app/_hooks/auth/use-user";
import { useNavigate } from "@tanstack/react-router";

interface PageGuardProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export const PageGuard = ({ allowedRoles, children }: PageGuardProps) => {
  const { data: user, isLoading } = useUser();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <div>Not logged in</div>;

  if (!allowedRoles.includes(user.role.name)) {
    setTimeout(() => {
      navigate({ to: "/denied" });
    }, 0);
  }

  return <>{children}</>;
};
