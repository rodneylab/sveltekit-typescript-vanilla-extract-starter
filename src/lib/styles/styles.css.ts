import '$lib/styles/vars/font.css';
import { font } from '$lib/styles/vars/font.css';
import { globalFontFace, globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from './themes/theme.css';
import { spacing } from './vars/spacing.css';

const {
  family: { fontFamilyBody, fontFamilyHeading },
  lineHeight: { lineHeightNormal, lineHeightRelaxed, lineHeightTight },
  size: {
    fontSizeRoot,
    fontSize1,
    fontSize2,
    fontSize3,
    fontSize4,
    fontSize5,
    fontSize6,
    mobile: {
      mobileFontSize1,
      mobileFontSize2,
      mobileFontSize3,
      mobileFontSize4,
      mobileFontSize5,
      mobileFontSize6,
    },
  },
  weight: { fontWeightBlack, fontWeightBold, fontWeightNormal },
} = font;

const {
  spacing: { spacing0, spacing1, spacing12, spacing2, spacing4, spacing6, spacing8, spacingPx },
} = spacing;

globalFontFace('BodyFont', {
  src: 'local("Lato")',
});

globalFontFace('HeadingFont', {
  src: 'local("Slabo 27px")',
});

globalStyle('html', {
  lineHeight: [lineHeightNormal],
  fontSize: [fontSizeRoot],
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('body', {
  vars: {
    [fontFamilyBody]: 'Lato',
    [fontFamilyHeading]:
      '"Slabo 27px", "Roboto Slab", "Noto Serif", Merriweather, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  fontFamily: [fontFamilyBody],
  fontSize: [fontSize1],
  textRendering: 'optimizeLegibility',
});

globalStyle('h1, h2, h3, h4, h5, h6, h7', {
  fontFamily: [fontFamilyHeading],
  fontWeight: [fontWeightNormal],
});

globalStyle('h1, h2, h3, h4, h5, h6, h7', {
  lineHeight: [lineHeightTight],
});

globalStyle('h3, h4, h5, h6', {
  fontWeight: [fontWeightBold],
});

globalStyle('h1', {
  fontSize: [mobileFontSize6],
  fontFamily: 'Slabo 13',
  '@media': {
    '(min-width: 768px)': {
      fontSize: [fontSize6],
    },
  },
});

globalStyle('h2', {
  fontSize: [mobileFontSize5],
  '@media': {
    '(min-width: 768px)': {
      fontSize: [fontSize5],
    },
  },
});

globalStyle('h3', {
  fontSize: [mobileFontSize4],
  '@media': {
    '(min-width: 768px)': {
      fontSize: [fontSize4],
    },
  },
});

globalStyle('h4', {
  fontSize: [mobileFontSize3],
  '@media': {
    '(min-width: 768px)': {
      fontSize: [fontSize3],
    },
  },
});

globalStyle('h5', {
  fontSize: [mobileFontSize2],
  '@media': {
    '(min-width: 768px)': {
      fontSize: [fontSize2],
    },
  },
});

globalStyle('h6', {
  fontSize: [mobileFontSize1],
  '@media': {
    '(min-width: 768px)': {
      fontSize: [fontSize1],
    },
  },
});

globalStyle('p', {
  lineHeight: [lineHeightRelaxed],
});

globalStyle('nav :is(ul, ol)', {
  listStyleType: 'none',
});

globalStyle('html', {
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      scrollBehavior: 'smooth',
    },
  },
});

globalStyle('hr', {
  height: spacingPx,
  border: spacing0,
});

globalStyle('html &:is(h1, h2, h3, h4, h5, h6, h7)', {
  margin: [spacing12, spacing0, spacing6],
  fontWeight: [fontWeightNormal],
});

globalStyle('ol, ul', {
  marginLeft: spacing0,
  marginRight: spacing0,
  padding: spacing0,
  marginBottom: spacing8,
  listStylePosition: 'inside',
  listStyleImage: 'none',
});

globalStyle('a', {
  color: themeVars.colour.alternative,
});

globalStyle('a:hover, a:focus', {
  textDecoration: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
  borderRadius: spacing6,
  padding: [spacing2, spacing4],
  fontSize: [fontSize2],
  fontWeight: [fontWeightBlack],
  backgroundColor: themeVars.colour.buttonBackground,
  borderStyle: 'solid',
  borderColor: themeVars.colour.secondary,
  color: themeVars.colour.buttonText,
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      transition: 'color 0.25s, background-color 0.25s',
    },
    '(prefers-reduced-motion: reduce)': {
      transition: 'color 2s, background-color 2s',
    },
  },
});

globalStyle('button:focus, button:hover', {
  backgroundColor: themeVars.colour.buttonText,
  color: themeVars.colour.buttonBackground,
});

globalStyle('input, textarea', {
  borderStyle: 'solid',
  borderWidth: spacingPx,
  borderColor: themeVars.colour.textSecondary,
  background: themeVars.colour.background,
  borderRadius: spacing1,
  lineHeight: [lineHeightNormal],
  padding: [spacing0, spacing2],
  color: themeVars.colour.text,
});

globalStyle(':is(input, textarea)::placeholder', {
  color: themeVars.colour.text,
  opacity: 0.8,
});

export const screenReaderText = style({
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'insert(50%)',
  height: '1px',
  margin: '-1px',
  width: '1px',
  overflow: 'hidden',
  position: 'absolute',
  wordWrap: 'normal',
});
