import styled, { css } from "styled-components";

interface SkillGridProps {
  $col: number | string[];
  $height?: string;
  $width?: string;
  $gap?: string;
  $alignItems?: string;
  $justifyContent?: string;
}

export const SkillGrid = styled.div<SkillGridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    typeof props.$col === "number"
      ? `repeat(${props.$col}, 1fr)`
      : props.$col.join(" ")};
  gap: ${(props) => props.$gap};

  /* Apply height if provided */
  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height};
    `}

  /* Apply width if provided */
  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}

  /* Apply align-items if provided */
  ${(props) =>
    props.$alignItems &&
    css`
      align-items: ${props.$alignItems};
    `}

  /* Apply justify-content if provided */
  ${(props) =>
    props.$justifyContent &&
    css`
      justify-content: ${props.$justifyContent};
    `}
`;
