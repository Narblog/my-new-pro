
import {Col,Row,Button,Form,Navbar,Nav,Container} from "react-bootstrap"
import logo from "./logo.png"
function Header (){
    return(
        <Navbar expand="lg" className="bg-body-dark" bg="dark" variant="dark">
        <Container>
        
          <Navbar.Brand href="#home" className='ms-2'><img src={logo} alt="news" style={{width:"40px"}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
         
        </Row>
      </Form>
    
      <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
      <Button variant="info">Login</Button>
      <Button variant="success">Sign Up</Button>
        </Container>
      </Navbar>
    )
}
export default Header