import { createGlobalTheme } from '@vanilla-extract/css';

export const spacing = createGlobalTheme(':root', {
	spacing: {
		spacingPx: '1px',
		spacingPx2: '2px',
		spacing0: '0',
		spacing1: '0.25rem',
		spacing2: '0.5rem',
		spacing3: '0.75rem',
		spacing4: '1rem',
		spacing5: '1.25rem',
		spacing6: '1.5rem',
		spacing8: '2.0rem',
		spacing10: '2.5rem',
		spacing12: '3rem',
		spacing16: '4rem',
		spacing20: '5rem',
		spacing24: '6rem',
	},
});
