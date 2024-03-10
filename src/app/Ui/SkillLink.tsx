import styled, { css } from "styled-components";

interface SkillLinkProps {
  $margin?: string;
  $padding?: string;
  $fontSize?: string;
}

export const SkillLink = styled.span<SkillLinkProps>`
  font-size: ${(props) => props.$fontSize || "14px"};
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: right;
  color: #1b9aaa;
  margin-top: 6px;
  cursor: pointer;
  display: block;

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}
`;
