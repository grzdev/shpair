import { Heading, Box, Flex, useColorModeValue, Container } from '@chakra-ui/react';
import React from 'react'
import {
  Products,
  FooterBanner,
  HeroBanner
} from '../components'
import { client } from '../lib/client';

const  Home = ({products, bannerData}) => {
  const headerColor = useColorModeValue("#324361", "white")

  return (
    <Container centerContent>

      <HeroBanner
        heroBanner={bannerData.length && bannerData[0]}
      />

      {/* <div className='products-heading'> 
        <h2>Best Selling Products</h2>
        <p>Sneakers of many variations</p>
      </div> */}
      
      <Flex
        alignItems='center'
        justifyContent="center"
        flexDir='column'
        mt={["4rem", "4rem",'5rem']}
      >
        <Heading
          size={["lg","lg",'xl']}
          color={headerColor}
        >
          Best Selling Sneakers
        </Heading>

        {/* <Heading
          size={["xs","md","sm"]}
          color={headerColor}
          mt="-0.1rem"
        >
          kicks of many variations
        </Heading> */}
      </Flex>
      

      {/* <div className='products-container'>
        {products?.map(
          (product) => <Products key={product._id} product={product}/>
        )}
      </div> */}
      <Flex
        mt={["0.7rem","1.6rem","2rem"]}
        whiteSpace="nowrap"
        gap= "1.5rem"
        overflowX="scroll"
        w={["20rem", "50rem", "80rem"]}
        flexDir="row"
      >
        {products?.map(
          (product) => <Products key={product._id} product={product}/>
        )}
      </Flex>

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]}/> */}
    </Container>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products =  await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData =  await client.fetch(bannerQuery);

  return {
    props: { products, bannerData}
  }

}

export default  Home