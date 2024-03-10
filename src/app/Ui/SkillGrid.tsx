import styled, { css } from "styled-components";

interface SkillGridProps {
  $col: number | string[];
  $height?: string;
  $width?: string;
  $gap?: number;
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
`;
