import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const {id, body, complete, onComplete, onDelete} = this.props;
    return (
      <li className={complete ? 'complete' : ''}>
        {/* JSX에서 주석처리하는 방법입니다. */}
        {body}
        <button onClick={e => onComplete(id)}>완료</button>
        <button onClick={e => onDelete(id)}>삭제</button>
      </li>
    )
  }
}