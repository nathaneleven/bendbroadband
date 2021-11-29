import React from 'react'
import { Box, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const LogoHeader = () => {
  return (
    <>
    <Box>
      <Link href="/"><Image w="300px" src="/logo-bend-horizontal.svg"/></Link>
    </Box>
    </>
  )
}

export default LogoHeader