import React from 'react';
import { css } from 'styled-components';

// Loop over themes and render theme based css
export const renderTheme = (themes, appearance) => {
  const theme = themes.buttons[appearance];


  return css`
    transition: color 0.3s, background 0.3s, border-color 0.3s;
    color: ${ theme.color };
    background: ${ theme.background };
    border-color: ${ theme.borderColor };

    @media (hover: hover) {
      &:hover {
        transition: color 0.3s, background 0.3s, border-color 0.3s;
        color: ${ theme.hover.color };
        background: ${ theme.hover.background };
        border-color: ${ theme.hover.borderColor };
      }
    }

    &.active,
    &:active {
      transition: color 0.3s, background 0.3s, border-color 0.3s;
      color: ${ theme.active.color };
      background: ${ theme.active.background };
      border-color: ${ theme.active.borderColor };
    }

    &.disabled,
    &:disabled {
      transition: color 0.3s, background 0.3s, border-color 0.3s;
      color: ${ theme.disabled.color };
      background: ${ theme.disabled.background };
      border-color: ${ theme.disabled.borderColor };
    }
  `;
};

export const renderAlignment = (align) => {
  switch (align) {
    case 'right': {
      return css`
        text-align: right;
        justify-content: flex-end;
      `;
    }
    case 'left': {
      return css`
        text-align: left;
        justify-content: flex-start;
      `;
    }
    default: {
      return css`
        text-align: center;
        justify-content: center;
      `;
    }
  }
};

export const renderFullWidth = (fullWidth) => {
  if (fullWidth) {
    return css`
      display: flex;
      width: 100%;
    `;
  }
  return css`
    display: inline-flex;
  `;
};

// props designed to filter!
export const PropFilter = ({
  /* eslint react/prop-types:0 */
  element,
  textSize,
  align,
  padding,
  margin,
  theme,
  fullWidth,
  circle,
  iconBefore,
  iconAfter,
  showContent,
  label,
  loading,
  iconCircle,
  iconSize,
  iconOffset,
  ...props
}) => {
  return React.createElement(element, { ...props });
};