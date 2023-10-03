import Image from 'next/image'

import logoImage from '@/assets/Logo.svg'


//styles
import { StyledHeader } from './styles'
import Link from 'next/link'

export const Header = () => {

    return (
        <StyledHeader>
            <Link href="/">
                <Image 
                    src={logoImage} 
                    width={64}    
                    height={64}
                    alt=''
                />
            </Link>
        </StyledHeader>
    )
}