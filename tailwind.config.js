/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    pink: '#FF26B9',
    error: '#d3302f',
    success: '#109c3f',
    temp: '#1c162f',
    primary: '#D434FE',
    secondary: '#903AFF',
    background: '#150E28',
    transparent: 'transparent',
  },
  extend: {
    backgroundImage: {
      verticalGradient:
        'linear-gradient(to bottom, #903aff 0%, #d434fe 56.42%, #ff26b9 99.99%, #fe34b9 100%)',
      horizontalGradient:
        'linear-gradient(to left, #903aff 0%, #d434fe 56.42%, #ff26b9 99.99%, #fe34b9 100%)',
    },
    fontFamily: {
      clashDisplay: ['clash-display', 'ui-sans-serif', 'system-ui'],
      montserrat: ['montserrat', 'ui-sans-serif', 'system-ui'],
      unicaOne: ['unica-one', 'ui-sans-serif', 'system-ui'],
      inter: ['inter', 'ui-sans-serif', 'system-ui'],
    },
    transitionTimingFunction: {
      default: 'cubic-bezier(0.5, 0, 0.5, 1)',
    },
    maxWidth: {
      tablet: '600px',
      desktop: '1200px',
    },
    transitionProperty: {
      width: 'width',
      height: 'height',
    },
    fontSize: {
      xsMax: '9px',
      xsMd: '10px',
      xs: '12px',
      smMax: '13px',
      smMd: '14px',
      sm: '15px',
      base: '16px',
      md: '18px',
      mdMd: '20px',
      mdMax: '24px',
      lg: '30px',
      lgMd: '32px',
      lgMax: '36px',
      xl: '40px',
      xlMd: '48px',
      xlMax: '64px',
      '2xl': '80px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      lgMd: '1200px',
      lgMax: '1280px',
    },
  },
};
export const plugins = [];
