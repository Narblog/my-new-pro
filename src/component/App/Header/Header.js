import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header (){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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