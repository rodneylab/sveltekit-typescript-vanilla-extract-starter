import { themeVars } from '../../styles/themes/theme.css';
import { spacing } from '../../styles/vars/spacing.css';
import { style } from '@vanilla-extract/css';

const {
	spacing: { spacing1, spacing2 },
} = spacing;

export const container = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: themeVars.colour.background,
	fontFamily: 'Lato',
});

export const logo = style({
	verticalAlign: 'middle',
	padding: ['auto', spacing2],
});

export const rodneyLabText = style({
	fontWeight: 300,
});

export const link = style({
	selectors: {
		[`${container} &`]: {
			color: themeVars.colour.background,
			textUnderlineOffset: spacing1,
		},
	},
});
