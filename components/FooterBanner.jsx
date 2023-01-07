import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { Container, Box, Text, Heading, Flex, Image, VStack, Button} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const FooterBanner = ({footerBanner: { discount, desc, largeText1, largeText2, smallText, saleTime, buttonText, midText, product, image}}) => {
  const bannerColor = useColorModeValue('#F02D34' , '#6795ba')
  const header = useColorModeValue("white" , "black")
  const shopBox = useColorModeValue("#881619", "#c42227")

  return (
    // <div className='footer-banner-container'>
    //   <div className='banner-desc'>
    //     <div className='left'>
    //       <p>{discount}</p>
    //       <h3>{largeText1}</h3>
    //       <h3>{largeText2}</h3>
    //       <p>{saleTime}</p>
    //     </div>
    //     <div className='right'>
    //       <p>{smallText}</p>
    //       <h3>{midText}</h3>
    //       <p>{desc}</p>
    //       <Link href={`/product/${product}`}>
    //         <button type='button'>
    //           {buttonText}
    //         </button>
    //       </Link>
    //     </div>

    //     <img
    //       src={urlFor(image)}
    //       className='footer-banner-image'
    //     />
    //   </div>
    // </div>
    
    <Container centerContent>
      <Box
        w={['20rem', '60rem', '80rem']}
        h={['24rem', "30rem" ,'35rem']}
        bg={bannerColor}
        borderRadius='1rem'
        mt={["2rem", "3rem",'6rem']}
        display='flex'
        flexDir={["column", 'row']}
        boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
        alignItems='center'
        justifyContent='center'
      >
        <Flex
          flexDir='column'
          // mr='auto'
          // ml='3rem'
          mt={["3rem", "0rem"]}
          alignItems='center'
          justifyContent='center'
        >
          <Text
            fontWeight='600'
            fontSize={["1rem", "1rem", '1.2rem']}
          >
            {discount}
          </Text>

          <Heading
            fontWeight='700'
            fontSize={["1.5rem", "2rem", '4rem']}
            mt={["-0.3rem", "-0.8ren", "-1rem"]}
          >
            {largeText1}
          </Heading>

          <Heading
            fontSize={["4rem", "5rem", '10rem']}
            color={header}
            mt={["-1.3rem","-2.3rem"]}
            // ml='2rem'
          >
            {largeText2}
          </Heading>
          <Text
           fontWeight='600'
           color="white"
          >
            {saleTime}
          </Text>
        </Flex>

       <Flex 
       >
        <Image
          src='/img1.png'
          boxSize={["15rem", "10rem", "33rem"]}
          mt="-2rem"
        />
       </Flex>
      
      </Box>
    </Container>
  )
}

export default FooterBanner