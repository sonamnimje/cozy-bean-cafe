/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf9f5',
          100: '#f6efe7',
          200: '#eadbc8',
          300: '#d8c0a2',
          400: '#c69f76',
          500: '#b27d4f',
          600: '#9a623c',
          700: '#7c4b31',
          800: '#5a3626',
          900: '#2d1c16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(17, 24, 39, 0.08)',
      },
      backgroundImage: {
        'grain-light':
          'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.06) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
