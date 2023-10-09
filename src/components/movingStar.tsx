/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';

// 별 이동효과
const moveStar = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const skyStyle = css`
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${moveStar} 240s linear infinite;
`;

const starStyle = css`
  fill: #fff;
  stroke: none;
  stroke-width: 0;
`;

const getRandomValue = (maxSize: number) => Math.random() * maxSize;

const getRandomRadius = () => Math.random() * 0.7 + 0.6;

export function MovingStar() {
  const [stars, setStars] = useState<
    { key: number; x: number; y: number; radius: number }[]
  >([]);

  useEffect(() => {
    const makeStars = () => {
      const maxSize = Math.max(window.innerWidth, window.innerHeight);
      const starArray = new Array(Math.floor(maxSize / 2))
        .fill('')
        .map((_, i) => ({
          key: i,
          x: getRandomValue(maxSize),
          y: getRandomValue(maxSize),
          radius: getRandomRadius(),
        }));
      setStars(starArray);
    };

    makeStars(); // 초기 화면 로딩 시 별 생성

    // 브라우저 창 크기 변경 이벤트 핸들러
    const handleResize = () => {
      makeStars();
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <svg css={skyStyle}>
      {stars.map((star) => (
        <circle
          key={star.key}
          cx={star.x}
          cy={star.y}
          r={star.radius}
          css={starStyle}
        />
      ))}
    </svg>
  );
}
