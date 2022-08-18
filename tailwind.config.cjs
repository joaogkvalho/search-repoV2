/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          "700": '#3A3A3A',
          "600": '#3D3D4D',
          "500": '#6C6C80',
          "100": '#A8A8B3',
          "50": '#F2F2FA'
      },
        green: {
            "300": '#68D391',
            "500": '#04D361'
        }
      }
    },
  },
  plugins: [],
}
