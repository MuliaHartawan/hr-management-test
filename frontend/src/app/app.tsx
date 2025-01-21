import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { AuthProvider } from "./_providers/auth/auth-provider";
import { Toaster } from "./_components/ui/toaster";
import { useAuth } from "./_hooks/auth/use-auth";
import { useMemo } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoggedIn, role } = useAuth();

  const context = useMemo(() => {
    return {
      queryClient,
      isAuthenticated: isLoggedIn,
      role: role!,
    };
  }, [isLoggedIn, role]);

  return <RouterProvider router={router} context={context} />;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
