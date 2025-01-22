import { useUser } from "@/app/_hooks/auth/use-user";

interface ComponentGuardProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export const ComponentGuard = ({ allowedRoles, children }: ComponentGuardProps) => {
  const { data: user } = useUser();

  if (!allowedRoles.includes(user.role.name)) {
    return null;
  }

  return <>{children}</>;
};
