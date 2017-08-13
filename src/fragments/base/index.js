import React from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import {
  Route,
  Switch,
} from 'react-router-dom';

import { Nav, NavLeft, NavRight } from 'src/components/Nav';

import './base.scss';
import Dashboard from 'src/fragments/dashboard';
import Upload from 'src/fragments/upload';
import Report from 'src/fragments/report';

@connect(state => ({ upload: state.upload }))
class Base extends React.PureComponent {

  static propTypes = {
    upload: PropTypes.shape({
      type: PropTypes.string.isRequired,
      data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.object)
      ])
    })
  };


  render() {
    const { upload } = this.props;
    return  (
      <div className="baseContainer hm_100">
        <div className="leftContent ta_r title">
          MedTantra
        </div>
        <div className="rightContent mb_15" >
          <Nav>
            <NavRight>
              Logout
            </NavRight>
          </Nav>
        </div>

        <Switch>
          <Route exact path="/dashboard/" component={Dashboard} />
          <Route path="/dashboard/upload/" render={({history}) => (<Upload history={history} />)} />
          <Route path="/dashboard/report/" render={(({history}) => (<Report report={upload.data} history={history} />))} />
        </Switch>
      </div>
    );
  }
}

export default Base;
