import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const About = () => {
    return (
        <>
        <Stack bgColor="#F1F1F1" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading color="#f70" mb="24px">
                    About BendBroadband
                    </Heading>
                    <Text>
                    BendBroadband delivers broadband, fiber connectivity, cable television, and telephone services to commercial and residential customers in central Oregon.<br/><br/>

                    The ISP (Internet Service Provider), part of TDS Broadband Service LLC, is part of TDS Telecommunications LLC (TDS Telecom). Combined, the companies employ more than 2.900 people.
                    </Text>
                </Box>
        </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/about-bendbroadband-image.jpg" alt="About Image BendBroadband" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About