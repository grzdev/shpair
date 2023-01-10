import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { Box, Button, Container, Heading, Text, Flex } from '@chakra-ui/react';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import { CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useColorModeValue } from '@chakra-ui/react';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const iconColor = useColorModeValue("#7CB9E8", "#7CB9E8")
  const textColor = useColorModeValue("grey", "white")
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    // runFireworks();
  }, []);

  return (
    // <div className="success-wrapper">
    //   <div className="success">
    //     <p className="icon">
    //       <BsBagCheckFill />
    //     </p>
    //     <h2>Thank you for your order!</h2>
    //     <p className="email-msg">Check your email inbox for the receipt.</p>
    //     <p className="description">
    //       If you have any questions, please email
    //       <a className="email" href="mailto:order@example.com">
    //         order@example.com
    //       </a>
    //     </p>
    //     <Link href="/">
    //       <button type="button" width="300px" className="btn">
    //         Continue Shopping
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <Container centerContent>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        mt="8rem"
        mb={["11.5rem","3rem"]}
      >
        <CheckCircleIcon
          fontSize="5rem"
          color={iconColor}
        />
        <Heading
          size="lg"
          mt="1rem"
        >
          Order is completed!
        </Heading>
        <Text
          color={textColor}
        >
          Click return home to go back to homepage
        </Text>

        <Link href="/">
          <Button
            mt="2rem"
          >
            RETURN HOME <ChevronRightIcon/>
          </Button>
        </Link>
       
      </Flex>
    </Container>

  )
}

export default Success
