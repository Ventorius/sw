export const colors = {
  black: '#0A0908',
  blue: '#2E3246',
  luminescentBlue: '#4CFFFF',
  darkBlue: '#021320',
  marine: '#225e5f',
  darkGray: 'rgba(0,0,0,.5)',
  semiGray: 'rgba(0,0,0,.2)',
  gray: '#f0f0f0',
  primary: '#D6BF7C',
  white: '#fff',
};

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
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
