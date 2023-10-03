import { styled } from "..";


export const StyledSuccess = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',

    margin: '2rem auto',

    'h1': {
        fontSize: '$xxlarge',
        color: '$title',
        fontWeight: '$bold',
        textAlign: 'center'
    },
    'div': {
        background: '$gradient',
        borderRadius: '8px'
    },
    'p': {
        maxWidth: '560px',
        fontSize: '$xlarge',
        color: '$text',
        fontWeight: '$normal',
        textAlign: 'center'
    },
    'span': {
        fontWeight: '$bold'
    },
    'a': {
        textDecoration: 'none',

        color: '$primary_light',

        '&:hover': {
            color: '$primary'
        }
        
    }
})