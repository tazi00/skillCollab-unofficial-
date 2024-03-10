import {
  SkillInputBox,
  SkillButton,
  SkillSocialSignIn,
} from "@/app/Components";
import {
  SkillBox,
  SkillDivider,
  SkillForm,
  SkillLink,
  SkillText,
} from "@/app/Ui";

import { ChangeEvent, FormEvent, useState } from "react";
import useLogin from "../hooks/useLogin";
import { isValidEmail } from "@/app/Utils/validations";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
    deviceToken:
      "f_wPBQu9NUW-ndhgXOXAmt:APA91bHBlRk3M_PRbN4ucaHXX4NCPT72wvst-M9gjqgtjXWQjAMe7Ukw5CPtDJhrU0AiM-_KzAIi66bK7QPHBgPVm0ZEVPTATHvENwhQ5fL2neHT4vZQtyxWe8SwMp4rAL1wdk7sBovV",
  });
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const { mutate: login, isPending } = useLogin();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formdata.email) {
      setEmailError("Please enter your email.");
      return;
    }
    if (!isValidEmail(formdata.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError(null); // Clear email error message
    if (!formdata.password) {
      setPasswordError("Please enter your password.");
      return;
    }
    if (formdata.password.length < 4) {
      setPasswordError("Password must be at least 4 characters long.");
      return;
    }
    setPasswordError(null);

    login({
      email: formdata.email,
      password: formdata.password,
    });
  }

  return (
    <SkillForm onSubmit={(e) => handleSubmit(e)}>
      <SkillInputBox
        placeholder="Enter Your Email Address"
        type="email"
        label="Email"
        Hfor="email"
        value={formdata.email}
        onChange={(e) => handleChange(e)}
      />
      {emailError && <SkillText $variant="error">{emailError}</SkillText>}
      <SkillInputBox
        placeholder="Enter Your Password"
        type="password"
        label="Password"
        Hfor="password"
        value={formdata.password}
        onChange={(e) => handleChange(e)}
        render={<SkillLink $margin="10px 0 0 0">Forgot password?</SkillLink>}
      />
      {passwordError && <SkillText $variant="error">{passwordError}</SkillText>}
      <SkillBox $margin="30px 0 0 0 ">
        <SkillButton disabled={isPending} variant="primary" size="large">
          {isPending ? "Logging" : "Log in"}
        </SkillButton>
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

export default LoginForm;
