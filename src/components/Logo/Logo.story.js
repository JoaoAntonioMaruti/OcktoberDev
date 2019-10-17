import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './index';

storiesOf('Logo', module)
  .add('Default', () => <Logo />)
  .add('With Christmas type', () => <Logo type={'christmas'} />)
