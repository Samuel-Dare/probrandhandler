/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    colors: {
      colorGrey0: '#ffffff',
      colorGrey50: '#f3f4f6',
      colorGrey100: '#e5e7eb',
      colorGrey200: '#d1d5db',
      colorGrey300: '#9ca3af',
      colorGrey400: '#6b7280',
      colorGrey500: '#4b5563',
      colorGrey600: '#374151',
      colorGrey700: '#1f2937',
      colorGrey800: '#111827',
      colorGrey900: '#18212f',

      colorBlue100: '#075985',
      colorBlue700: '#dcfce7',
      colorGreen100: 'var(--color-green-100)',
      colorGreen700: 'var(--color-green-700)',
      colorYellow100: 'var(--color-yellow-100)',
      colorYellow700: 'var(--color-yellow-700)',
      colorSilver100: 'var(--color-silver-100)',
      colorSilver700: 'var(--color-silver-700)',
      colorIndigo100: 'var(--color-indigo-100)',
      colorIndigo700: 'var(--color-indigo-700)',
      colorRed100: 'var(--color-red-100)',
      colorRed700: 'var(--color-red-700)',
      colorRed800: 'var(--color-red-800)',

      colorShadowSm: 'var(--shadow-sm)',
      colorShadowMd: 'var(--shadow-md)',
      colorShadowLg: 'var(--shadow-lg)',

      colorBrand1: '#0f0147',
      colorBrand2: '#0d8bff',
    },
    extend: {},
  },
  plugins: [],
};
