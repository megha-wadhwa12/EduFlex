import React from 'react'
import {Box} from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Home/>
    </Box>
  )
}

export default App