import styled, { css } from "styled-components";

interface ImgProps {
  $height?: string;
  $width?: string;
  $margin?: string;
  $padding?: string;
  $borderRadius?: string; // Added borderRadius property
  $border?: string; // Added border property
  // Add more properties as needed
}

export const SkillImg = styled.img<ImgProps>`
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

  /* Apply border radius if provided */
  ${(props) =>
    props.$borderRadius &&
    css`
      border-radius: ${props.$borderRadius};
    `}

  /* Apply border if provided */
  ${(props) =>
    props.$border &&
    css`
      border: ${props.$border};
    `} /* Add more styling properties as needed */
`;
