/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '780px',
      // => @media (min-width: 768px) { ... }

      'lg': '1340px',
      // => @media (min-width: 1024px) { ... }

      'xl': '2000px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}

