import React from 'react';
import {HeartOutlined} from "@ant-design/icons";

import './index.scss';

const Like = () => {
  return (
    <div className="like-section">
      <HeartOutlined />
      <span className="like-count">256</span>
    </div>
  );
};

export default Like;