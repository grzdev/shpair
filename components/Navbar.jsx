import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'
import { Box, Button, HStack, VStack, Flex, Text, Badge } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { TbShoe } from 'react-icons/tb'
import {GiShoppingCart} from 'react-icons/gi'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    // <div className='navbar-container'>
    //   <p className='logo'>
    //     <Link href='/'>
    //       shpair
    //     </Link>
    //   </p>

    //   <button 
    //     type='button'
    //     className='cart-icon'
    //     onClick={()=> setShowCart(true)}
    //   >
    //     <AiOutlineShopping/>
    //     <span className='cart-item-qty'>{totalQuantities}</span>
    //   </button>

    //   {showCart && <Cart/>}
    // </div>
    <HStack>
      <Flex
        p={[1, 2, 3]}
        alignItems="center"
        justifyContent='center'
        mr='auto'
      >
        <Link href='/'>
          <TbShoe
            fontSize="2rem"
            color='#7CB9E8'
           />
        </Link>
        
        <Link href='/'>
          <Text
            fontSize={['1.15rem', '1,2rem',  "1.3rem"]}
            fontWeight="700"
            ml="0.1rem"
            mt={["0.35rem", "none", "none"]}
          >
            shpair
          </Text>
        </Link>  
      </Flex>

      <Flex
        
      >
        <Button
         onClick={toggleColorMode}
         mr='0.6rem'
         size={["sm", "md", "md"]}
        >
          {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </Button>

        <Button
          onClick={()=> setShowCart(true)}
          size={["sm", "md", "md"]}
        >
          <GiShoppingCart
            fontSize="1.6rem"
          />
          <Badge
            variant='solid'
            colorScheme='red'
            borderRadius='full'
            mt='-1rem'
            m1='1rem'
          >
           {totalQuantities}
          </Badge>
        </Button>
      </Flex>

      {showCart && <Cart/>}
      
    </HStack>
  )
}

export default Navbar