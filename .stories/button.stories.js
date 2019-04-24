import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

// components //
import { Button, theme } from '../src';

// custom theme
const fancyTheme = {
  ...theme,
  theme,
  buttons: {
    ...theme.buttons,
    'default': {
      background: 'hotpink',
      borderColor: 'hotpink',
      color: 'red'
    }
  }
};

// story //
storiesOf('Button', module)

  // decorators
  // hide the theme prop from table as it's default value is messy
  .addDecorator(withInfo({ excludedPropTypes: ['theme'] }))
  .addDecorator(withKnobs)
  .addParameters({
    options: { showAddonPanel: false },
    notes: { markdown: README },
    info: { header: false }
  })

  // stories
  .add('Default', () => (
    <table>
      <thead>
        <tr>
          <th />
          <th>
            name
          </th>
          <th>
            *-solid
          </th>
          <th>
            *-clear
          </th>
          <th>
            *-floating
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            default
          </td>
          <td>
            <Button appearance='default'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='default-solid'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='default-clear'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='default-floating'>
              Button
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            inverse
          </td>
          <td>
            <Button appearance='inverse'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='inverse-solid'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='inverse-clear'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='inverse-floating'>
              Button
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            success
          </td>
          <td>
            <Button appearance='success'>
              Button
            </Button>
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            warning
          </td>
          <td>
            <Button appearance='warning'>
              Button
            </Button>
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            errro
          </td>
          <td>
            <Button appearance='error'>
              Button
            </Button>
          </td>
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>
  ))
  .add('Theme', () => (
    <ThemeProvider theme={ fancyTheme }>
      <div>
        <Button>default theme overridden by a custom themeProvider</Button>
        <Button appearance='inverse'>Themed</Button>
      </div>
    </ThemeProvider>
  ));