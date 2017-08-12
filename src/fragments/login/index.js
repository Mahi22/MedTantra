import React from 'react';
import { Columns, Column } from 'src/grid/';
import './login.scss';

const Login = () => (
  <Columns isGapless className="login-wrapper">
    <Column isSize={8} className="hero-banner">
      <section className="hero h_100 is-dark">
        <div className="hero-body">
          <div className="container section">
            <div className="ta_r">
              <h1 className="title is-1">
                Login
              </h1>
              <br />
              <p className="title is-3">
                Secure User Account Login
              </p>
            </div>
          </div>
        </div>
      </section>
    </Column>
    <Column isSize={4}>
      <section className="hero h_100">
        <div className="hero-heading">
          <div className="section has-text-centered">
            <img alt="logo" width="150px" />
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <Columns isCentered isVCentered>
              <Column isSize={8}>
                <h1 className="avatar ta_c section">
                  NAME
                </h1>
                <div className="login-form">
                  <p className="control has-icon has-icon-right mb_12">
                    <input className="input email-input" type="text" placeholder="test@example.org" />
                    <span className="icon user">
                      <i className="fa fa-user" />
                    </span>
                  </p>
                  <p className="control has-icon has-icon-right mb_12">
                    <input className="input password-input" type="password" placeholder="●●●●●●●" />
                    <span className="icon user">
                      <i className="fa fa-lock" />
                    </span>
                  </p>
                  <p className="control login">
                    <button className="button is-success is-outlined is-large is-fullwidth">Login</button>
                  </p>
                </div>
                <div className="section forgot-password">
                  <p className="has-text-centered">
                    <a href="">Forgot password</a>
                    <a href="">Need help?</a>
                  </p>
                </div>
              </Column>
            </Columns>
          </div>
        </div>
      </section>
    </Column>
  </Columns>
);

export default Login;

// <Control hasIcons="right">
//   <Input type="email" placeholder="jsmith@example.org" />
//   <Icon isSize="small" isAlign="right">
//     <span className="fa fa-user" aria-hidden="true" />
//   </Icon>
// </Control>
