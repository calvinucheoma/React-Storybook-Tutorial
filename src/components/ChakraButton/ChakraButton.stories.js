import { Button } from '@chakra-ui/react';
// import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  //   parameters: {
  //     actions: {
  //       handles: ['mouseover', 'click .btn'],
  //     },
  //   },
  //   decorators: [withActions],
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: 'green',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: 'red',
  children: 'Danger',
};
