import React from 'react';
import { Global, css } from '@emotion/core';
import { style } from './index';

const styles = css({
  body: {
    'backgroundColor': style.theme.page.background,
    'color': style.theme.page.text,
    'fontFamily': style.constants.font.family.serif,
    'fontSize': style.constants.font.size,
    'fontWeight': style.constants.font.weight.regular,
    'letterSpacing': '0.01em',
    'lineHeight': 1.43,
    'minWidth': style.constants.breakpoint.sm,
    'overflowX': 'auto',
    'overflowY': 'auto',
    'width': '100%',

    /** Font smoothing */
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased',

    '*': {
      boxSizing: 'border-box',
    },

    'a': {
      'color': style.theme.page.text,
      'textDecoration': 'none',
      ':hover': {
        color: style.theme.link.text,
        textDecoration: 'none',
      },
    },
  },
});

export const GlobalStyles = () => <Global styles={styles} />;
