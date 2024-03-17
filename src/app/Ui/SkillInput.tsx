import styled from "styled-components";

interface BackgroundProps {
  $backgroundImage?: string;
  $backgroundColor?: string;
  $backgroundSize?: string;
  $backgroundPosition?: string;
  $backgroundRepeat?: string;
}
interface SkillInputProps extends BackgroundProps {
  $mode?: "one" | "two" | "three" | "four"; // Define $modes
}
export const SkillInput = styled.input<SkillInputProps>`
  /* Add your custom input styles here */
  border: 1px solid #ffffff;
  border-radius: 5px;
  height: 45px;
  width: 100%;
  padding: 15px;
  box-shadow: 0px 1px 15px 0px #00000014;

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
         height:40px;
         background-repeat:no-repeat;
         background-repeat: no-repeat;
    background-position: center right 10px;
    background-size: 18px;
        `;
      case "two":
        return `
          border-radius:50px;
          height:40px;
          background: #eee;
          border:none;
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
