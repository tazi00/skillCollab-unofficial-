import styled, { css } from "styled-components";

interface StyledUlProps {
  $flex?: boolean; // Enable flexbox layout
  $grid?: boolean; // Enable grid layout
  $justifyContent?: string;
  $alignItems?: string;
  $flexWrap?: string;
  $flexDirection?: string; // Add flexDirection property
  $gridTemplateColumns?: string;
  $gap?: string;
  $margin?: string; // Dynamic margin
  $padding?: string; // Dynamic padding
  // Add other flex/grid related properties as needed
}

export const SkillList = styled.ul<StyledUlProps>`
  list-style-type: none;
  margin: ${(props) => props.$margin || "0"}; /* Apply dynamic margin */
  padding: ${(props) => props.$padding || "0"}; /* Apply dynamic padding */

  /* Apply flex properties if enabled */
  ${(props) =>
    props.$flex &&
    css`
      display: flex;
      justify-content: ${props.$justifyContent || "flex-start"};
      align-items: ${props.$alignItems || "stretch"};
      flex-wrap: ${props.$flexWrap || "nowrap"};
      flex-direction: ${props.$flexDirection || "row"};
      gap: ${props.$gap || "0"};
      /* Default to row */
      /* Add other flex properties as needed */
    `}

  /* Apply grid properties if enabled */
  ${(props) =>
    props.$grid &&
    css`
      display: grid;
      grid-template-columns: ${props.$gridTemplateColumns || "auto"};
      gap: ${props.$gap || "0"};
      /* Add other grid properties as needed */
    `}
`;
