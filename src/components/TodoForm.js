import React from 'react'

export default class TodoForm extends React.Component {
  static defaultProps = {
    onCreate: () => {}, // 할 일 추가버튼 클릭시 호출되는 함수
  }
  state = {
    newTodoBody: ''
  }
  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    })
  }
  handleButtonClick = e => {
    this.props.onCreate(this.state.newTodoBody)
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
