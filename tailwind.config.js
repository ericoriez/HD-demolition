/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F7931E',
          dark: '#111111',
          darkSoft: '#1E1E1E',
          light: '#F2F2F2',
        },
      },
    },
  },
  plugins: [],
}

