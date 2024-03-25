import styled, { css } from "styled-components";

interface SkillBoxProps {
  $textAlign?: "left" | "center" | "right";
  $height?: string;
  $maxHeight?: string;
  $minHeight?: string;
  $width?: string;
  $maxWidth?: string;
  $minWidth?: string;
  $margin?: string;
  $borderRadius?: string;
  $padding?: string;
  $position?: {
    $pos: "absolute" | "relative" | "fixed";
    $right: number;
    $left: number;
    $top: number;
    $bottom: number;
  };
  $backgroundColor?: string;
  $overflow?: string;
  // Add flex properties
  $flex?: boolean;
  $flexDirection?: string;
  $flexWrap?: string;
  $justifyContent?: string;
  $alignItems?: string;
  // Add grid properties
  $grid?: string;
  $gridTemplateColumns?: string;
  $gridTemplateRows?: string;
  $gridGap?: string;
  $gap?: string; // Alias for gridGap
}

export const SkillBox = styled.div<SkillBoxProps>`
  display: block;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }

  /* Apply background color if provided */
  ${(props) =>
    props.$backgroundColor &&
    css`
      background-color: ${props.$backgroundColor};
    `}

  /* Apply text alignment if provided */
  ${(props) =>
    props.$textAlign &&
    css`
      text-align: ${props.$textAlign};
    `}
  ${(props) =>
    props.$borderRadius &&
    css`
      border-radius: ${props.$borderRadius};
    `}

  /* Apply margin if provided */
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}

  /* Apply padding if provided */
  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  /* Apply height if provided */
  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height};
    `}

  /* Apply maxHeight if provided */
  ${(props) =>
    props.$maxHeight &&
    css`
      max-height: ${props.$maxHeight};
    `}

  /* Apply minHeight if provided */
  ${(props) =>
    props.$minHeight &&
    css`
      min-height: ${props.$minHeight};
    `}

  /* Apply width if provided */
  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}

  /* Apply maxWidth if provided */
  ${(props) =>
    props.$maxWidth &&
    css`
      max-width: ${props.$maxWidth};
    `}

  /* Apply minWidth if provided */
  ${(props) =>
    props.$minWidth &&
    css`
      min-width: ${props.$minWidth};
    `}

  /* Apply overflow if provided */
  ${(props) =>
    props.$overflow &&
    css`
      overflow: ${props.$overflow};
    `}

  /* Flex properties */
  ${(props) =>
    props.$flex &&
    css`
      display: flex;
    `}

  ${(props) =>
    props.$flexDirection &&
    css`
      flex-direction: ${props.$flexDirection};
    `}

  ${(props) =>
    props.$flexWrap &&
    css`
      flex-wrap: ${props.$flexWrap};
    `}

  ${(props) =>
    props.$justifyContent &&
    css`
      justify-content: ${props.$justifyContent};
    `}

  ${(props) =>
    props.$alignItems &&
    css`
      align-items: ${props.$alignItems};
    `}

  /* Grid properties */
  ${(props) =>
    props.$grid &&
    css`
      display: grid;
      grid: ${props.$grid};
    `}

  ${(props) =>
    props.$gridTemplateColumns &&
    css`
      grid-template-columns: ${props.$gridTemplateColumns};
    `}

  ${(props) =>
    props.$gridTemplateRows &&
    css`
      grid-template-rows: ${props.$gridTemplateRows};
    `}

  ${(props) =>
    props.$gridGap &&
    css`
      grid-gap: ${props.$gridGap};
    `}

  /* Alias for gridGap */
  ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap};
    `}
  ${(props) =>
    props.$position &&
    css`
      position: ${props.$position.$pos};
      right: ${props.$position.$right};
      left: ${props.$position.$left};
      top: ${props.$position.$top};
      bottom: ${props.$position.$bottom};
    `}
`;
