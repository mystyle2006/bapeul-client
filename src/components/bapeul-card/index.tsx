import React from 'react';
import { Button, Card } from "antd";
import Like from 'components/Like';

import './index.scss';

const BapeulCard = () => {
  return (
    <div className="bapeul-card-container">
      <Card
        className="card"
        cover={<div>image</div>}
      />
      <div className="card-description">
        <div>
          운동1
        </div>
        <div className="right-section">
          <Like />
          <div className="button-section">
            <Button
              className="bapeul-ant-btn"
            >
              추가하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BapeulCard;