/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // RGB channels let Tailwind apply opacity without dropping color utilities.
      colors: {
        background: 'rgb(var(--background-rgb) / <alpha-value>)',
        content: 'rgb(var(--text-rgb) / <alpha-value>)',
        primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        'surface-raised': 'rgb(var(--surface-raised-rgb) / <alpha-value>)',
        button: {
          DEFAULT: 'rgb(var(--button-bg-rgb) / <alpha-value>)',
          text: 'rgb(var(--text-rgb) / <alpha-value>)',
        },
        'on-bright': 'rgb(var(--on-bright-rgb) / <alpha-value>)',
        border: 'rgb(var(--border-rgb) / <alpha-value>)',
      },
      boxShadow: {
        lg: '0 10px 20px rgb(var(--shadow-rgb) / 0.25)',
        xl: '0 20px 30px rgb(var(--shadow-rgb) / 0.3)',
        '2xl': '0 25px 50px -12px rgb(var(--shadow-rgb) / 0.4)',
        button: '0 10px 30px rgb(var(--button-bg-rgb) / 0.3)',
        secondary: '0 10px 30px rgb(var(--secondary-rgb) / 0.2)',
      },
    },
  },
  plugins: [],
}
