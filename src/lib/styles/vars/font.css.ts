import { createGlobalTheme } from '@vanilla-extract/css';

export const font = createGlobalTheme(':root', {
  family: {
    fontFamilyBody:
      "'BodyFont', 'Open Sans', 'Montserrat', system-ui, '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif",
    fontFamilyHeading:
      '"Slabo 27px", "Roboto Slab", "Noto Serif", Merriweather, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  lineHeight: {
    lineHeightNone: '1',
    lineHeightTight: '1.3',
    lineHeightNormal: '1.5',
    lineHeightRelaxed: '1.75',
  },
  weight: {
    fontWeightLight: '300',
    fontWeightNormal: '400',
    fontWeightMedium: '500',
    fontWeightSemibold: '600',
    fontWeightBold: '700',
    fontWeightExtrabold: '800',
    fontWeightBlack: '900',
  },
  size: {
    fontSizeRoot: '16px',
    fontSize0: '0.8rem',
    fontSize1: '1rem',
    fontSize2: '1.25rem',
    fontSize3: '1.563rem',
    fontSize4: '1.953rem',
    fontSize5: '2.441rem',
    fontSize6: '3.052rem',
    fontSize7: '3.815rem',
    mobile: {
      mobileFontSize0: '0.8889rem',
      mobileFontSize1: '1rem',
      mobileFontSize2: '1.125rem',
      mobileFontSize3: '1.266rem',
      mobileFontSize4: '1.424rem',
      mobileFontSize5: '1.602rem',
      mobileFontSize6: '1.802rem',
      mobileFontSize7: '3.815rem',
    },
  },
});
