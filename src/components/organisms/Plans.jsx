import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const Plans = () => {
    return (
<>
<Box align="center" bgColor="#fff" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">BendBroadband plans and deals</Heading>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="xl" bgColor="#fff" border="1px solid #d1d1d1" align="center" direction="column" >
      <Heading py="20px" as="h3" fontSize="2xl">1Gig</Heading>
      <Box bgColor="#8164af" color="#fff" w="100%" pt="5">

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
                    Up to 1Gig
                    </ListItem>
                    <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Max Download: 1Gig
                    </ListItem>
                    <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Max Upload: 20Mbps
                    </ListItem>
                    <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Excellent for homes with many devices and extreme Internet demands
                    </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
    
    <Flex rounded="md" boxShadow="xl" bgColor="#fff" border="1px solid #d1d1d1" align="center" direction="column" >
      <Heading py="20px" as="h3" fontSize="2xl">Ultra 600</Heading>
      <Box bgColor="#518eaa" color="#fff" w="100%" pt="5">

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
                    Up to 600Mbps
                    </ListItem>
                    <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Max Download: 600Mbps
                    </ListItem>
                    <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Max Upload: 20Mbps
                    </ListItem>
                    <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Perfect for homes with multiple devices and very high internet demands
                    </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" boxShadow="xl" bgColor="#fff" border="1px solid #d1d1d1" align="center" direction="column" >
      <Heading py="20px" as="h3" fontSize="2xl">Ultra 300</Heading>
      <Box bgColor="#8dc73f" color="#fff" w="100%" pt="5">

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
                    Up to 300Mbps
                    </ListItem>
                    <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Max Download: 300Mbps
                    </ListItem>
                    <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Max Upload: 10Mbps
                    </ListItem>
                    <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Best for homes with up to 10 devices and high internet demands
                    </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
  </SimpleGrid>

      <Text pt="12">STREAM ALL YOU WANT.<br/>
ENJOY THE FREEDOM OF NO DATA LIMITS WHEN YOU BUNDLE TV & INTERNET
</Text>
</Box>
</>
    )}



export default Plans