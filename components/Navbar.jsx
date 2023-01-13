import React from 'react'
import Link from 'next/link'
// import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'
import { Box, Button, HStack, Image, VStack, Flex, Text, Badge, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, Input, DrawerBody, DrawerFooter, Heading } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { TbShoe } from 'react-icons/tb'
import {GiShoppingCart} from 'react-icons/gi'
import { useDisclosure } from '@chakra-ui/react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { urlFor } from '../lib/client';
import { TbShoppingCartOff } from "react-icons/tb"
import { useColorModeValue } from '@chakra-ui/react'
import { MdOutlineDelete } from "react-icons/md"
import getStripe from '../lib/getSripe'
// import toast from 'react-hot-toast';
import { useToast } from '@chakra-ui/react'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const colorScheme = useColorModeValue("red", "#90CDF4")

  const { totalPrice, cartItems,  toggleCartItemQuanitity, onRemove } = useStateContext();
  const toast = useToast()

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    // toast.loading('Redirecting...');
    toast({
      title: 'Redirecting.',
      position: 'top-middle',
      // description: "We've created your account for you.",
      status: 'loading',
      duration: 9000,
      isClosable: true,
    })


    stripe.redirectToCheckout({ sessionId: data.id });
  }

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
            fontSize="1.5rem"
            color='#7CB9E8'
           />
        </Link>
        
        <Link href='/'>
          <Text
            fontSize={['1rem', '0.8rem',  "0.9rem"]}
            fontWeight="700"
            // ml="0.1rem"
            mt={["0.1rem", "none", "0.1rem"]}
          >
            shpair
          </Text>
        </Link>  
      </Flex>

      <Flex
        mt={["2rem", "1rem"]}
      >
        <Button
         onClick={toggleColorMode}
         mr='0.6rem'
         size={["xs", "sm", "sm"]}
         mt={["0.4rem", "1rem"]}
        >
          {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </Button>

        <Button
          // onClick={()=> setShowCart(true)}
          ref={btnRef}
          onClick={onOpen}
          size={["xs", "sm", "sm"]}
          mt={["0.4rem", "1rem"]}
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

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={["xs", "sm"]}
        >
          <DrawerOverlay />

          <DrawerContent>
            
            <DrawerCloseButton />
            <DrawerHeader

            >
              Your cart
            </DrawerHeader>

            <DrawerBody>
              {cartItems.length < 1 && (
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                  mt={[ "9rem","12rem"]}
                  // mt={["0.5rem","1.6rem","1.4rem"]}
                  whiteSpace="nowrap"
                  gap= "1.5rem"
                  overflowX="scroll"
                  // w={["20rem", "50rem", "80rem"]}
                  // flexDir="row"
                >
                  <TbShoppingCartOff size={150} />
                  <Heading
                    size="md"
                  >
                    Your shopping cart is empty
                  </Heading>  
                </Flex>
                
              )}

              <Box>
                {cartItems.length >= 1 && cartItems.map((item) => (
                  <Flex
                    mb="2rem"
                  >
                    <Image
                      src={urlFor(item?.image[0])}
                      boxSize={["4.5rem","8rem"]}
                      mr={["1rem","1rem"]}
                      borderRadius="0.3rem"
                    />

                    <Flex
                      flexDir="column"
                    >
                      <Box
                        flexDir="row"
                        display="flex"
                        mr="2rem"
                        // mt="0.5rem"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Text
                          // size={["xs","xs"]}
                          mt={["0.6rem", "2rem"]}
                          fontSize={["0.5rem", "0.9rem"]}
                          mr={["4.5rem", "4rem"]}
                          fontWeight="600"
                        >
                          {item.name}
                        </Text>
                        <Text
                          // size="xs" 
                          fontSize={["0.7rem", "0.9rem"]}
                          mt={["0.6rem", "2rem"]}
                          fontWeight="600"
                        >
                          ${item.price}
                        </Text>
                      </Box>

                      <Box
                        // justifyContent="flex-end"
                        display="flex"
                        mt={["0.5rem","2.5rem"]}
                      >
                        <Box
                          display="flex"
                          flexDir="row"
                          // mt="2rem"
                          mr="auto"
                        >
                          <Button
                            size="xs"
                            mr="0.5rem"
                            // color={colorScheme}
                            onClick={() => toggleCartItemQuanitity(item._id, 'dec') }
                          >
                            <AiOutlineMinus />
                          </Button>

                          <Text
                            mr="0.5rem"
                          >
                          {item.quantity}
                          </Text>

                          <Button
                            size="xs"
                            // color={colorScheme}
                            // variant={["solid","ghost"]}
                            onClick={() => toggleCartItemQuanitity(item._id, 'inc') }
                          >
                            <AiOutlinePlus />
                          </Button>
                        </Box>

                        <Button
                          onClick={() => onRemove(item)}
                          size="xs"
                          mr="1.7rem"
                          // variant='ghost'
                        >
                          <TiDeleteOutline
                            // size="sm"
                            color={colorScheme}
                          />
                        </Button>
                      </Box>
                    
                    </Flex>
                  </Flex>
                ))}
              </Box>

            </DrawerBody>

            {/* <DrawerFooter> */}
              {cartItems.length >= 1 &&(
                  <Flex
                    flexDir="column"
                    
                  >
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      mt="5rem"
                      // w={["2rem", ""]}
                    >
                      <Heading
                        size="sm"
                        mr={["7rem","13rem"]}
                      >
                        Subtotal: 
                      </Heading>
                      <Heading
                        size="sm"
                      >
                        ${totalPrice}
                      </Heading>
                    </Flex>
                    
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Button
                          onClick={handleCheckout}
                          bg={colorScheme}
                          variant='solid'
                          mt="1rem"
                          mb="2rem"
                          size={["md","lg"]}
                          color="white"
                          // w="20rem"
                        >
                          Pay with Stripe
                        </Button>
                    </Flex>
                     
                  </Flex>
                )}
            {/* </DrawerFooter> */}
        </DrawerContent>

        </Drawer>
      </Flex>

      {/* {showCart && <Cart/>} */}
      
    </HStack>
  )
}

export default Navbar