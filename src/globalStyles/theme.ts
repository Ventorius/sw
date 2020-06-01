export const colors = {
  black: '#0A0908',
  blue: '#2E3246',
  luminescentBlue: '#4CFFFF',
  darkGray: 'rgba(0,0,0,.5)',
  semiGray: 'rgba(0,0,0,.2)',
  gray: '#f0f0f0',
  primary: '#D6BF7C',
  white: '#fff',
};

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
};

export const mq = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
};

const theme = {
  colors,
  mq,
};

export default theme;
