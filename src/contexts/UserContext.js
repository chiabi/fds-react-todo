import React from 'react'

import todoAPI from '../todoAPI'

const {Provider, Consumer} = React.createContext();

class UserProvider extends React.Component {
  login = async (username, password) => {
    // 로그인 요청
    try {
      const res = await todoAPI.post('/users/login', {
        username: username,
        password: password
      })
  
      // localStorage에 토큰 저장
      localStorage.setItem('token', res.data.token)
    } catch(e) {
      // e.response이면 axios의 에러일 것이라는 가정을 할 수 있다.
      if (e.response && e.response.status === 400) {
        alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
      }
    }
  }

  render() {
    const value = {
      login: this.login
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {UserProvider, Consumer as UserConsumer}