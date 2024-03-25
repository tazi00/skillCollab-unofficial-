import styled, { css } from "styled-components";

interface StyledLiProps {
  $flex?: boolean; // Enable flexbox layout
  $grid?: boolean; // Enable grid layout
  $justifyContent?: string;
  $alignItems?: string;
  $flexBasis?: string;
  $gridColumn?: string;
  $color?: string;
  $flexDirection?: string; // Add flexDirection property
  $gap?: string; // Add gap property for grid layout
  // Add other flex/grid related properties as needed
  $variant?: "primary" | "secondary" | "tertiary"; // $Variant property
  $active?: boolean; // $Active property
}

export const SkillListItem = styled.li<StyledLiProps>`
  /* Common styles for all $variants */

  /* Apply styles based on $variant and $active state */
  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return css`
          background-color: ${props.$active ? " #D2F4F8" : "#ffffff"};
          color: ${props.$active ? "#000000" : "#000000"};
          padding: 12px;
          font-size: 14px;
          display: flex;
          cursor: pointer;
          gap: 10px;
          font-weight: 600;
          line-height: 33px;
          align-content: center;
        `;
      case "secondary":
        return css`
          font-size: 16px;
          font-weight: 700;
          height: 35px;
          line-height: 15px;
          letter-spacing: 0em;
          cursor: pointer;
          text-align: center;
          color: ${props.$active ? "#1B9AAA" : "#C4C4C4"};
        `;
      case "tertiary":
        return css`
          color: ${props.$active ? "#000000" : "#000000"};
          font-size: 14px;
          display: flex;
          cursor: pointer;
          padding: 2px 0;
          gap: 10px;
          font-weight: 600;
          line-height: 33px;
          align-content: center;
        `;
      default:
        return css`
          font-size: 16px;
          font-weight: 400;
          line-height: 19.36px;
          color: #000;
          text-align: right;
        `;
    }
  }}

  /* Apply flex properties if enabled */
  ${(props) =>
    props.$flex &&
    css`
      display: flex;
      justify-content: ${props.$justifyContent || "flex-start"};
      align-items: ${props.$alignItems || "stretch"};
      flex-basis: ${props.$flexBasis || "auto"};
      flex-direction: ${props.$flexDirection || "row"}; /* Default to row */
      /* Add other flex properties as needed */
    `}

  /* Apply grid properties if enabled */
  ${(props) =>
    props.$grid &&
    css`
      display: grid;
      grid-column: ${props.$gridColumn || "auto"};
      gap: ${props.$gap || "0"}; /* Set gap for grid layout */
      /* Add other grid properties as needed */
    `}
  ${(props) =>
    props.$color &&
    css`
      color: ${props.$color || "black"};
      /* Add other grid properties as needed */
    `}
`;
