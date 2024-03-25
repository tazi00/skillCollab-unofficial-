import styled, { css } from "styled-components";

interface SkillHeadProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  $variant?: "Primary" | "Secondary" | "Tertiary";
  $size?: string;
  $margin?: string; // Added margin prop
  $padding?: string; // Added padding prop
  $color?: string;
  $fontBold?: string;
  $flex?: {
    $direction?: string;
    $justifyContent?: string;
    $alignItems?: string;
    $flexWrap?: string;
    $gap?: string;
  };
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
      font-size: 14px;
      font-weight: 700;
      line-height: 16.94px;
      text-align: left;
    `}
  ${(props) =>
    props.$variant === "Tertiary" &&
    css`
      color: green;
    `}

  /* Size style */
  ${(props) => props.$size && `font-size: ${props.$size};`}
  ${(props) => props.$color && `color: ${props.$color};`}
  ${(props) => props.$fontBold && `font-weight: ${props.$fontBold};`}
  ${({ $flex }) =>
    $flex &&
    css`
      display: flex;
      flex-direction: ${$flex.$direction || "row"};
      justify-content: ${$flex.$justifyContent || "flex-start"};
      align-items: ${$flex.$alignItems || "stretch"};
      flex-wrap: ${$flex.$flexWrap || "nowrap"};
      gap: ${$flex.$gap || "0"};
    `}
  /* Margin and padding styles */
  ${(props) => props.$margin && `margin: ${props.$margin};`}
  ${(props) => props.$padding && `padding: ${props.$padding};`}
`;

SkillHead.defaultProps = {
  as: "h2",
};
