import React from 'react';
import { Button } from "antd";
import './home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <p className="main-title">
        Bapeul
      </p>
      <p className="sub-title">
        운동 기록을 <br />
        효율적으로 관리해보세요.
      </p>
      <p className="button-wrapper">
        <Button>
          지금 시작하기
        </Button>
      </p>
    </div>
  );
};

export default Home;