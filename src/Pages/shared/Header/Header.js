import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src="https://i.ibb.co/9nTdDH5/logo.png"
                        width="100%"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link href="home#products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                        {
                            user &&
                            <>
                                <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
                                <Nav.Link as={Link} to="/manageinventory">Manage Inventory</Nav.Link>
                                <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                            </>

                        }
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button className='button' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                    <button className='button'>Login</button>
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;