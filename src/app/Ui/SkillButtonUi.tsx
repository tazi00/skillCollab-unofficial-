import styled, { css, CSSObject } from "styled-components";

// Define prop types for the button component
interface ButtonProps {
  $margin?: string;
  $size?: "small" | "medium" | "large";
  $variant?: "primary" | "secondary" | "tertiary";
}

// Define a type for the style functions
type StyleFunction = (props: ButtonProps) => CSSObject;

// Function to get size styles
const getSize: StyleFunction = ({ $size }) => {
  switch ($size) {
    case "small":
      return css`
        padding: 8px 13px;
        font-size: 14px;
      `;
    case "medium":
      return css`
        padding: 12px 24px;
        font-size: 16px;
      `;
    case "large":
      return css`
        padding: 13px;
        width: 100%;
        height: 45px;
        font-size: 18px;
      `;
    default:
      return css`
        padding: 12px 24px;
        font-size: 16px;
      `;
  }
};

// Function to get variant styles
const getVariant: StyleFunction = ({ $variant }) => {
  switch ($variant) {
    case "primary":
      return css`
        background-color: #1b9aaa;
        color: #fff;
        box-shadow: 0px 8px 18px 0px #1b9aaa40;
        box-shadow: 0px 0px 1px 0px #1414140a;
      `;
    case "secondary":
      return css`
        background-color: rgba(255, 255, 255, 0.139);
        border: 3px solid #fff;
        color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      `;
    case "tertiary":
      return css`
        background-color: transparent;
        color: #007bff;
        border: 1px solid #007bff;
      `;
    default:
      return css`
        background-color: #007bff;
        color: #fff;
        border: none;
      `;
  }
};

// Styled button component with TypeScript support
export const SkillButtonUi = styled.button<ButtonProps>`
  font-size: 16px;
  font-weight: 700;
  border: none;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  &:disabled {
    opacity: 0.4;
  }
  margin: ${(props) => props.$margin || "0"};
  ${(props) => getSize(props)};
  ${(props) => getVariant(props)};
`;
