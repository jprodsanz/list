import React from 'react'
import { Navbar,Nav, NavDropdown, Container, Form,} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
                <Navbar.Brand>
                    <Link to="/">
                        Pablo X
                    </Link>
                
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="m-auto">
                            <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                {/* <Button variant="outline-success">Search</Button> */}
                            </Form>
                        </Nav>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link to='/home'>
                                    Home
                                </Link>
                            </Nav.Link>
                            <NavDropdown title="Pablo" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to='/todolist'>
                                        To Do List
                                    </Link>
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
        </Container>
    </Navbar>
)
}
export default Header;