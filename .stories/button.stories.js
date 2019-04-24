import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

// components //
import { Button, theme, colour } from '../src';

// custom theme
const fancyTheme = {
  ...theme,
  theme,
  buttons: {
    ...theme.buttons,
    'default': {
      ...theme.buttons.default,
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
  .addParameters({
    options: { showAddonPanel: false },
    // notes: { markdown: README },
    info: { header: false }
  })

  // stories
  .add('Default', () => (
    <table style={{ background: colour.mediumgray, padding: '10px'}}>
      <thead>
        <tr>
          <th style={{ borderBottom: `1px solid ${colour.darkgray}`, padding: '5px 10px 15px'}} />
          <th style={{ borderBottom: `1px solid ${colour.darkgray}`, padding: '5px 10px 15px'}}>
            name
          </th>
          <th style={{ borderBottom: `1px solid ${colour.darkgray}`, padding: '5px 10px 15px'}}>
            *-clear
          </th>
          <th style={{ borderBottom: `1px solid ${colour.darkgray}`, padding: '5px 10px 15px'}}>
            *-floating
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ borderRight: `1px solid ${colour.darkgray}`, padding: '5px 10px 5px'}}>
            default
          </td>
          <td>
            <Button appearance='default'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='default-outline'>
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
          <td style={{ borderRight: `1px solid ${colour.darkgray}`, padding: '5px 10px 5px'}}>
            inverse
          </td>
          <td>
            <Button appearance='inverse'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='inverse-outline'>
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
          <td style={{ borderRight: `1px solid ${colour.darkgray}`, padding: '5px 10px 5px'}}>
            success
          </td>
          <td>
            <Button appearance='success'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='success-outline'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='success-floating'>
              Button
            </Button>
          </td>
        </tr>
        <tr>
          <td style={{ borderRight: `1px solid ${colour.darkgray}`, padding: '5px 10px 5px'}}>
            warning
          </td>
          <td>
            <Button appearance='warning'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='warning-outline'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='warning-floating'>
              Button
            </Button>
          </td>
        </tr>
        <tr>
          <td style={{ borderRight: `1px solid ${colour.darkgray}`, padding: '5px 10px 5px'}}>
            error
          </td>
          <td>
            <Button appearance='error'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='error-outline'>
              Button
            </Button>
          </td>
          <td>
            <Button appearance='error-floating'>
              Button
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  ))
  .add('Theme', () => (
    <ThemeProvider theme={fancyTheme}>
      <div>
        <Button>default theme overridden by a custom themeProvider</Button>
        <Button appearance='inverse'>Themed</Button>
      </div>
    </ThemeProvider>
  ));