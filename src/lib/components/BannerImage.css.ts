import { spacing } from '$lib/styles/vars/spacing.css';
import { maxWidthFull } from '$lib/styles/vars/widths.css';
import { style } from '@vanilla-extract/css';

const {
  spacing: { spacing0, spacing12 },
} = spacing;

export const container = style({
  margin: [spacing12, spacing0, spacing0],
  width: [maxWidthFull],
});
