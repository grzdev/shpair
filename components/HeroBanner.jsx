import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { Container, Box, Text, Heading, Flex, Image, VStack, Button} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"

const HeroBanner = ({heroBanner}) => {
  
  const bannerColor = useColorModeValue('#81b6e2' , '#6d9fc8')
  const header = useColorModeValue("white" , "#2f2f2f")
  const shopBox = useColorModeValue("#BF272C", "#c42227")

  return ( 
    // <div className='hero-banner-container'>
    //   <div>
    //     <p className='beats-solo'>{heroBanner.smallText}</p>
    //     <h3>{heroBanner.midText}</h3>
    //     <h1>{heroBanner.largeText2}</h1>
    //     <img 
    //       src= {urlFor(heroBanner.image)}
    //       alt='sneakers'
    //       className='hero-banner-image'
    //     />

    //     <div>
    //       <Link href={`product/${heroBanner.product}`}>
    //         <button type='button'>{heroBanner.buttonText}</button>
    //       </Link>
    //       <div className='desc'>
    //         <h5>Description</h5>
    //         <p>{heroBanner.desc}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Container centerContent>
      <Box
        w={['20rem', '60rem', '80rem']}
        h='35rem'
        bg={bannerColor}
        borderRadius='1rem'
        mt='1.8rem'
        display='flex'
        flexDir={["column", 'row']}
        // boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
        // boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
        // boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
        boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
      >
        <Flex
          flexDir='column'
          mt={["4rem", "2rem", '9rem']}
          ml='2rem'
          mr={["1rem", "1rem", '6rem']}
        >
          <Heading
            fontWeight='600'
            fontSize={["1rem", "1rem", '1.2rem']}
            size='xs'
          >
            {heroBanner.smallText}
          </Heading>

          <Heading
            fontWeight='700'
            fontSize={["1.5rem", "2rem", '4rem']}
            mt={["-0.3rem", "-0.8ren", "-1rem"]}
          >
            {heroBanner.midText}
          </Heading>

          <Heading
            fontSize={["4rem", "5rem", '10rem']}
            color={header}
            mt={["-1.3rem","-2.3rem"]}
            ml='-1.3rem'
          >
            {heroBanner.largeText2}
          </Heading>

          <Box
            w='7rem'
            h='2rem'
            bg={shopBox}
            fontWeight='600'
            color='white'
            borderRadius='0.5rem'
            alignItems='center'
            justifyContent='center'
            display='flex'
            mt={["19rem", "3rem" ,"4rem"]}
          >
            Shop now <ChevronDownIcon/>
          </Box>
        </Flex>

        <Flex
          mt={["-22rem" , "1.8rem" ,"2rem"]}
        >
          <Image
            alt='sneakers'
            src={urlFor(heroBanner.image)}
            boxSize={["20rem", "10rem", "33rem"]}
          />
        </Flex>
       
      </Box>
    </Container>
  )
}

export default HeroBanner