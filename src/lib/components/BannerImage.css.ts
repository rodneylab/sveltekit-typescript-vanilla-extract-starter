import { spacing } from '../styles/vars/spacing.css';
import { widths } from '../styles/vars/widths.css';
import { style } from '@vanilla-extract/css';

const {
	spacing: { spacing0, spacing12 },
} = spacing;
const { maxWidthFull } = widths;

export const container = style({
	margin: [spacing12, spacing0, spacing0],
	width: maxWidthFull,
});
