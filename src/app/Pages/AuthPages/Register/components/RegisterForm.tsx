import {
  SkillButton,
  SkillInputBox,
  SkillSocialSignIn,
} from "@/app/Components";
import {
  SkillBox,
  SkillDivider,
  SkillForm,
  SkillLink,
  SkillText,
} from "@/app/Ui";

function RegisterForm() {
  return (
    <SkillForm>
      <SkillInputBox
        placeholder="Enter First name"
        type="text"
        label="First Name"
        Hfor="firstname"
        value=""
        onChange={() => {}}
      />
      <SkillInputBox
        placeholder="Enter Last name"
        type="text"
        label="Last Name"
        Hfor="lastname"
        value=""
        onChange={() => {}}
      />
      <SkillInputBox
        placeholder="Enter User name"
        type="text"
        label="User Name"
        Hfor="username"
        value=""
        onChange={() => {}}
      />
      <SkillInputBox
        placeholder="Enter Your Email Address"
        type="email"
        label="Email"
        Hfor="email"
        value=""
        onChange={() => {}}
      />
      <SkillInputBox
        placeholder="Enter Phone number"
        type="text"
        label="Phone Number"
        Hfor="phone"
        value=""
        onChange={() => {}}
      />
      <SkillInputBox
        placeholder="Enter Your Password"
        type="password"
        label="Password"
        Hfor="password"
        value=""
        onChange={() => {}}
        render={<SkillLink $margin="10px 0 0 0">Forgot password?</SkillLink>}
      />
      <SkillBox $margin="30px 0 0 0 ">
        <SkillButton>Log in</SkillButton>
        <SkillText
          $variant="primary"
          $flex
          $justifyContent="center"
          $alignItems="center"
          $margin="10px 0 0 0 "
        >
          Don’t have an account?
          <SkillLink $margin="0 0 0 5px"> Sign Up</SkillLink>{" "}
        </SkillText>
      </SkillBox>
      <SkillDivider $margin="24px 0 0 0 ">Or</SkillDivider>
      <SkillBox $margin="24px 0 0 0">
        <SkillSocialSignIn />
      </SkillBox>
    </SkillForm>
  );
}

export default RegisterForm;
