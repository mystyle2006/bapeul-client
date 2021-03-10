import React from 'react';
import { Button } from "antd";
import { useHistory } from 'react-router-dom';
import './home.scss';

const Home = () => {
  const history = useHistory();
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
        <Button onClick={() => history.push('/exercise')}>
          지금 시작하기
        </Button>
      </p>
    </div>
  );
};

export default Home;