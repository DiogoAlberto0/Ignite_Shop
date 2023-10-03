import { styled } from "@/styles/index"

export const StyledProduct = styled('div', {
    background: '$gradient',

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    borderRadius: "8px",
    cursor: "pointer",

    overflow: "hidden",

    img: {
        objectFit: "cover",
    },

    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '$white',

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        
        position: "absolute",
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',

        padding: "2rem",
        borderRadius: "6px",

        transform: "translateY(110%)",
        opacity: 0,
        transition: "all 0.2s ease-in-out",

        span: {
            color: '$primary_light',
        },

    },
    '&:hover': {
        footer: {
            transform: "translateY(0%)",
            opacity: 1,
        },

        img: {
            width: 500
        }
    }
})