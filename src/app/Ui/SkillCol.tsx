import styled, { css } from "styled-components";

interface SkillColProps {
  $overflowX?: string;
  $overflowY?: string;
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $flexWrap?: string;
  $flexBasis?: string;
  $gap?: string;
  $gridTemplateColumns?: string;
  $gridGap?: string;
  $grid?: boolean;
  $flex?: boolean;
  // Add other flex/grid related properties as needed
}

export const SkillCol = styled.div<SkillColProps>`
  &::-webkit-scrollbar {
    display: none;
  }

  /* Apply overflow-x if provided */
  ${(props) =>
    props.$overflowX &&
    css`
      overflow-x: ${props.$overflowX};
    `}

  /* Apply overflow-y if provided */
  ${(props) =>
    props.$overflowY &&
    css`
      overflow-y: ${props.$overflowY};
    `}

  /* Apply flex properties if provided */
  ${(props) =>
    props.$flexDirection &&
    css`
      display: flex;
      flex-direction: ${props.$flexDirection};
      justify-content: ${props.$justifyContent || "flex-start"};
      align-items: ${props.$alignItems || "stretch"};
      flex-wrap: ${props.$flexWrap || "nowrap"};
      flex-basis: ${props.$flexBasis || "auto"};
    `}

  /* Apply grid properties if provided */
  ${(props) =>
    props.$gridTemplateColumns &&
    css`
      display: grid;
      grid-template-columns: ${props.$gridTemplateColumns};
      gap: ${props.$gridGap || "0"};
    `}

  /* Apply gap if provided */
  ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap};
    `}
  ${(props) =>
    props.$grid &&
    css`
      grid: ${props.$grid && "grid"};
    `}
  ${(props) =>
    props.$flex &&
    css`
      display: ${props.$flex && "flex"};
    `}
`;
