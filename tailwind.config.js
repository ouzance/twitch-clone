module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'search': 'inset rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'
      },
      colors: {
        'color-background-body': '#f7f7f8',
        'color-background-sidebar': '#efeff1',
        'color-background-button-hover': '#e5e5e5',
        'color-background-button': '#f2f2f2',
        'color-background-red': '#e91916',

        'color-text-link': '#5c16c5',
        'color-text-input': '#0e0e10',

        'color-primary': "#9147ff",
      }
    },
    minWidth: {
      '5': '1.25rem',
    },
    fontFamily: {
      'body': 'Inter,Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'
    },
  },
  plugins: [],
}
