import { createTheme } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const darkTheme = createTheme(themeVars, {
  colour: {
    primary: 'hsl(203deg 39% 44%)', // wedgewood
    secondary: 'hsl(324deg 92% 10%)', // jacaranda
    alternative: 'hsl(182deg 43% 76%)', // aqua island
    background: 'hsl(215deg 50% 23%)', // cello
    text: 'hsl(45deg 99% 70%)', // goldenrod
    textAlternative: 'hsl(5deg 17% 43%)', // russett
    textSecondary: 'hsl(324deg 92% 10%)',
    shadow: 'hsl(5deg 17% 43% / 0.34)', // russett
    accent: 'hsl(45deg 99% 70%)',
    buttonText: 'hsl(45deg 99% 70%)',
    buttonBackground: 'hsl(215deg 50% 23%)',
  },
});
