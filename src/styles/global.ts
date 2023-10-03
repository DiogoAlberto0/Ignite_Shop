import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },
    body: {
        background: '$background',
        color: '$text',
        fontFamily: '$primary',
        fontSize: '$medium'
    },

})