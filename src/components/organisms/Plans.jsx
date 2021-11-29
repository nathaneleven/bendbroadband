import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const Plans = () => {
    return (
<>
<Box align="center" bgColor="#fff" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">Ziply Fiber: Speeds that will knock your socks off</Heading>

    <Flex mb="30px" maxW="1250px" rounded="md" boxShadow="2xl" bgColor="#F1F1F1" align="center" direction="column" >
      <List p="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Unlimited data and no annual contract 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    25x faster upload speeds than cable with Fiber Gig 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    30-day moneyback guarantee
                </ListItem>
      </List>
      </Flex>


  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="2xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#000050" color="#fff" w="100%" mb="" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Access Internet 60</Heading>

        <Flex align="start" color="#fff" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">60</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Gig Speed with 25x Faster Uploads than Cable 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
    
    <Flex rounded="md" boxShadow="2xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#000050" color="#fff" w="100%" mb="" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Ziply Fiber 200/200</Heading>

        <Flex align="start" color="#fff" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">40</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Fast Speeds up to 200 Mbps Upload & Download 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" boxShadow="2xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#000050" color="#fff" w="100%" mb="" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Ziply Fiber 50/50</Heading>

        <Flex align="start" color="#fff" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">20</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Reliable Speed up to 50 Mbps Upload & Download 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
  </SimpleGrid>
      <Text pt="12">For new residential customers. One-time introductory price for the first 12 months. Prices shown with autopay and paperless billing.</Text>
</Box>
</>
    )}



export default Plans