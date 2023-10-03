//styles
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"

//next
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"

//stripe
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

//axios
import axios from "axios"

interface ProductProps {
    product: {
        id: string
        name: string
        image: string
        description: string
        price: string
        defaultPriceId: string
    }
}

export default function ProductPage({ product }: ProductProps) {

    const handleBuyButton = async() => {
        try {
            const response = await axios.post('/api/checkout', {
                productId: product.defaultPriceId
            })
            console.log(response.data)

            window.location.href = response.data.checkoutUrl
        } catch( error ) {
            window.alert(`Falha ao redirecionar. Erro:${error}`)
        }
    }
    return(
        <ProductContainer>
            <ImageContainer>
                <Image 
                    src={product.image} 
                    width={500} 
                    height={500} 
                    alt=""
                    priority={true}
                />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>
                <button onClick={handleBuyButton}>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { id: 'prod_OgVVoqPQi17C6u'}
            }
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

    const productId = params?.id

    if(!productId) {
    
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const response = await stripe.products.retrieve(productId , {
        expand: ['default_price']
    })

    const price = response.default_price as Stripe.Price

    const product = {
        id: response.id,
        name: response.name,
        image: response.images[0],
        description: response.description,
        price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price.unit_amount as number / 100),
        defaultPriceId: price.id
    }

    console.log(product)
    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 2 //2 hours
    }
}