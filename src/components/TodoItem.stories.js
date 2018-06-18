import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TodoItem from './TodoItem';

storiesOf('TodoItem', module)
  .add('empty', () => <TodoItem id={1} onComplete={action('완료 버튼 클릭 됨')}/>)
  .add('body가 주어진 경우', () => <TodoItem body="텍스트" />);