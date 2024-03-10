import { SkillButton, SkillInputBox } from "@/app/Components";
import { SkillBox, SkillForm, SkillLink, SkillText } from "@/app/Ui";

function Verify() {
  return (
    <SkillBox $margin="30px  0 0 0">
      <SkillForm>
        <SkillInputBox
          placeholder="Enter OTP"
          type="text"
          label="OTP"
          Hfor="otp"
          value=""
          onChange={() => {}}
        />

        <SkillBox $margin="30px 0 0 0 ">
          <SkillButton>Sign in</SkillButton>
          <SkillText
            $variant="primary"
            $flex
            $justifyContent="center"
            $alignItems="center"
            $margin="10px 0 0 0 "
          >
            Don’t receive the code?
            <SkillLink $margin="0 0 0 5px"> Resend Code</SkillLink>{" "}
          </SkillText>
        </SkillBox>
      </SkillForm>
    </SkillBox>
  );
}

export default Verify;
