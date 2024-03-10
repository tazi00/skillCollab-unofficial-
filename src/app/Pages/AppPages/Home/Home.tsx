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

  const { data: userData } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserById(user?.sub),
  });

  console.log(userData);

  return (
    <SkillSection>
      <SkillContainer>
        <SkillGrid $col={["300px", "1fr", "300px"]}>
          <SkillCol>
            <SkillBox>
              <SkillProfileCard />
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
