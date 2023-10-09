/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import WaveBackGround from '../assets/WaveBackGround.svg';

const background = css`
  background-image: url(${WaveBackGround});
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const container = css`
  padding-top: 100px;
`;

const title = css`
  text-align: center;
  margin-bottom: 100px;
`;

const textContainer = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  & > div {
    width: 450px;
    height: 450px;
    border: 1px solid black;
    background-color: white;
  }
`;

const inputContainer = css`
  // 입력창
`;

const resultContainer = css`
  // 결과창
`;

const filterContainer = css`
  // 필터링 설정 컨테이너;
  border: 1px solid black;
`;

const bottomInfo = css`
  text-align: center;
`;

function MainPage() {
  return (
    <div css={background}>
      <div css={container}>
        <div css={title}>MyBT</div>
        <div css={textContainer}>
          {/* 내용, 출처(선택), 저자(선택), 날짜(선택) */}
          <div css={inputContainer}>입력창</div>
          <div css={resultContainer}>결과창</div>
        </div>
        {/* 배경, 글씨체, 글씨색, 글씨크기, 볼드기울기밑줄, 정렬(오른쪽가운데왼쪽) */}
        <div css={filterContainer}>필터링 창</div>
        <div css={bottomInfo}>하단 정보</div>
      </div>
    </div>
  );
}

export default MainPage;
