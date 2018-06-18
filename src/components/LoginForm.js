import React from 'react'

import todoAPI from '../todoAPI'

export default class LoginForm extends React.Component {
  // usernameRef = React.createRef();
  // passwordRef = React.createRef();

  // handleLoginClick = e => {
  //   const {onLogin} = this.props;
  //   onLogin(this.usernameRef.current.value, this.passwordRef.current.value);
  // }

  handleLoginSubmit = async e => {
    const username = e.target.elements.username.value; 
    const password = e.target.elements.password.value;
    const {onLogin} = this.props;
    onLogin(username, password);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <h1>로그인</h1>
        <label>
          아이디: <input defaultValue="fds" type="text" ref={this.usernameRef} name="username" />
        </label>
        <label>
          비밀번호: <input type="password" ref={this.passwordRef} name="password" />
        </label>
        <button>로그인</button>
      </form>
    )
  }
}