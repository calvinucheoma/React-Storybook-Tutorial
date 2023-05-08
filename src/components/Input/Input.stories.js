import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input,
};

export const Small = () => <Input variant="small" text="small" />;
export const Medium = () => <Input variant="medium" text="Medium" />;
export const Large = () => <Input variant="large" text="Large" />;

Small.storyName = 'Small Input';
