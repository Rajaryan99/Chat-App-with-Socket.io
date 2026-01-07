import React from 'react'
import './Home.css'
import { Box, Container, Text, Tabs } from '@chakra-ui/react'
import Login  from './Authentication/LoginPage'
import Signup from './Authentication/SignupPage'

export default function Homepage() {
  return (
    <Container maxW='xl'>
      <Box d={'flex'}
      // height={'40px'}
        width={'100%'}
        p={'5px'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        borderRadius={'10px'}
        mt={'10px'}
        className='box'
      >
        <Text className='title' fontSize={'4xl'} color={'black'}>Let's Talk</Text>
      </Box>
      <Box className='box' w={'100%'} padding={'2'} borderRadius={'10px'} mt={'10px'}
        justifyContent={'center'}
        alignItems={'center'}
       
      >

        <Tabs.Root variant="line"   fitted defaultValue={"tab-1"}>
          <Tabs.List>
            <Tabs.Trigger fontSize={'18px'} value="login">Login</Tabs.Trigger>
            <Tabs.Trigger fontSize={'18px'} value="signup">SignUp</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="login">{ <Login/>}</Tabs.Content>
          <Tabs.Content value="signup"><Signup/></Tabs.Content>
          
        </Tabs.Root>

      </Box>
    </Container>
  )
}
