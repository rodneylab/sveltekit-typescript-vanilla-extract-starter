import { themeVars } from '$lib/styles/themes/theme.css';
import { spacing } from '$lib/styles/vars/spacing.css';
import { widths } from '$lib/styles/vars/widths.css';
import { style } from '@vanilla-extract/css';

const {
  spacing: { spacing1, spacing12, spacing2, spacing4, spacing6, spacingPx2 },
} = spacing;
const { maxWidthFull } = widths;

export const container = style({
  display: 'flex',
  width: maxWidthFull,
});

export const content = style({
  width: maxWidthFull,
  border: [spacingPx2, 'solid', themeVars.colour.alternative],
  boxShadow: `${spacingPx2} ${spacing1} ${spacing1} ${themeVars.colour.shadow}`,
  borderRadius: spacing2,
  margin: spacing6,
  padding: [spacing4, spacing6],
  '@media': {
    '(min-width: 768px)': {
      marginLeft: spacing12,
      marginRight: spacing12,
    },
  },
});
