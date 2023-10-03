import { createStitches } from "@stitches/react";



export const { 
    styled, 
    css, 
    globalCss, 
    keyframes, 
    getCssText, 
    theme, 
    createTheme, 
    config 
} = createStitches({
    theme: {
        colors: {
            primary: '#00875F',
            primary_light: '#00B37E',
            gradient: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

            background: '#121214',
            elements: '#202024',
            text: '#C4C4CC',
            title: '#E1E1E6',
            white: '#FFFFFF'
        },
        fonts: {
            primary: 'Roboto, sans-serif'
        },
        fontSizes: {
            small: '0.875rem',
            medium: '1rem',
            large: '1.25rem',
            xlarge: '1.5rem',
            xxlarge: '2rem'
        },
        fontWeights: {
            normal: 400,
            bold: 700
        }
    }
})