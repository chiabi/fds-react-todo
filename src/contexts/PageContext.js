import React from 'react'

const {Provider, Consumer} = React.createContext();

// 상태와 관련된 것만 들어있다.
// Container Component
class PageProvider extends React.Component {
  state = {
    page: 'login'
  }
  goToTodoPage = e => {
    this.setState({
      page: 'todo'
    })
  }

  render() {
    const value={
      page: this.state.page,
      goToTodoPage: this.goToTodoPage
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {PageProvider, Consumer as PageConsumer};