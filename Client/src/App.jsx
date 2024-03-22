import React from 'react'
import {Box} from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Content from './Components/Content'


const App = () => {
  return (
    <Box>
      <Navbar/>
      <Home/>
      <Content/>
    </Box>
  )
}

export default App