/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ForestBackGround from '../assets/Forest.svg';
import { TextTyping } from '../components/textTyping';
import { MovingStar } from '../components/movingStar';
import {
  skyBackGround,
  title,
  container,
  forestStyle,
  subContainer,
  textTypingContainer,
} from '../styles/info';

const infoContainer = css`
  display: flex;
  flex: 1;

  & > div {
    flex: 1;
    background-color: yellow;
  }

  & > span {
    color: #ffffff;
    flex: 1;
    font-size: 40px;
    text-align: center;
    font-family: TheJamsil;
    @media (max-width: 1000px) {
      font-size: 30px;
    }
    @media (max-width: 800px) {
      font-size: 25px;
    }
    & > span {
      font-weight: bold;
      font-style: italic;
      color: #4991d4;
      text-shadow: 2px 2px 4px rgba(73, 145, 212, 0.7);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

function InfoPage() {
  return (
    <div css={container}>
      <div css={skyBackGround}>
        <img src={ForestBackGround} css={forestStyle} />
        <MovingStar />
        <div css={title}>
          <span>MYBT</span>
        </div>
      </div>
      <div css={subContainer}>
        <div css={textTypingContainer}>
          <TextTyping
            text="' MY BOOK TEXT - MYBT '"
            color="#FFFFFF"
            size={50}
            fontFamily="JSArirang"
          />
        </div>
        <div>
          <div css={infoContainer}>
            <div>사진</div>
            <span>
              나의 <span>Book Text</span> 를 자유롭게!
            </span>
          </div>
          <div css={infoContainer}>
            <span>
              이미지를 저장하여 나의
              <br />
              <span>Book Text</span> 자랑하기!
            </span>
            <div>사진</div>
          </div>
        </div>
        <div>
          <span>
            지금 바로 <span>MYBT</span> 를 시작해보세요!
          </span>
          <div>시작하기</div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
