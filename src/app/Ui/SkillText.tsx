import styled, { css } from "styled-components";

interface SkillTextProps {
  $size?: string;
  $variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "success"
    | "bold"
    | "thin"
    | "tags"
    | "bgText";
  $margin?: string;
  $padding?: string;
  $fontBold?: string;
  $width?: string;
  $maxWidth?: string;
  $lineHeight?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $gap?: string;
  $flex?: boolean; // New prop to enable flexbox behavior
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $color?: string;
  $textAlign?: string;
  // Add other flex-related properties as needed
}

export const SkillText = styled.p<SkillTextProps>`
  /* Apply size if provided */
  ${(props) => props.$size && `font-size: ${props.$size};`}

  /* Apply variant styles */
  ${(props) =>
    props.$variant === "primary" &&
    css`
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      color: #000;
    `}
  ${(props) =>
    props.$variant === "secondary" &&
    css`
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: right;
      color: #1b9aaa;
      margin-top: 6px;
    `}
  ${(props) =>
    props.$variant === "tertiary" &&
    css`
      font-size: 18px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 30px;
      color: #000;
      /* Example style for tertiary variant */
    `}
  ${(props) =>
    props.$variant === "error" &&
    css`
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      margin-bottom: 20px;
      color: #ff2424; /* Example style for tertiary variant */
    `}
  ${(props) =>
    props.$variant === "success" &&
    css`
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #31ff03; /* Example style for tertiary variant */
    `}
  ${(props) =>
    props.$variant === "bold" &&
    css`
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      color: #fff;
      letter-spacing: 0em;
      text-align: center;
      /* Example style for tertiary variant */
    `}
  ${(props) =>
    props.$variant === "thin" &&
    css`
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      color: #fff;
      letter-spacing: 0em;
      text-align: center;
    `}
  ${(props) =>
    props.$variant === "tags" &&
    css`
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #979c9e;
    `}
  ${(props) =>
    props.$variant === "bgText" &&
    css`
      font-size: 26px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #ffffff;
    `}

  /* Apply margin if provided */
  ${(props) => props.$margin && `margin: ${props.$margin};`}
  ${(props) => props.$lineHeight && `line-height: ${props.$lineHeight};`}

  /* Apply padding if provided */
  ${(props) => props.$padding && `padding: ${props.$padding};`}

  /* Apply width if provided */
  ${(props) => props.$width && `width: ${props.$width};`}
  ${(props) => props.$fontBold && `font-weight: ${props.$fontBold};`}

  /* Apply max-width if provided */
  ${(props) => props.$maxWidth && `max-width: ${props.$maxWidth};`}

  /* Apply min-height if provided */
  ${(props) => props.$minHeight && `min-height: ${props.$minHeight};`}

  /* Apply max-height if provided */
  ${(props) => props.$maxHeight && `max-height: ${props.$maxHeight};`}

  /* Apply flexbox properties if $flex is true */
  ${(props) =>
    props.$flex &&
    css`
      display: flex;
      flex-direction: ${props.$flexDirection || "row"};
      justify-content: ${props.$justifyContent || "flex-start"};
      align-items: ${props.$alignItems || "stretch"};
    `}
  ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap || "0"};
    `}
  ${(props) =>
    props.$textAlign &&
    css`
      text-align: ${props.$textAlign || "left"};
    `}
  ${(props) =>
    props.$color &&
    css`
      color: ${props.$color || "#000"};
    `}
`;
