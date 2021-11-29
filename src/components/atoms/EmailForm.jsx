import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const EmailForm = () => {
  return (
    <>
            <Flex align="center">
                <Input w="80%" focusBorderColor="white" colorScheme="white" borderRadius="sm" placeholder="Enter Zip Code" size="lg" variant="filled" mr="3" />
                <Button colorScheme="blue" bgColor="#1c76b4" px="40px" size="lg" variant="solid" borderRadius="sm">Check Availability</Button>
            </Flex>
    </>
  )}

  export default EmailForm