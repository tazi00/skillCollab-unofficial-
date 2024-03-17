// FormRow.js
import { ReactNode } from "react";
import { SkillBox, SkillInput, SkillLabel } from "../Ui";

interface SkillInputProps {
  label: string;
  type: "text" | "email" | "password" | "number"; // Define the types of input fields
  placeholder: string;
  defaultValue?: string | number; // Add defaultValue prop
  render?: ReactNode;
  register: any;
  autoComplete?: string;
}

function SkillInputBox({
  placeholder,
  label,
  type,
  defaultValue,
  render,
  register,
  autoComplete,
}: SkillInputProps) {
  return (
    <SkillBox $margin="0 0 16px 0">
      <SkillLabel>{label}</SkillLabel>
      <SkillInput
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        {...register}
      />
      {render}
    </SkillBox>
  );
}

export default SkillInputBox;
