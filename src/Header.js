import React from 'react'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import './custom.scss'
function Header() {

  return (



  <Navbar bg="light" expand="lg" className="cs" fixed="top" >
  
  <Image className='icon' src="./parva.png" rounded />
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav className="mr-auto">

      <NavDropdown className='icon1' title="About" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Why Parva?</NavDropdown.Item>
        <NavDropdown.Item href="#">Team/Jobs</NavDropdown.Item>
        <NavDropdown.Item href="#">Blog</NavDropdown.Item>
      </NavDropdown>
     
      <NavDropdown className='icon1' title="Community Organizers" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Why you should monetize?</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Resources to get started</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Switch to Parva</NavDropdown.Item>
      </NavDropdown>
     
        <Button className='icon1' variant='light' >FAQ</Button>{' '}
        </Nav>
         <Button className='icon2' variant="danger" href=''>Login</Button>
      
    
      </Navbar.Collapse>
</Navbar>


);
}


export default Header;