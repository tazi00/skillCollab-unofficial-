import useUser from "@/app/hooks/useUser";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedLayout() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.firstName && !isLoading) return navigate("/");
  }, [user, navigate, isLoading]);

  if (isLoading) {
    return <>Loading</>;
  }

  if (user) return <Outlet />;
}

export default ProtectedLayout;
