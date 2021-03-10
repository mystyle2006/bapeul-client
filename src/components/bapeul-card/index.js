import React from 'react';
import { Button, Card } from "antd";
import Like from '../Like';

import './index.scss';

const BapeulCard = () => {
  return (
    <div className="bapeul-card-container">
      <Card
        className="card"
        cover={<center>image</center>}
      />
      <div className="card-description">
        <div>
          운동1
        </div>
        <div className="right-section">
          <Like />
          <div className="button-section">
            <Button>
              추가하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BapeulCard;