import React from 'react'

export default class LoginForm extends React.Component {
  handleSubmit = async e => {
    const username = e.target.elements.username.value; 
    const password = e.target.elements.password.value;
    const {onLogin} = this.props;
    onLogin(username, password);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>로그인페이지</h1>
        <label>
          아이디: <input type="text" ref={this.usernameRef} name="username" />
        </label>
        <label>
          비밀번호: <input type="password" ref={this.passwordRef} name="password" />
        </label>
        <button>로그인</button>
      </form>
    )
  }
}