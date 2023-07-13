import {Navbar,Nav} from "react-bootstrap";
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { UserContext } from "../App";
/*import {Container} from 'react-bootstrap'*/
function Header(){
  const {logout} = useContext(UserContext)
    return( /*
      <>
      <Container
      className = "d-flex align-item-center justify-content-center"
      style ={{ minHeight: "100vh"}} >
         className ="w-100" style ={{maxWidth :"40px"}}
 
    </Container>
 */         
           <>
            <h1> <Navbar bg="dark" variant="dark">
        
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav-bar-wrapper fs-5">
            <Link to ="/signin" >login</Link>
            <Link to = "/signup">register</Link>
            <Link to = "/add">add product</Link>
            <Link to = "/products"> product</Link>
            <button onClick = {logout} >Sign out</button>
          </Nav>
        
      </Navbar></h1>
            </>
    )
}
export default Header