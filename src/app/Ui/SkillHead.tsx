import styled, { css } from "styled-components";

interface SkillHeadProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  $variant?: "Primary" | "Secondary" | "Tertiary";
  $size?: string;
  $margin?: string; // Added margin prop
  $padding?: string; // Added padding prop
}

export const SkillHead = styled.p<SkillHeadProps>`
  /* Variant styles */
  ${(props) =>
    props.$variant === "Primary" &&
    css`
      font-size: 24px;
      font-weight: 600;
      line-height: 29px;
      letter-spacing: 0em;
    `}
  ${(props) =>
    props.$variant === "Secondary" &&
    css`
      color: blue;
    `}
  ${(props) =>
    props.$variant === "Tertiary" &&
    css`
      color: green;
    `}

  /* Size style */
  ${(props) => props.$size && `font-size: ${props.$size};`}

  /* Margin and padding styles */
  ${(props) => props.$margin && `margin: ${props.$margin};`}
  ${(props) => props.$padding && `padding: ${props.$padding};`}
`;

SkillHead.defaultProps = {
  as: "h2",
};
