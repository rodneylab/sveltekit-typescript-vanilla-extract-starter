import { themeVars } from '$lib/styles/themes/theme.css';
import { font } from '$lib/styles/vars/font.css';
import { spacing } from '$lib/styles/vars/spacing.css';
import { widths } from '$lib/styles/vars/widths.css';
import { style } from '@vanilla-extract/css';

const {
  size: { fontSize2, fontSize3, fontSize4 },
} = font;
const {
  spacing: { spacing0, spacing1, spacing12, spacingPx, spacingPx2 },
} = spacing;
const { maxWidthFull } = widths;

export const cardContainer = style({
  marginTop: spacing12,
  marginBottom: spacing12,
});

export const cardContent = style({
  borderStyle: 'solid',
  borderWidth: spacingPx,
  borderColor: themeVars.colour.secondary,
  boxShadow: `${spacingPx2} ${spacing1} ${spacing1} ${themeVars.colour.shadow}`,
  backgroundColor: themeVars.colour.accent,
  width: maxWidthFull,
});

export const contactDetails = style({
  listStyleType: 'none',
});

export const header = style({
  fontSize: fontSize3,
});

export const summaryHeading = style({
  fontSize: fontSize4,
  marginTop: spacing0,
  color: themeVars.colour.textSecondary,
});

export const summaryText = style({
  fontSize: fontSize2,
  color: themeVars.colour.textSecondary,
});
