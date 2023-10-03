import Image from "next/image"

import { StyledProduct } from "./styles"
import Link from "next/link"

interface ProductProps {
    className: string
    id: string
    imgUrl: string
    name: string
    price: number
}
export const Product = ({ id, name, imgUrl, price, className }: ProductProps) => {
    
    return (
        <Link href={`/product/${id}`} prefetch={false}>
            <StyledProduct className={className}>
                <Image 
                    src={imgUrl}
                    width={400}
                    height={400}
                    priority={true}
                    alt=""
                />
                <footer>
                    <strong>{name}</strong>
                    <span>{price}</span>
                </footer>
            </StyledProduct>
        </Link>
    )
}