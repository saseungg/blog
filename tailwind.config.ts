import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          bg: 'var(--bg)',
          textDefault: 'var(--text-default)',
          textHead: 'var(--text-head)',
          textDesc1: 'var(--text-desc-1)',
          textDesc2: 'var(--text-desc-2)',
          border: 'var(--border)',
          blockFill1: 'var(--block-fill-1)',
          blockFill2: 'var(--block-fill-2)',
        },
      },
      maxWidth: {
        custom: 'var(--page-max-width)',
      },
      keyframes: {
        slideEnter: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '100%',
          },
        },
      },
      animation: {
        'slide-enter': 'slideEnter 1s both 1',
      },
      fontFamily: {
        pretendard: ['var(--pretendard)'],
        newsreader: ['var(--newsreader)'],
        gowun: ['var(--gowun)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
