import { ReactNode, ButtonHTMLAttributes } from "react";
import { SkillButtonUi } from "../Ui";

interface SkillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  margin?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary";
}

function SkillButton({
  children,
  margin,
  variant,
  size,
  ...rest
}: SkillButtonProps) {
  return (
    <SkillButtonUi $variant={variant} $size={size} $margin={margin} {...rest}>
      {children}
    </SkillButtonUi>
  );
}

export default SkillButton;
