/** @type { import('@storybook/react').Preview } */
// import Center from '../src/components/Center/Center';
import { ChakraProvider } from '@chakra-ui/react';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
  decorators: [
    (story) => (
      <ChakraProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        {/* <Center>{story()}</Center> */}
        {story()}
      </ChakraProvider>
    ),
  ],
};

export default preview;
