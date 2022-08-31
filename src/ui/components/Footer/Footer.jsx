import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Footer = () => {

    return (
        <Navbar bg="light">
        <Container className='flex-column justify-content-center'>
          <Navbar.Brand href="https://github.com/Anduriz">Andy Guillermo Arellano Anleu</Navbar.Brand>
          <small>andyxelar@gmail.com</small>
          <small>3 Pillar Global Apprentice Program</small>
        </Container>
      </Navbar>
    )
  }