import styled, { css } from "styled-components";

interface SkillContainerProps {
  $fluid?: boolean; // Prop to determine if container should be fluid or fixed-width
}

export const SkillContainer = styled.section<SkillContainerProps>`
  margin-inline: auto;

  /* Conditionally apply width */
  ${(props) =>
    props.$fluid
      ? css`
          width: 100%;
        `
      : css`
          width: min(1314px, 95%);
        `}
`;
