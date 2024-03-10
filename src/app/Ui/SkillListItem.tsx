import styled, { css } from "styled-components";

interface StyledLiProps {
  $flex?: boolean; // Enable flexbox layout
  $grid?: boolean; // Enable grid layout
  $justifyContent?: string;
  $alignItems?: string;
  $flexBasis?: string;
  $gridColumn?: string;
  $flexDirection?: string; // Add flexDirection property
  $gap?: string; // Add gap property for grid layout
  // Add other flex/grid related properties as needed
}

export const SkillListItem = styled.li<StyledLiProps>`
  /* Apply flex properties if enabled */
  ${(props) =>
    props.$flex &&
    css`
      display: flex;
      justify-content: ${props.$justifyContent || "flex-start"};
      align-items: ${props.$alignItems || "stretch"};
      flex-basis: ${props.$flexBasis || "auto"};
      flex-direction: ${props.$flexDirection || "row"}; /* Default to row */
      /* Add other flex properties as needed */
    `}

  /* Apply grid properties if enabled */
  ${(props) =>
    props.$grid &&
    css`
      display: grid;
      grid-column: ${props.$gridColumn || "auto"};
      gap: ${props.$gap || "0"}; /* Set gap for grid layout */
      /* Add other grid properties as needed */
    `}
`;
