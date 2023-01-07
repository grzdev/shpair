import React from 'react'
import { Box, CardBody, HStack, Stack, Text, Flex, Heading, Image, Card, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Products = ({ product: {image, name, slug, price} }) => {
  const cardBg = useColorModeValue("#F6F6F6", "#263644")

  return (
    // <div>
    //   <Link href={`/product/${slug.current}`}>
    //     <div className='product-card'>
    //       <img 
    //         src={urlFor(image && image[0])}
    //         width={250}
    //         height={250}
    //         className='product-image'
    //       />

    //       <p className='product-name'>{name}</p>
    //       <p className='product-price'>${price}</p>
    //     </div>
    //   </Link>
    // </div>
    <Flex>
      <HStack>
        <Link href={`/product/${slug.current}`}>
          <Card
            bgColor={cardBg}
            border='none'
            
          >
            <CardBody border='none'>
              <Image
                src={urlFor(image && image[0])}
                maxW={["9rem","13rem","13rem"]}
                alt='sneakers'
                boxSize={["10rem", "10rem",'15rem']}
              />
              
              <Stack>
                <Heading
                  size={["xs","md","md"]}
                  mt="1rem"
                >
                  {name}
                </Heading>

                <Heading
                  mt='1rem'
                  fontWeight='600'
                  size={["xs","md","md"]}
                >
                  ${price}
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </Link>
      </HStack>
    </Flex>
  )
}

export default Products