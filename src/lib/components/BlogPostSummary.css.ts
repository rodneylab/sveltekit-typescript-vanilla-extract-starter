import { themeVars } from '$lib/styles/themes/theme.css';
import { font } from '$lib/styles/vars/font.css';
import { spacing } from '$lib/styles/vars/spacing.css';
import { maxWidthFull } from '$lib/styles/vars/widths.css';
import { style } from '@vanilla-extract/css';

const {
  family: { fontFamilyHeading },
  size: { fontSize2, fontSize3 },
  weight: { fontWeightNormal },
} = font;
const {
  spacing: { spacing0, spacing1, spacing10, spacing12, spacing2, spacing4, spacingPx2 },
} = spacing;

export const container = style({
  display: 'flex',
  width: [maxWidthFull],
  marginTop: [spacing12],
  '@media': {
    '(min-width: 768px)': {
      paddingLeft: 'auto',
      paddingRight: 'auto',
    },
  },
});

export const content = style({
  border: [spacingPx2],
  width: [maxWidthFull],
  margin: [spacing0, 'auto'],
  paddingTop: [spacing4],
  paddingRight: [spacing10],
  paddingBottom: [spacing4],
  paddingLeft: [spacing10],
  selectors: {
    '&:hover, &:focus': {
      borderColor: themeVars.colour.text,
      backgroundColor: themeVars.colour.text,
      boxShadow: `${spacingPx2} ${spacing1} ${spacing1} ${themeVars.colour.shadow}`,
    },
  },
  '@media': {
    '(min-width: 768px)': {
      borderRadius: [spacing1],
      padding: [spacing4],
    },
  },
});

export const contentHeadingContainer = style({
  marginTop: [spacing0],
});

export const contentHeading = style({
  color: themeVars.colour.alternative,
  selectors: {
    [`${content} &`]: {
      color: themeVars.colour.alternative,
      fontWeight: [fontWeightNormal],
      textUnderlineOffset: [spacing2],
    },
    [`${content}:hover &,${content}:focus & `]: {
      color: themeVars.colour.secondary,
    },
  },
});

export const contentBody = style({
  color: themeVars.colour.alternative,
  fontSize: fontSize2,
  margin: [spacing2],
  selectors: {
    [`${content} &`]: {
      color: themeVars.colour.text,
    },
    [`${content}:hover &,${content}:focus & `]: {
      color: themeVars.colour.background,
    },
  },
});

export const postMeta = style({
  display: 'grid',
  gridTemplateAreas: "'meta-date' 'meta-data'",
  width: [maxWidthFull],
  alignItems: 'baseline',
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: '1fr auto auto',
      gridTemplateAreas: "'meta-date . meta-data'",
    },
  },
});

export const dateText = style({
  gridArea: 'meta-date',
  fontFamily: [fontFamilyHeading],
  fontSize: [fontSize3],
  marginBottom: [spacing4],
  '@media': {
    '(min-width: 768px)': {
      marginBottom: [spacing0],
    },
  },
});
