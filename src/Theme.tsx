// theme.tsx
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#000000',
                },
                secondary: {
                    main: '#f50057',
                },
                background: {
                    default: '#f4f6f8',
                    paper: '#ffffff',
                },
                text: {
                    primary: '#000000',
                    secondary: '#4f4f4f',
                },
            }
            : {
                //Phase 2
            }),
    },
    typography: {
        fontFamily: 'Roboto, Consolas, Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        body2: {
            fontSize: '0.8rem',
            fontWeight: 500,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                    border: "1px solid white",
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: 'white',
                        color: "black",
                        border: "1px solid black"
                    },
                },
            },
        },
    },
});

export const createThemeMode = (mode: PaletteMode) => createTheme(getDesignTokens(mode));
