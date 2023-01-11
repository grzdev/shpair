import { Box, Container, Text, Heading, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import { SiNetlify } from 'react-icons/si'
import { useColorModeValue } from '@chakra-ui/react'
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
const bgColor = useColorModeValue("black", "black")
const textColor = useColorModeValue('white', 'white')

  return (
    <Container
      centerContent
    >
      <Box
        w={['24.4rem', '60rem', '94.8rem']}
        h='30rem'
        bg={bgColor}
        // borderRadius='1rem'
        mt='6.54rem'
        display='flex'
        flexDir={["column", 'column']}
        boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
        justifyContent='center'
        alignItems="center"
        mb="auto"
        // mb="-8"
      >
        <Flex
          mt="25rem"
        >
          <Link href='https://github.com/19zay'>
            <Box mr="1rem">
              <AiOutlineGithub fontSize="1.2rem" color='white' />
            </Box>
          </Link>

          <Link href='https://app.netlify.com/teams/19zay/overview'>
            <Box mr="1rem">
              <SiNetlify fontSize="1.2rem" color='white'/>
            </Box>
          </Link>
          
          <Link href='https://www.linkedin.com/in/damilola-oyeniyi-97805b23a/'>
            <Box mr="1rem">
              <BsLinkedin fontSize="1.2rem" color='white'/>
            </Box>
          </Link>
        </Flex>

        <Text
          color={textColor}
          mt="0.4rem"
          fontSize="0.8rem"
        >
         @ 2023 Shpair, Inc. All rights reserved
        </Text>
      </Box>
    </Container>
  )
}

export default Footer