import styled, { css } from "styled-components";

interface BackgroundProps {
  $backgroundImage?: string;
  $backgroundColor?: string;
  $backgroundSize?: string;
  $backgroundPosition?: string;
  $backgroundRepeat?: string;
}

interface SkillCardProps extends BackgroundProps {
  $margin?: string;
  $padding?: string;
  $height?: string;
  $width?: string;
  $minHeight?: string;
  $maxHeight?: string;
}

export const SkillCard = styled.div<SkillCardProps>`
  border-radius: 15px;

  ${(props) =>
    props.$backgroundImage &&
    css`
      background-image: url(${props.$backgroundImage});
    `}

  ${(props) =>
    props.$backgroundColor &&
    css`
      background-color: ${props.$backgroundColor};
    `}

  ${(props) =>
    props.$backgroundSize &&
    css`
      background-size: ${props.$backgroundSize};
    `}

  ${(props) =>
    props.$backgroundPosition &&
    css`
      background-position: ${props.$backgroundPosition};
    `}

  ${(props) =>
    props.$backgroundRepeat &&
    css`
      background-repeat: ${props.$backgroundRepeat};
    `}

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

  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height};
    `}

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}

  ${(props) =>
    props.$minHeight &&
    css`
      min-height: ${props.$minHeight};
    `}

  ${(props) =>
    props.$maxHeight &&
    css`
      max-height: ${props.$maxHeight};
    `}
`;
