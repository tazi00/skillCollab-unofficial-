import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  SkillBox,
  SkillCol,
  SkillContainer,
  SkillGrid,
  SkillHead,
  SkillImg,
  SkillSection,
  SkillText,
} from "../../Ui";
import logo from "./assets/Logo.png";
import logoBg from "./assets/Login-img.png";
import authBg from "./assets/auth-bg2.png";
import useUser from "@/app/hooks/useUser";
import { useEffect } from "react";

function AuthLayout() {
  const { pathname } = useLocation();
  const { user, isLoading } = useUser();

  const navigate = useNavigate();
  const authLayoutBg =
    pathname === "/" || pathname === "/register" ? logoBg : authBg;

  const authLayoutNames = {
    [`${"login"}`]: "Welcome Back!👋",
    register: "Welcome Back!👋",
    forgot: "Forgot Password!",
    verify: "Verification!",
  };
  const authHead =
    authLayoutNames[pathname.split("/")[1] as keyof typeof authLayoutNames];
  useEffect(() => {
    if (user?.firstName && !isLoading) navigate("/home");
  }, [user, navigate, isLoading]);

  if (isLoading) return <>Loading...</>;

  if (!user?.firstName)
    return (
      <SkillSection>
        <SkillContainer $fluid>
          <SkillGrid $col={2} $height="100vh">
            <SkillCol $overflowY="scroll">
              <SkillBox $textAlign="center" $padding="74px 0 0 0">
                <SkillImg
                  src={logo}
                  alt=""
                  $width="unset"
                  $margin="0 0px 10px 0"
                />
                <SkillHead as={"h2"} $variant={"Primary"} $margin="0 0 16px 0">
                  {authHead}
                </SkillHead>
                <SkillText
                  $variant="primary"
                  $maxWidth="400px"
                  $color="#777"
                  $fontBold="400"
                  $lineHeight="22px"
                  $textAlign="center"
                  $margin="0 auto"
                  $width="100%"
                >
                  Lorem ipsum dolor sit amet. Qui voluptates enim est quaerat
                  voluptatem qui labore internos.
                </SkillText>
              </SkillBox>
              <Outlet />
            </SkillCol>
            <SkillCol>
              <SkillBox
                $padding="40px 0 0 40px"
                $backgroundColor="#EFFDFF;
             
"
                $height="100%"
              >
                <SkillImg src={authLayoutBg} alt="" $width="80%" />
              </SkillBox>
            </SkillCol>
          </SkillGrid>
        </SkillContainer>
      </SkillSection>
    );
}

export default AuthLayout;
