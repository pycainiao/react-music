/**
 * 圆圈加载
 */

import React from "react";
import styled, { keyframes } from "styled-components";
// import { px2vw } from "../tool/px2vw";

const LoadingWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
`;
const loading = keyframes`
  0%,100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`;
const LoadingMain = styled.div`
  > div {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.6;
    border-radius: 50%;
    background-color: #d44439;
    animation: ${loading} 1.4s infinite ease-in;
  }
  > div:nth-child(2) {
    background-color: #61dafb;
    animation-delay: -0.7s;
  }
`;
function Loading() {
  return (
    <LoadingWrapper>
      <LoadingMain>
        <div></div>
        <div></div>
      </LoadingMain>
    </LoadingWrapper>
  );
}

export default React.memo(Loading);
