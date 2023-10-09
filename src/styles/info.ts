import { css } from '@emotion/react';

export const skyBackGround = css`
  color: #fff;
  background: linear-gradient(-45deg, #9ac1c8, #82a4d7, #2f76b8, #1224cb);
  background-repeat: no-repeat;
  background-size: 400% 400%;
  position: relative;
  animation: backgroundChange 20s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @keyframes backgroundChange {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const title = css`
  color: #ffffff;
  font-family: Ramche;
  font-size: 200px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 20px;
  position: absolute;
  top: 20%;
  z-index: 2;
  animation: blink 4s infinite;

  @media (max-width: 1000px) {
    font-size: 150px;
    top: 30%;
  }

  @media (max-width: 600px) {
    font-size: 100px;
    top: 40%;
  }

  @keyframes blink {
    0% {
      opacity: 70%;
    }
    50% {
      opacity: 20%;
    }
    100% {
      opacity: 70%;
    }
  }
`;

export const container = css`
  width: 100%;
  height: 100vh;
`;

export const forestStyle = css`
  width: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const subContainer = css`
  background-color: #000000;
`;

export const textTypingContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;
