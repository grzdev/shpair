import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Products } from '../../components'
import { useStateContext } from '../../context/StateContext'
import { Box, Container, Flex, Text, Button, Heading, HStack, Image, useColorModeValue,  } from '@chakra-ui/react'
import getStripe from '../../lib/getSripe'
import { useToast } from '@chakra-ui/react'
import { ChevronLeftIcon } from "@chakra-ui/icons"
// import { Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const ProductDetails = ({products, product}) => {
  const { image, name, details, price } = product;
  const [ index, setIndex ]= useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext()
  const ratingColor = useColorModeValue("#e0242c", "#70A1C8")
  const colorScheme = useColorModeValue("red", "blue")
  const headerColor = useColorModeValue("#324361", "white")
  const { cartItems } = useStateContext()
  const toast = useToast()
  const router = useRouter()
  
  const handleBuyNow = async () => {
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
      position: 'bottom-middle',
      // description: "We've created your account for you.",
      status: 'loading',
      duration: 2000,
      isClosable: true,
    })


    stripe.redirectToCheckout({ sessionId: data.id });
  }

  // const handleBuyNow = () => {
  //   onAdd(product, qty);

  //   setShowCart(true);
  // }

  return (
    // <div>
    //   <div className='product-detail-container'>
    //     <div>
    //       <div className='image-container'>
    //         <img
    //           src={urlFor(image && image[index])}
    //           className='product-detail-image'
    //         />
    //       </div>
    //       <div className='small-images-container'>
    //         {image?.map((item, i)=>(
    //           <img
    //             key={i}
    //             src={urlFor(item)}
    //             className={i === index ? 'small-image selected-image' : 'small-image'}
    //             onMouseEnter={()=> setIndex(i)}
    //           />
    //         ))}
    //       </div>
    //     </div>

    //     <div className='product-detail-desc'>
    //       <h1>{name}</h1>

    //       <div className='reviews'>
    //         <div>
    //           <AiFillStar/>
    //           <AiFillStar/>
    //           <AiFillStar/>
    //           <AiFillStar/>
    //           <AiOutlineStar/>
    //         </div>

    //         <p>
    //           (20)
    //         </p>
    //       </div>

    //       <h4> Details: </h4>
    //       <p>{details}</p>
    //       <p className='price'>
    //         ${price}
    //       </p>
          
    //       <div className='quantity'>
    //         <h3> Quantity: </h3>
    //         <p className='quantity-desc'>
    //           <span
    //            className='minus'
    //            onClick={decQty}
    //           >
    //             <AiOutlineMinus/>
    //           </span>

    //           <span
    //            className='num'
    //           >
    //             {qty}
    //           </span>

    //           <span
    //            className='plus'
    //            onClick={incQty}
    //           >
    //             <AiOutlinePlus/>
    //           </span>
    //         </p>
    //       </div>

    //       <div className='buttons'>
    //         <button
    //           type='button'
    //           className='add-to-cart'
    //           onClick={()=> onAdd(product, qty)}
    //         >
    //           Add to cart
    //         </button>

    //         <button
    //           type='button'
    //           className='buy-now'
    //           onClick={()=> onAdd(product, qty)}
    //         >
    //           Buy now
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className='maylike-products-wrapper'>
    //       <h2>You may also like</h2>
    //       <div className='marquee'>
    //         <div className='maylike-products-container track'>
    //           {products?.map((item)=>(
    //             <Products
    //               key={item._id}
    //               product={item}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //   </div>
    // </div>

    <Container centerContent>
      <Flex
        mt={["2rem", "2.5rem"]}
        flexDir={["column", "row"]}
        alignItems="center"
        justifyContent="center"
      >
        {/* <Flex
          alignItems="center"
          justifyContent="center"
        > */}
          <Box
            w={["20rem","60rem"]}
            mr={["none",'-20rem']}
            
          >
            <Image
              src={urlFor(image && image[index])}
              // w="25rem"
              // h="25rem"
              boxSize={["20rem","30rem"]}
              borderRadius="0.5rem"
            />  

            <Flex
              flexDir=""
              mt={["0.7rem", "", ""]}
            >
              {image?.map((item, i)=>(
                  <Image
                    key={i}
                    src={urlFor(item)}
                    onMouseEnter={()=> setIndex(i)}
                    boxSize={["2rem", "2rem", "2.5rem"]}
                    mr="1rem"
                    borderRadius="0.5rem"
                  />
                ))}
            </Flex>
          </Box>

          <Box
            w={["xs", "md"]}
            ml={["", "", "-6rem"]}
          >
            <Flex
              flexDir='column'
            >
              <Heading
                mt="1.3rem"
                size="lg"
              >
                {name}
              </Heading>

              <Flex
                flexDir='row'
                alignItems="center"
                // mt="0.2rem"
              >
                <Flex
                  mr="0.4rem"
                >
                  <AiFillStar color={ratingColor}/>
                  <AiFillStar color={ratingColor}/>
                  <AiFillStar color={ratingColor}/>
                  <AiFillStar color={ratingColor}/>
                  <AiOutlineStar/>
                </Flex>

                <Flex>
                  (20)
                </Flex>
              </Flex>

              
            <Box
              mt="1rem"
            >
              <Heading
                size="sm"
              >
                Details: 
              </Heading>
              
              <Text
                mt="0.5rem"
                fontSize="1rem"
                noOfLines={5}
              >
                {details}
              </Text>
            </Box>

            <Heading
              mt="1rem"
              color={ratingColor}
              size="md"
            >
              ${price}
            </Heading>

            <Box
              display="flex"
              flexDir="row"
              mt="1.7rem"
              mr="auto"
            >
              <Box>
                <Heading
                  size="sm"
                  mr="1rem"
                >
                  Quantity: 
                </Heading>
              </Box>

              <Box
                display="flex"
                flexDir="row"
              >
                <Button
                  size="xs"
                  mr="0.5rem"
                  // color={colorScheme}
                  onClick={decQty}
                >
                  <AiOutlineMinus />
                </Button>

                <Text
                  mr="0.5rem"
                >
                  {qty}
                </Text>

                <Button
                  size="xs"
                  // color={colorScheme}
                  onClick={incQty}
                >
                  <AiOutlinePlus />
                </Button>
              </Box>
            </Box>

            <Flex
              mt="2.3rem"
              justifyContent={["center", "", ""]}
              alignItems={["center", "", ""]}
            >
              <Button
                onClick={()=> onAdd(product, qty)}
                variant='outline'
                mr="1.7rem"
                colorScheme={colorScheme}
                size="md"
              >
                Add to cart
              </Button>
              
              <Button
                onClick={handleBuyNow}
                colorScheme={colorScheme}
                size="md"
              >
                Buy Now
              </Button>
            </Flex>
          </Flex>

            
        </Box>
        {/* </Flex> */}
       
      </Flex>

      {/* <div className='maylike-products-wrapper'>
    //       <h2>You may also like</h2>
    //       <div className='marquee'>
    //         <div className='maylike-products-container track'>
    //           {products?.map((item)=>(
    //             <Products
    //               key={item._id}
    //               product={item}
    //             />
    //           ))}
    //         </div>
    //       </div> */}

      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt={["7rem" ,"7rem"]}
        mb={["-5rem", "-5rem"]}
      >
        <Heading
          size={["lg","lg",'xl']}
          color={headerColor}
        >
          You may also like..
        </Heading>
        <Flex
          mt={["0.5rem","1.6rem","1.4rem"]}
          whiteSpace="nowrap"
          gap={["1rem" ,"1.5rem"]}
          overflowX="scroll"
          w={["22rem", "50rem", "80rem"]}
          flexDir="row"
        >
          {products?.map((item)=>(
            <Products
              key={item._id}
              product={item}
            />
          ))}
        </Flex>

        {/* <Link href="/"> */}
          <Button
            mt={["1.6rem",""]}
            colorScheme={colorScheme}
            size={["sm", "md"]}
            mb={["2rem", "1rem"]}
            onClick={() => router.back()}
          >
            <ChevronLeftIcon
              fontSize={["1.6rem",""]}
            />
          </Button>
        {/* </Link> */}
       
      </Flex>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);
  
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({params: {slug}}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  const product =  await client.fetch(query);
  const products =  await client.fetch(productsQuery);

  return {
    props: { products, product}
  }
}

export default ProductDetails