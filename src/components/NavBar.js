import React from "react";
import {Navbar,Nav,Form,NavDropdown,FormControl} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './navbar.css';
const NavBar = ()=>{
    return(
        <Navbar className='nav' bg="dark" variant="dark">
   <Navbar.Brand href="#home"><div className='logo'>gozzby</div></Navbar.Brand> 
    <Form className='searchBox' inline>
     <FormControl type="text" placeholder="Search" id='form'></FormControl>
     <SearchIcon fontSize="large" className='icon'></SearchIcon>
    </Form>
    <Nav className="mr-auto">
    <AccountCircleIcon fontSize='large' className='icon'></AccountCircleIcon>
    <NavDropdown title="Account" id="navbarScrollingDropdown">
    <NavDropdown.Item href="#login">Login</NavDropdown.Item>
    <NavDropdown.Item href="#register">Register</NavDropdown.Item>
  </NavDropdown>
    </Nav>
  </Navbar> 
  
    )
}

export default NavBar;