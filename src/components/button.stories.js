// 임시 bulma 시험용 보통 이렇게 만들지 않음
import React from 'react';
import classnames from 'classnames';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('button', module)
.add('primary', () => <button className={classnames('button', 'is-primary')}>버튼</button>)
.add('loading', () => <button className={classnames('button', {'is-loading': true})}>로딩중</button>);