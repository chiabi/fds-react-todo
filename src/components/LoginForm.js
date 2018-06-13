import React from 'react'

import todoAPI from '../todoAPI'
import {PageContext} from '../App'

export default class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }
  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    })
  }
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }
  handleLoginClick = onLogin => async e => {
    // 로그인 요청
    const payload = {
      username: this.state.username,
      password: this.state.password
    }
    const res = await todoAPI.post('/users/login', payload)

    // localStorage에 토큰 저장
    localStorage.setItem('token', res.data.token)

    // 페이지 전환
    onLogin()
  }
  render() {
    const {username, password} = this.state
    return (
      <PageContext.Consumer>
        {/* 함수를 쓴다.*/}
        {value => (
          <React.Fragment>
            <h1>로그인</h1>
            <label>
              아이디: <input type="text" value={username} placeholder="username" onChange={this.handleUsernameChange} />
            </label>
            <label>
              비밀번호: <input type="password" value={password} placeholder="password" onChange={this.handlePasswordChange}/>
            </label>
                             {/* 함수를 반환하는 함수 */}
            <button onClick={this.handleLoginClick(value.goToTodoPage)}>로그인</button>
          </React.Fragment>
        )}
      </PageContext.Consumer> 
    )
  }
}