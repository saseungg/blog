import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#464646',
            h2: {
              fontSize: '21px',
              fontWeight: '600',
            },
            h3: {
              fontSize: '18px',
            },
            'blockquote p': {
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: '1.6em',
              padding: '.5em .5em',
              opacity: '50%',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
