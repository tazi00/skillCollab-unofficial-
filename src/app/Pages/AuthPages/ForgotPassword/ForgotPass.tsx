import { SkillButton, SkillInputBox } from "@/app/Components";
import { SkillBox, SkillForm } from "@/app/Ui";

function ForgotPass() {
  return (
    <SkillBox $margin="30px  0 0 0">
      <SkillForm>
        <SkillInputBox
          placeholder="Enter Email"
          type="email"
          label="Email"
          Hfor="email"
          value=""
          onChange={() => {}}
        />

        <SkillBox $margin="30px 0 0 0 ">
          <SkillButton>Continue</SkillButton>
        </SkillBox>
      </SkillForm>
    </SkillBox>
  );
}

export default ForgotPass;
