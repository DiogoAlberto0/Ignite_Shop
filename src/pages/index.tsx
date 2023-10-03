import { StyledHome } from '@/styles/pages/home'

//components
import { Product } from '@/components/Product'
//slider
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'

//conexão com a api de vendas
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    title: string
    image: string
    price: number
  }[]
}
  export default function Home({ products }: HomeProps) {

  //Slider responsivo
  const [ perView, setperView] = useState(3)

  useEffect(() => {
    setperView(window.innerWidth <= 768 ? 1 : 3)
  }, [])
  
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView,
      spacing: 48
    }
  })
  return (
    <StyledHome ref={sliderRef} className='keen-slider'>
      {
        products.map(product => (
          <Product key={product.id} id={product.id} className='keen-slider__slide' imgUrl={product.image} name={product.title} price={product.price}/>
        ))
      }
    </StyledHome>
  )
}

export const getStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      title: product.name,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount as number / 100),
      image: product.images[0],
    }
  })

  return {
    props: { products },
    revalidate: 60 * 60 * 2 //2 horas
  }
}
