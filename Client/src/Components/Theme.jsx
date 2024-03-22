import { extendTheme } from "@chakra-ui/react";
import '@fontsource/croissant-one';
import "@fontsource/exo"

const Theme = extendTheme({
  // Define custom colors
  colors: {
    primary: {
      100: "#220339",
      200: '#9200FF',
      300: '#5B3477',
    },
    secondary: {
      100: "#ffffff",
    }
  },
  fonts:{
    heading: "'Crossiant One', sans-serif",
    subHeading: "'exo',sans-serif"
  }
});

export default Theme;
