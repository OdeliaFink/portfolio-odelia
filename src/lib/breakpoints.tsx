export const breakpointMaximumSizes = {
  mobile: 767,
  tablet: 1339,
};

export const breakpoints = {
  desktop: `(min-width: ${breakpointMaximumSizes.tablet + 1}px)`,
  mobile: `(max-width: ${breakpointMaximumSizes.mobile}px)`,
  tablet: `(max-width: ${breakpointMaximumSizes.tablet}px)`,
};
