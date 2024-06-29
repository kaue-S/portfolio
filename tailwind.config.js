
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        'DEFAULT': '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
      textStrokeColor: {
        'black': '#000',
        'white': '#fff',
        'laranja': '#FBBF24',
        // Adicione mais cores conforme necessário
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '0.5px #fbbf24',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '4px #fbbf24',
        },
        '.text-stroke-4': {
          '-webkit-text-stroke': '4px #fbbf24',
        },
        // Adicione mais espessuras conforme necessário
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
