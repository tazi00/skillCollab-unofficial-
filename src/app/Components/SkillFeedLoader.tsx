import styled from "styled-components";

function SkillFeedLoader() {
  return (
    <SkillSkeleton>
      <div className="top"></div>
      <div className="body"></div>
      <div className="bottom"></div>
    </SkillSkeleton>
  );
}

export default SkillFeedLoader;

const SkillSkeleton = styled.div`
  height: 300px;
  width: 100%;
  background-color: #fafafa;
  border-radius: 20px;
  display: grid;
  padding: 20px;
  gap: 20px;
  overflow: hidden;
  box-shadow: 0px 1px 15px 0px #33333314;
  grid-template-rows: auto 1fr auto;
  margin-bottom: 30px;
  .top {
    height: 40px;
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0px;
      top: 0px;
      animation: blink 2s ease-in-out infinite;
    }
  }
  .body {
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0px;
      top: 0px;
      animation: blink 2s ease-in-out infinite;
    }
  }
  .bottom {
    height: 40px;
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0px;
      top: 0px;
      animation: blink 2s ease-in-out infinite;
    }
  }
  @keyframes blink {
    0% {
      background-color: #f3f3f3;
    }
    50% {
      background-color: #fefefe;
    }
    100% {
      background-color: #f3f3f3;
    }
  }
`;
