// FormRow.js
import React, { ReactNode } from "react";
import { SkillBox, SkillInput, SkillLabel } from "../Ui";
interface SkillInputProps {
  label: string;
  type: "text" | "email" | "password" | "number"; // Define the types of input fields
  placeholder: string;
  Hfor: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  render?: ReactNode;
}

function SkillInputBox({
  label,
  type,
  placeholder,
  Hfor,
  value,
  onChange,
  render,
}: SkillInputProps) {
  return (
    <SkillBox $margin="0 0 16px 0">
      <SkillLabel htmlFor={Hfor}>{label}</SkillLabel>
      <SkillInput
        type={type}
        id={Hfor}
        name={Hfor}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {render}
    </SkillBox>
  );
}

export default SkillInputBox;
