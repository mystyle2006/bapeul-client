import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

import Home from 'pages/home/Home';
import Exercise from "pages/exercise/Exercise";
import ExerciseHistory from "pages/exerciseHistory/ExerciseHistory";

import 'App.scss';
import 'styles/elements.scss';

function App() {
  return (
    <div className="container">
      <div className="header">
        <Breadcrumb separator=" ">
          <Breadcrumb.Item>로그인</Breadcrumb.Item>
          <Breadcrumb.Item>회원가입</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/exercise">
              <Exercise />
            </Route>
            <Route exact path="/exercise/history">
              <ExerciseHistory />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
