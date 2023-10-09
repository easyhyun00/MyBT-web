/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

interface TextTypingData {
  text: string;
  color: string;
  size: number;
  fontFamily?: string;
}

const textStyle = (props: TextTypingData) => css`
  color: ${props.color};
  font-size: ${props.size}px;
  font-family: ${props.fontFamily};

  @media (max-width: 1000px) {
    font-size: ${props.size * 0.75}px; /* 작은 화면일 때 적용할 폰트 크기 */
  }

  @media (max-width: 600px) {
    font-size: ${props.size / 2}px; /* 작은 화면일 때 적용할 폰트 크기 */
  }
`;

export function TextTyping(props: TextTypingData) {
  const [typeText, setTypeText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypeText((prevTitleValue) => {
        const result = prevTitleValue
          ? prevTitleValue + props.text[count]
          : props.text[0];
        setCount(count + 1);

        if (count >= props.text.length) {
          setCount(0);
          setTypeText('');
        }
        return result;
      });
    }, 300);
    return () => {
      clearInterval(typingInterval);
    };
  }, [count, props.text]);

  return <span css={textStyle(props)}>{typeText}</span>;
}
