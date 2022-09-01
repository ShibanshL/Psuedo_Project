import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { AppShell, Center, Container,Group,Grid, Navbar} from '@mantine/core';
import Nav from './Components/Nav';
import Mid from './Components/Mid';
import Footer from './Components/Footer';

function App() {

  return (
    <AppShell
          padding={0}
          styles={(theme) => ({
            main: {background:'white',backgroundSize:'cover'},
          })}>
            <Container p={0} size={1920}>
                <Nav />
                <Mid />
                <Footer />
            </Container>
      </AppShell>
  )
}

export default App
