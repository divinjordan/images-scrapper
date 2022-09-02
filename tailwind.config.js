/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{html,js,tsx,ts}",
      "./components/**/*.{html,js,tsx,ts}",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0968F1"
        }
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
  