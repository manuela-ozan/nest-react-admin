module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-background': '#ffffff',
        'brand-active': '#c1292e',
        'brand-header': '#e2e1e1',
        'primary-red': '#c1292e',
        'red-hover': '#a02025',
        'primary-white': '#ffffff',
        'white-hover': '#f2f2f2',
      },
      backgroundImage: {
        'sidebar': "url('../assets/sidemenu-bg.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
