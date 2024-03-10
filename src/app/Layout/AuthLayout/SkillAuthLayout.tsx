import styled, { css } from "styled-components";

interface SkillAuthProps {
  textAlign?: "left" | "center" | "right"; // Allowable text-align values
  margin?: string; // Margin value
  padding?: string; // Padding value
}

export const SkillAuthLayout = styled.section<SkillAuthProps>`
  /* Default styles */
  display: block; /* Ensure it's a block-level element */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */

  /* Dynamic styles based on props */
  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;
