import React from 'react';
import { Input, Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import BapeulCard from '../../components/bapeul-card';

import './exercise.scss';

const { TabPane } = Tabs;

const Exercise = () => {
  return (
    <div className="exercise-container">
      <div className="search-wrapper">
        <Input
          placeholder="운동을 검색하세요."
          suffix={
            <SearchOutlined
              style={{ color: 'rgba(0,0,0,.45)' }}
              onClick={() => alert('search')}
            />
          }
        />
      </div>
      <div className="tabs-wrapper">
        <Tabs>
          <TabPane tab="운동1" key="운동1" />
          <TabPane tab="운동2" key="운동2" />
          <TabPane tab="운동3" key="운동3" />
          <TabPane tab="운동4" key="운동4" />
          <TabPane tab="운동5" key="운동5" />
          <TabPane tab="운동6" key="운동6" />
        </Tabs>
      </div>

      <div className="card-wrapper">
        <BapeulCard />
        <BapeulCard />
        <BapeulCard />
        <BapeulCard />
        <BapeulCard />
        <BapeulCard />
        <BapeulCard />
        <BapeulCard />
        <BapeulCard />
      </div>
    </div>
  );
};

export default Exercise;