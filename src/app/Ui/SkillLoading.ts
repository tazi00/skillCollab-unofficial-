import styled from "styled-components";

export const SkillLoading = styled.div`
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &:not(:required) {
    /* hide "loading..." text */
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }
  &:not(:required):after {
    content: "";
    display: block;
    font-size: 10px;
    width: 1em;
    height: 1em;
    margin-top: -0.5em;
    -webkit-animation: spinner 150ms infinite linear;
    -moz-animation: spinner 150ms infinite linear;
    -ms-animation: spinner 150ms infinite linear;
    -o-animation: spinner 150ms infinite linear;
    animation: spinner 150ms infinite linear;
    border-radius: 0.5em;

    box-shadow: rgba(27, 154, 170, 0.75) 1.5em 0 0 0,
      rgba(27, 154, 170, 0.75) 1.1em 1.1em 0 0,
      rgba(27, 154, 170, 0.75) 0 1.5em 0 0,
      rgba(27, 154, 170, 0.75) -1.1em 1.1em 0 0,
      rgba(27, 154, 170, 0.75) -1.5em 0 0 0,
      rgba(27, 154, 170, 0.75) -1.1em -1.1em 0 0,
      rgba(27, 154, 170, 0.75) 0 -1.5em 0 0,
      rgba(27, 154, 170, 0.75) 1.1em -1.1em 0 0;
  }

  &::before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;