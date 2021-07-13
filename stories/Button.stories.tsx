import React from 'react';

import { Meta } from '@storybook/react';

import Button from '../src/button/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Types = () => {
  return <fieldset>
    <legend>Primary</legend>
    <Button variant="contained" color='primary' onClick={() => {}}>Primary</Button>
    <Button variant="contained" disabled onClick={() => {}}>Disabled</Button>
    <Button variant="contained" color='secondary' onClick={() => {}}>Secondary</Button>
  </fieldset>
}