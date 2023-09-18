import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './fonts/fonts.css';
import MainPage from './pages/main';
import InfoPage from './pages/info';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<InfoPage />} />
        {/* 메인 페이지 */}
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
