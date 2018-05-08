import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './index.js';


export const ButtonStories = storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button </Button>)

  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

  .add('something new', () => (
    <Button style={{backgroundColor: 'yellow'}} onClick={action('new thing')}>New  Yellow Button</Button>
  ));
