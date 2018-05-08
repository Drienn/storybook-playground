import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Counter from './index.js';


export const CounterStories = storiesOf('Counter', module)
  .add('increment', () => <Counter onClick={action('clicked')}>Hello Counter </Counter>)
