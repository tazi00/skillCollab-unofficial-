import styled, { css } from "styled-components";

// Define type for styled component props
interface SkillSpanProps {
  $variant?: "primary" | "secondary" | "tertiary";
  $margin?: string;
  $padding?: string;
  $color?: string;
  $cursor?: string;

  $fontSize?: string;
  $fontBold?: string;
  $flex?: {
    $direction?: string;
    $justifyContent?: string;
    $alignItems?: string;
    $flexWrap?: string;
    $gap?: string;
  };
  $grid?: {
    $templateColumns?: string;
    $templateRows?: string;
    $gap?: string;
    $justifyContent?: string;
    $alignItems?: string;
  };
}

// Define the styled component
const SkillSpan = styled.span<SkillSpanProps>`
  /* Default styles */
  display: inline-block;

  /* Apply $variant styles based on props */
  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #1b9aaa;

      /* Example primary color */
    `}
  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      font-size: 12px;
      font-weight: 600;
      color: #4c4c4c;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: left;
      /* Example secondary color */
    `}
  ${({ $variant }) =>
    $variant === "tertiary" &&
    css`
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      color: #979c9e;
      letter-spacing: 0em;
      /* Example tertiary color */
    `}

  /* Apply margin and padding styles based on props */
  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `}
  ${({ $padding }) =>
    $padding &&
    css`
      padding: ${$padding};
    `}
  ${({ $fontBold }) =>
    $fontBold &&
    css`
      font-weight: ${$fontBold};
    `}
  ${({ $fontSize }) =>
    $fontSize &&
    css`
      font-size: ${$fontSize};
    `}
  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}
  ${({ $cursor }) =>
    $cursor &&
    css`
      cursor: ${$cursor};
    `}

  /* Apply flex styles based on props */
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

  /* Apply grid styles based on props */
  ${({ $grid }) =>
    $grid &&
    css`
      display: grid;
      grid-template-columns: ${$grid.$templateColumns || "auto"};
      grid-template-rows: ${$grid.$templateRows || "auto"};
      gap: ${$grid.gap || "0"};
      justify-content: ${$grid.$justifyContent || "flex-start"};
      align-items: ${$grid.$alignItems || "stretch"};
    `}
`;

export default SkillSpan;
