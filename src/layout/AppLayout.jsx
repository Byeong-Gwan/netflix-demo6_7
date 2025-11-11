import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const AppLayout = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate()
    const searchByKeyword = (event) => {
        event.preventDefault();
        // url 바꿔준다.
        navigate(`/movies?q=${keyword}`);
        setKeyword('');
    }
  return (
    <div>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" style={{ backgroundColor: '#141414' }}>
            <Container fluid>
                <Navbar.Brand href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" height="24"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                    
                    </Nav>
                    <Form className="d-flex" onSubmit={searchByKeyword}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 bg-dark text-light border-secondary"
                            aria-label="Search"
                            value={keyword}
                            onChange={(event) => setKeyword(event.target.value)}
                        />
                        <Button variant="outline-danger" type='submit'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </div>
    
  )
}

export default AppLayout
