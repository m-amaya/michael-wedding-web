import Color from 'color';

/**
 * Convert a hex color to an rgba with alpha
 */
export const rgba = (hexColor: string, alpha: number) =>
  Color(hexColor)
    .alpha(alpha)
    .rgb()
    .string();

/**
 * Shortcut for shades of white.
 */
export const shade = (alpha: number) => rgba(colors.white, alpha);

/**
 * Colors, not to be used directly
 */
const colors = {
  white: '#FFFFFF',
  lightgrey: '#F8F8F8',
  grey: '#D8D8D8',
  darkgrey: '#707070',
  gold: '#F5B421',
  green: '#B9E0A3',
  black: '#000000',
};

export const theme = {
  page: {
    background: colors.lightgrey,
    text: colors.black,
  },
  title: {
    text: colors.darkgrey,
    subtle: colors.grey,
  },
  border: {
    color: colors.green,
    accent: colors.gold,
  },
  link: {
    text: colors.gold,
  },
  header: {
    background: colors.white,
  },
  content: {
    background: colors.white,
  },
};
