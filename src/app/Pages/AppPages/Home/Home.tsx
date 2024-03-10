import {
  SkillBox,
  SkillCol,
  SkillContainer,
  SkillGrid,
  SkillSection,
} from "@/app/Ui";
import "./style.scss";
import { SkillProfileCard } from "@/app/Components";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/app/Services/userServices";
import useUser from "@/app/hooks/useUser";

function Home() {
  const { data: user } = useUser();

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userProfile", user?.sub],
    queryFn: () => getUserById(user?.sub),
    enabled: !!user?.sub,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  console.log(userData);

  return (
    <SkillSection>
      <SkillContainer>
        <SkillGrid $col={["300px", "1fr", "300px"]}>
          <SkillCol>
            <SkillBox>
              <SkillProfileCard profileCardData={userData} />
            </SkillBox>
          </SkillCol>
          <SkillCol>
            <Outlet />
          </SkillCol>
          <SkillCol>col3</SkillCol>
        </SkillGrid>
      </SkillContainer>
    </SkillSection>
  );
}

export default Home;
