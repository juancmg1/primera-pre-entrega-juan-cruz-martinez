import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWinget from '../CarWinget/CarWinget';
import Logo from './Logo'
import { Link } from 'react-router-dom';
import  './NavBar.css'



function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="#"><Logo /></Navbar.Brand>
          <div>
          <Nav className="me-auto">
          <Navbar.Toggle aria-controls="navbar-nav" />
           <Navbar.Collapse id="navbar-nav">
            
              <Link className="linkEstilizado" to='/'>Inicio</Link>
              <Link className="linkEstilizado" to='/category/celulares'>Celulares</Link>
              <Link className="linkEstilizado" to='/category/tvs'>TV´s</Link>
              <Link className='linkEstilizado' to='/cart'><CarWinget/></Link>
        

              </Navbar.Collapse>
           
          </Nav>
          </div>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavBar;