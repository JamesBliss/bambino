import { configure, addDecorator, addParameters } from '@storybook/react';

addParameters({
  options: {
    theme: {
      brandTitle: 'Bambino',
      brandUrl: 'https://gitlab.com/LUSHDigital/fed/packages/ui'
    },
    hierarchyRootSeparator: /\|/,
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../.stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
