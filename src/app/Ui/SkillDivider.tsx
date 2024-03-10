import styled, { css } from "styled-components";

interface SkillDividerProps {
  $margin?: string;
  $padding?: string;
}

export const SkillDivider = styled.span<SkillDividerProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  display: block;
  position: relative;
  letter-spacing: 0em;
  height: 20px;
  text-align: center;
  width: 100%;
  color: #c4c4c4;

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
  
  &::after {
    content: "";
    height: 1px;
    width: 200px;
    background: #c4c4c4;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    content: "";
    height: 1px;
    width: 200px;
    background: #c4c4c4;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
