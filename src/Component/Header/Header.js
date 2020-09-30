import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../Image/Logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar variant="light" className='text-white'>
                <Link to='/'>
                <Navbar.Brand><img src={logo} className=" header-logo" /></Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Nav.Link className="text-white"><Link to='/news'>News</Link></Nav.Link>
                    <Nav.Link className="text-white"><Link to='/destination'>Destination</Link></Nav.Link>
                    <Form inline>
                        <FormControl type="text" placeholder="Search your destination" className="mr-sm-2 search-field text-white" />
                    </Form>
                    <Nav.Link className="text-white"><Link to='/blog'>Blog</Link></Nav.Link>
                    <Nav.Link className="text-white"><Link to="/contact">Contact</Link></Nav.Link>

                    <Link to="/login">
                        <Button className="text-white" variant="outline-warning">Login</Button>
                    </Link>
                </Nav>

            </Navbar>
        </div>
    );
};

export default Header;