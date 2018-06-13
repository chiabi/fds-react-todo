import React from 'react'

// 클래스는 함수고, 함수는 값이고 클래스도 값이다.
// export default는 값을 export 하는 것이고
export default class TodoForm extends React.Component {
  // [역할과 책임]
  // 공유 할 필요가 없는 상태는 끌어올릴 필요없이 
  // 해당 컴포넌트에 두는 것이 좋다.
  state = {
    newTodoBody: ''
  }
  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    })
  }
  handleButtonClick = e => {
    // 할일을 전송해 상태를 업데이트 해야하는데, 
    // 서버에 새 할일을 전송해주는 작업은 App.js에서하고
    // 그 함수를 내려 받아서 작업한다.

    // onCreat: 문자열을 받아서 서버에 적용시키고 그 상태를 내려보내는 함수로
    this.props.onCreat(this.state.newTodoBody)
    this.setState({
      newTodoBody: ''
    })
  }
  render() {
    const {newTodoBody} = this.state.newTodoBody
    return (
      <label>
        새 할일
        <input type="text" value={newTodoBody} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>추가</button>
      </label>
    )
  }
}

// export 1 (x)
// export는 이름을 export하는 것이기 때문에 표현식을 넘길수는 없고 반드시 이름이 있어야한다.
// export const a = 1
