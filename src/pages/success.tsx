//stitches
import { StyledSuccess } from '@/styles/pages/success'

import { stripe } from '@/lib/stripe'

//next
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

interface SuccessProps {
    costumerName: string
    product: {
        name: string
        image: string
    }
}
const success = ({costumerName, product }: SuccessProps) => {

    return(
        <StyledSuccess>
            <h1>Compra efetuada!</h1>

            <div>
                <Image 
                    src={product.image}
                    width={120}
                    height={120}
                    alt=''
                    priority={true}
                />
            </div>

            <p>
            Uhuul <span>{costumerName}</span>, sua Camiseta <span>{product.name}</span> já está a caminho da sua casa. 
            </p>

            <Link href="/" >Voltar ao catálogo</Link>
        </StyledSuccess>
    )
}

export default success


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })


    const costumerName = session.customer_details?.name
    const product = session.line_items?.data[0].price?.product  as Stripe.Product
    
    return {
        props:{
            costumerName,
            product: {
                name: product.name,
                image:  product.images[0],
            }
        }
    }
}