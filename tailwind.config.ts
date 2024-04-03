import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#fcfcfc',
          100: '#f8f8f8',
          200: '#f3f3f3',
          300: '#ededed',
          400: '#e8e8e8',
          500: '#e2e2e2',
          600: '#dbdbdb',
          700: '#c7c7c7',
          800: '#8f8f8f',
          900: '#858585',
          1000: '#6f6f6f',
          1200: '#171717',
        },
      },
      fontFamily: {
        newsreader: ['var(--newsreader)'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#3A3A3A',
            h2: {
              color: '#3A3A3A',
              fontSize: '21px',
              fontWeight: '600',
            },
            h3: {
              color: '#3A3A3A',
              fontSize: '18px',
            },
            'blockquote p': {
              color: '#3A3A3A',
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: '1.6em',
              padding: '.5em .5em',
              opacity: 0.5,
            },
            a: {
              color: '#3A3A3A',
              fontWeight: '400',
              textDecorationColor: '#c7c7c7',
              textUnderlineOffset: '2.5px',
              textDecorationThickness: '1px',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
