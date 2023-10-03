import { styled } from '@/styles/index'

export const ProductContainer = styled('main', {
    maxWidth: '1120px',
    margin: '0 auto',

    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
})

export const ImageContainer = styled('div', {
    background: '$gradient',
    
    borderRadius: '0.5rem',
})

export const ProductDetails = styled('section', {
    display: 'flex',
    flexDirection: 'column',




    'h1': {
        fontSize: '$xlarge'
    },

    'span': {
        color: '$primary_light',
        fontSize: '$xlarge',

        marginTop: '1rem'
    },

    'p': {
        fontSize: '$medium',
        lineHeight: '1.5rem',

        marginTop: '1rem'
    },

    'button': {
        backgroundColor: '$primary',
        color: '$white',

        border: 0,
        borderRadius: '0.5rem',
        
        padding: '1rem',
        fontSize: '$medium',

        marginTop: 'auto',

        '&:hover': {
            opacity: 0.8,
        }
    }
})