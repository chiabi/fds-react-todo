import React from 'react'

import todoAPI from '../todoAPI'

const {Provider, Consumer} = React.createContext();

class UserProvider extends React.Component {

  login = async (username, password) => {
    // 로그인 요청
    const payload = {
      username,
      password
    }
    const res = await todoAPI.post('/users/login', payload)

    // localStorage에 토큰 저장
    localStorage.setItem('token', res.data.token)

    // 페이지 전환
    this.props.onLogin()
  }

  render() {
    const value = {
      login: this.login
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {UserProvider, Consumer as UserConsumer}