import styled, { css } from "styled-components";

interface SkillSectionProps {
  $margin?: string;
  $padding?: string;
}

export const SkillSection = styled.section<SkillSectionProps>`
  background-color: #fff;
  height: 100%;
  /* Conditionally apply $margin if provided */
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}

  /* Conditionally apply $padding if provided */
  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}
`;
