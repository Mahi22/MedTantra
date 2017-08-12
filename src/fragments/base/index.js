import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { Nav, NavLeft, NavRight } from 'src/components/Nav';

import './base.scss';
import Dashboard from 'src/fragments/dashboard';
import Upload from 'src/fragments/upload';

class Base extends React.PureComponent {
  render() {
    return  (
      <div className="baseContainer hm_100">
        <div className="leftContent ta_r title">
          MedTantra
        </div>
        <div className="rightContent mb_15" >
          <Nav>
            <NavLeft>
              Tabs
            </NavLeft>
            <NavRight>
              Account dropdown
            </NavRight>
          </Nav>
        </div>

        <Switch>
          <Route exact path="/dashboard/" component={Dashboard} />
          <Route path="/dashboard/upload/" component={Upload} />
        </Switch>
      </div>
    );
  }
}

export default Base;
