import { stripe } from "@/lib/stripe"
import { NextApiRequest, NextApiResponse } from "next"


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const priceId = req.body.productId

    const successUrl = `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.APP_URL}/`

    const response = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        mode: "payment",
        success_url: successUrl,
        cancel_url: cancelUrl
    })

    return res.status(201).json({ checkoutUrl: response.url })
}


export default handler