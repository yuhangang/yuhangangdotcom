
import React from 'react';
import NavBar1 from './NavBar1';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styles from './Nav.module.scss'

const DesNav = () => (
 
    <div className={styles.nav} >
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="lg" style={{fontSize:"20px",padding:"1vh 5vw",backgroundColor:'transparent', background:"linear-gradient(to bottom, rgba(40, 40, 40, 0.6), rgba(40, 40, 40, 0.3))"}}>
  <Navbar.Brand href="/" style={{color:"white"}}>yuhangang</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
     
    </Nav>
    <Nav>
      
      <Nav.Link href="/about" style={{color:"white"}}>About</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown"  style={{color:"white"}}>
        <NavDropdown.Item href="/projects" className={styles.navlink}>All Projects</NavDropdown.Item>
        <NavDropdown.Divider style={{backgroundColor:"rgba(30,30,30.0.5)"}}/>
        <NavDropdown.Item href="/theranos" className={styles.navlink}>Theranos</NavDropdown.Item>
        <NavDropdown.Item href="/yuhangang.com" className={styles.navlink}>Yuhangangdotcom</NavDropdown.Item>
        
        
      </NavDropdown>
      <Nav.Link href="mailto: redrainhang@gmail.com" style={{color:"white"}}>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>

  

)
export default DesNav;

