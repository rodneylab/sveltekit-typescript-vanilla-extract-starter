import { createTheme } from '@vanilla-extract/css';
import { themeVars } from '$lib/styles/themes/theme.css';

export const lightTheme = createTheme(themeVars, {
  colour: {
    primary: 'hsl(203deg 39% 44%)', // wedgewood
    secondary: 'hsl(182deg 43% 76%)', // aqua island
    alternative: 'hsl(11deg 14% 23%)', // woody brown
    background: 'hsl(180deg 20% 99%)', // porcelain
    text: 'hsl(215deg 50% 23%)', // cello
    textAlternative: 'hsl(5deg 17% 43%)', // russett
    textSecondary: 'hsl(11deg 14% 23%)',
    accent: 'hsl(0deg 0% 100%)', // white
    shadow: 'hsl(11deg 14% 23%) / 0.33',
    buttonText: 'hsl(203,20%,99%)',
    buttonBackground: 'hsl(215deg 50% 23%)',
  },
});
