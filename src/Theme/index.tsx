import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColorOptions {
        main?: string;
        main_primary?: string;
    }
}

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: "Merriweather"
    },
    palette: {
        text: {
            primary: "#000000", //Default Text Color
        },
        background: {
            default: "#FFFFFF" //Default Background Color
        },
        primary: {
            main: "#38A169", //Others Main Color
            main_primary: "#ECC94B", //Yello color
        }
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Merriweather"
                },
            },
        },
    },
});

export default theme;