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
  $maxWidh?: string;
  $height?: string;
  $width?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $beforeContent?: string;
  $afterContent?: string;
  $shadow?: boolean;
  $variant?: "modal-sm" | "modal-lg";
  $before?: boolean; // Prop to enable/disable ::before
  $after?: boolean; // Prop to enable/disable ::after
}

export const SkillCard = styled.div<SkillCardProps>`
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  ${(props) =>
    props.$shadow &&
    css`
      background: #ffffff;
      box-shadow: 0px 1px 15px 0px #33333314;
    `}
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
    props.$maxWidh &&
    css`
      max-width: ${props.$maxWidh};
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

  /* Conditionally apply styles for ::before and ::after pseudo-elements */
  ${(props) =>
    props.$before &&
    props.$beforeContent &&
    css`
      &::before {
        content: "${props.$beforeContent}";
        /* Add additional styles for ::before here */
      }
    `}

  ${(props) =>
    props.$after &&
    props.$afterContent &&
    css`
      &::after {
        content: "${props.$afterContent}";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
        left: 0;
        background-color: #00000063;
        /* Add additional styles for ::after here */
      }
    `}
    ${(props) =>
    props.$variant === "modal-sm" &&
    css`
      /* Styles for modal-sm variant */
      max-width: 400px; /* Example width */
      /* Add other specific styles for modal-sm */
    `}

  ${(props) =>
    props.$variant === "modal-lg" &&
    css`
      position: fixed;
      top: 0;
      height: 100%;
      width: 100%;
      background: #0000000f;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      & > div {
        max-width: 900px;
        width: 100%;
        background: #fff;
      }
    `}
`;
