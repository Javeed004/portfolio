/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // --black / --pink / --white / --white-1 from index.css :root
        black: '#000000',
        pink: '#ff3258',
        white: '#f0e9f2',
        'white-1': '#e5e5e6da',
      },
      fontFamily: {
        // --font-stack
        sans: ['Hk Grotesk', 'sans-serif'],
        // used on h1/h2/h3 and nav/link text in the original CSS
        heading: ['Jost', 'sans-serif'],
      },
      fontSize: {
        // --font-size-*
        small: '1.8rem',
        normal: '2.2rem',
        medium: '2.8rem',
        'medium-1': '3.6rem',
        large: '5.5rem',
        huge: '7.5rem',
      },
      lineHeight: {
        // --line-height-*
        normal: '1.7',
        small: '1.2',
      },
      maxWidth: {
        // --container-*-width
        container: '1180px',
        'container-1100': '1100px',
        'container-normal': '800px',
        'container-medium': '700px',
        'container-small': '500px',
      },
      spacing: {
        // --gutter-*
        'gutter-huge': '12rem',
        'gutter-medium': '6rem',
        'gutter-normal': '3rem',
        'gutter-small-1': '2.5rem',
        'gutter-small': '2rem',
      },
      borderColor: {
        light: 'rgb(36, 35, 35)',
      },
    },
  },
  plugins: [],
}
