import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav1() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" ><h1>Blog</h1></Navbar.Brand>
                    <Nav className="text-center">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/AddBlog.jsx">Add Blog</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}