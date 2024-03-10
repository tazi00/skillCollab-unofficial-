import { SkillBox } from "@/app/Ui";
import "./style.scss";
import RegisterForm from "./components/RegisterForm";

function Register() {
  return (
    <SkillBox $margin="30px  0 0 0">
      <RegisterForm />
    </SkillBox>
  );
}

export default Register;
