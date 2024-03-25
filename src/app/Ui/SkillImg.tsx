import styled, { css } from "styled-components";

interface ImgProps {
  $height?: string;
  $width?: string;
  $margin?: string;
  $padding?: string;
  $object?: "cover" | "contain";
  $borderRadius?: string; // Added borderRadius property
  $border?: string;
  $variant?: "badge" | "simple";
}

export const SkillImg = styled.img<ImgProps>`
  /* Apply height if provided */
  cursor: pointer;
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
  ${(props) =>
    props.$object &&
    css`
      object-fit: ${props.$object};
    `} /* Add more styling properties as needed */

     ${(props) =>
    props.$variant === "badge" &&
    css`
      cursor: pointer;
      height: 120px;
      width: 120px;
      border-radius: 50%;
      position: relative;
      margin-top: -80px;
      border: 1px solid #000;
      margin-left: 20px;
    `}

  ${(props) =>
    props.$variant === "simple" &&
    css`
      object-fit: cover;
    `}
`;
