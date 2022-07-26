export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
    backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ecf0f3',
      },
      {
        name: 'dark',
        value: '#192229',
      },
    ],
  },
}