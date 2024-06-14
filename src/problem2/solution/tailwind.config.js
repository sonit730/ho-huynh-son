/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      'pos-custom': '12px center',
    },
    extend: {
      colors: {
        "black-100": '#222222',
        "gray-100": '#22222212',
        "gray-200": '#222222',
        'gray-300': '#7d7d7d',
        'gray-400': '#f9f9f9',
        "primary": "#ffffff12",
        "secondary": '#1b1b1b',
        "light": "#9b9b9b",
        'light-100': '#ffffff12',
        'light-200': "#52565e",
        'light-300': "#c4cbda",
        "dark": '#1b1b1b',
        "dark-first": '#00000099',
        "dark-second": "#131313",
        "bg-dark-body": '#242424',
        "pink": "#fc72ff",
        "pink-100": '#311c31',
        "pink-300": '#fc72ff',
        "pink-400": "#ffefff"
      },
      padding: {
        '8': '8px',
        '12': '12px',
        '20': '20px',
        '16': '16px',
        '48': '48px',
        '68': '68px'
      },
      borderRadius: {
        'sm': '16px',
      },
      fontSize: {
        '36': "36px"
      },
    },
  },
  plugins: [],
}

