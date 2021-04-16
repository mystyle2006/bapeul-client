import React from 'react';
import { Statistic, Collapse, List, Checkbox, Button } from 'antd';

import './exercise-history.scss';

const { Panel } = Collapse;

const ExerciseHistory = () => {
  return (
    <div className="exercise-history-container">
      <p className="current-complete-percentage">
        <Statistic
          value={11.28}
          precision={2}
          suffix="%"
        />
      </p>

      <p className="history-list-wrapper">
        <Collapse
          defaultActiveKey={['1']}
        >
          <Panel
            header="운동1"
            key="1"
            extra={(
              <Button
                className="bapeul-ant-btn"
              >
                추가하기
              </Button>
            )}
          >
            <List
              dataSource={[
                {
                  weight: 5,
                  count: 5,
                  index: 1,
                  order: 1,
                  checked: false,
                }
              ]}
              renderItem={item => (
                <List.Item>
                  <div className="history-list-item">
                    <Checkbox checked>
                      {item.order} 세트 ({`${item.weight}kg`} {`${item.count}회`})
                    </Checkbox>
                    <div>
                      <Button
                        className="bapeul-ant-btn"
                      >
                        수정하기
                      </Button>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
      </p>
    </div>
  );
};

export default ExerciseHistory;