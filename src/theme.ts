const theme = {
  font: {
    family: {
      primary: '',
      secondary: '',
    },
    weight: {
      normal: 400,
      bold: 600,
      bolder: 700,
    },
  },
  colors: {
    primary: '',
    secondary: '',
  },
  spacings: {},
  layers: {
    background: 0,
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
} as const;

export default theme;
