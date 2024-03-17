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

import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";

export type LoginInputs = {
  email: string;
  password: string;
};
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const { login } = useLogin();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
    login({ email: data.email, password: data.password });
  };

  return (
    <SkillForm onSubmit={handleSubmit(onSubmit)}>
      <SkillInputBox
        placeholder="Enter Your Email Address"
        type="email"
        label="Email"
        register={register("email", {
          required: "Email must be required.",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format",
          },
        })}
        autoComplete="username"
        defaultValue="td0540245@gmail.com"
      />

      {errors.email && (
        <SkillText $variant="error">{errors.email.message}</SkillText>
      )}
      <SkillInputBox
        placeholder="Enter Your Password"
        type="password"
        label="Password"
        autoComplete="current-password"
        register={register("password", {
          required: "Password is required.",
          minLength: {
            value: 8,
            message: "Password must be 8 characters or more",
          },
        })}
        defaultValue="Test@1234"
        render={<SkillLink $margin="10px 0 0 0">Forgot password?</SkillLink>}
      />
      {errors.password && (
        <SkillText $variant="error" $margin="-28px 0 0 0">
          {errors.password.message}
        </SkillText>
      )}
      <SkillBox $margin="30px 0 0 0 ">
        <SkillButton variant="primary" size="large" type="submit">
          Log in
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
