import { SkillLoading } from "@/app/Ui";
import useUser from "@/app/hooks/useUser";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedLayout() {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();
  console.log(isAuthenticated);

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/");
    },
    [isAuthenticated, isLoading, navigate]
  );
  if (isLoading) return <SkillLoading />;

  // Render the child routes only if the user is authenticated
  if (isAuthenticated) return <Outlet />;
}

export default ProtectedLayout;
