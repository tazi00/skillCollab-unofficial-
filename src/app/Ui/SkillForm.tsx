import styled, { css } from "styled-components";

interface SkillFormProps {
  $mode?: "one" | "two" | "three" | "four"; // Define modes
}

export const SkillForm = styled.form<SkillFormProps>`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;

  ${(props) =>
    props.$mode === "one" &&
    css`
      padding: 0;
      background: unset;
    `}

  ${(props) =>
    props.$mode === "two" &&
    css`
      background-color: #eaeaea; /* Mode two background color */
      border: 2px solid #666; /* Mode two border */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Mode two box shadow */
    `}

  ${(props) =>
    props.$mode === "three" &&
    css`
      background-color: #dcdcdc; /* Mode three background color */
      border: 3px solid #333; /* Mode three border */
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); /* Mode three box shadow */
    `}
  ${(props) =>
    props.$mode === "four" &&
    css`
      width: 100%;
      max-width: 100%;
      padding: 0 20px 10px;
      /* Mode three box shadow */
    `}
`;
