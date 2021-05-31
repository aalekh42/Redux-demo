import React,{useState} from 'react';
import {Navbar,Nav,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';

export default function Header(){

const [isNavOpen,setIsNavOpen]= useState(false);
return( 
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Pristine Printers</Navbar.Brand>
    <Navbar.Toggle onClick={() => setIsNavOpen(!isNavOpen)} />
    <Navbar.Collapse in={isNavOpen}>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Menu</Nav.Link>
        <NavDropdown title="Features" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Visiting Card</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Pamphlets</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Wedding Cards</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Customized</NavDropdown.Item>
       </NavDropdown>
        <Nav.Link href="#contacts">Contacts</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="ml-sm-2" />
        <Button variant="outline-info">Search</Button>
    </Form>

    </Navbar.Collapse>
  </Navbar>
    </>
)
}