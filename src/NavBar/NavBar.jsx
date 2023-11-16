import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWinget from '../CarWinget/CarWinget';
import Logo from './Logo'




function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
          <div>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Smartphones</Nav.Link>
            <Nav.Link href="#pricing">TV´s</Nav.Link>
        
            <div className='div-CarWinget'>

            <Nav.Link href="#pricing"><CarWinget/></Nav.Link>
            </div>
          </Nav>
          </div>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavBar;