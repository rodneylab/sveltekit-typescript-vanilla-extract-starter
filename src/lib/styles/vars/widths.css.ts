import { createGlobalTheme } from '@vanilla-extract/css';

export const widths = createGlobalTheme(':root', {
	maxWidthNone: 'none',
	maxWidth3XS: '14rem',
	maxWidth2XS: '16rem',
	maxWidthXS: '20rem',
	maxWidthSM: '24rem',
	maxWidthMD: '28rem',
	maxWidthLG: '32rem',
	maxWidthXL: '36rem',
	maxWidth2XL: '42rem',
	maxWidth3XL: '48rem',
	maxWidth4XL: '56rem',
	maxWidth5XL: '64rem',
	maxWidth6XL: '72rem',
	maxWidth7XL: '80rem',
	maxWidth8XL: '90rem',
	maxWidthFull: '100%',
	maxWidthWrapper: '42rem',
	desktopBreakpoint: '48rem',
});
