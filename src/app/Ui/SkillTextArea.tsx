import styled from "styled-components";

interface BackgroundProps {
  $backgroundImage?: string;
  $backgroundColor?: string;
  $backgroundSize?: string;
  $backgroundPosition?: string;
  $backgroundRepeat?: string;
}
interface SkillTextareaProps extends BackgroundProps {
  $mode?: "one" | "two" | "three" | "four"; // Define $modes
}
export const SkillTextarea = styled.textarea<SkillTextareaProps>`
  /* Add your custom textarea styles here */
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  box-shadow: 0px 1px 15px 0px #00000014;
  resize: none; /* Disable textarea resizing */

  /* Apply background styles if each property exists */
  ${(props) =>
    props.$backgroundImage &&
    `background-image:url(${props.$backgroundImage});`}
  ${(props) =>
    props.$backgroundColor && `background-color: ${props.$backgroundColor};`}
  ${(props) =>
    props.$backgroundSize && `background-size: ${props.$backgroundSize};`}
  ${(props) =>
    props.$backgroundPosition &&
    `background-position: ${props.$backgroundPosition};`}
  ${(props) =>
    props.$backgroundRepeat && `background-repeat: ${props.$backgroundRepeat};`}
  ${(props) => {
    switch (props.$mode) {
      case "one":
        return `
          height: 150px; /* Adjust height as needed */
          background-repeat: no-repeat;
          background-position: center right 10px;
          background-size: 18px;
        `;
      case "two":
        return `
          border-radius: 10px; /* Adjust border-radius as needed */
          height: 150px; /* Adjust height as needed */
          background: #eee;
          border: none;
        `;
      case "three":
        return `
          /* Define background styles for $mode three */
        `;
      case "four":
        return `
          /* Define background styles for $mode four */
        `;
      default:
        return "";
    }
  }}
`;

// Example usage:
// <SkillTextarea $mode="one" $backgroundImage="your-image.jpg" />
