import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

// THEMES
import defaultTheme from '../theme';

// HELPERS
import {
  PropFilter,
  renderTheme,
  renderAlignment,
  renderFullWidth
} from './button.helpers';

// Exported default element
const StyledButton = styled.button.attrs(() => ({ as: PropFilter }))`
  /* defaults */
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
  backface-visibility: hidden;

  /* font adjustments */
  font-family: Helvetica, Arial, sans-serif;
  font-size: ${ ({ textSize }) => textSize };
  font-weight: 500;
  line-height: 1.6em;
  letter-spacing: 2px;
  text-transform: uppercase;

  /* border options */
  border-radius: ${ ({ circle }) => (circle ? '50%' : 0) };
  border-width: 1px;
  border-style: solid;
  border-color: transparent;

  /* Alignments */
  ${ ({ align }) => renderAlignment(align) }
  align-items: center;
  text-decoration: none;
  vertical-align: middle;

  /* colour set */
  ${ ({ theme, appearance }) => renderTheme(theme, appearance) }

  /* box modal */
  ${ ({ fullWidth }) => renderFullWidth(fullWidth) }
  box-sizing: border-box;
  margin: ${ ({ margin }) => margin };
  padding: ${ ({ padding }) => padding };

  /* accessibility */
  &:focus,
  &:active {
    box-shadow: inset 0 0 0 2px rgba(0, 123, 255, 0.75);
    border-color: #80bdff;
    outline: none;
  }
`;

// Support for filtering custom props from being passed to elements
const Button = ({ as, FORCE_AS, ...props }) => {
  return <StyledButton element={ FORCE_AS || as } { ...props } />;
};

// Default props
Button.defaultProps = {
  as: 'button',
  FORCE_AS: null,
  textSize: '11px',
  align: 'center',
  padding: '1.41em 2.4em',
  margin: '0',
  appearance: 'default',
  fullWidth: false,
  circle: false,
  theme: defaultTheme // supplied by default theme within bambino
};

// Prop type check
Button.propTypes = {
  as: PropTypes.any,
  FORCE_AS: PropTypes.any,
  textSize: PropTypes.string,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  padding: PropTypes.string,
  margin: PropTypes.string,
  appearance: PropTypes.oneOf([
    'default',
    'default-outline',
    'default-floating',
    'inverse',
    'inverse-outline',
    'inverse-floating',
    'error',
    'error-outline',
    'error-floating',
    'warning',
    'warning-outline',
    'warning-floating',
    'success',
    'success-outline',
    'success-floating'
  ]),
  fullWidth: PropTypes.bool,
  circle: PropTypes.bool,
  theme: PropTypes.object // supplied by ThemeProvider
};

Button.displayName = 'Button';

// export
export default withTheme(Button);