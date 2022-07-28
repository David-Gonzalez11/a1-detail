import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';
import AuthForm from './auth-form';

export default class NavBar extends React.Component {
  render() {

    const handleSignOut = this.context;
    const user = this.context;
    // console.log(user);

    if (user) return <Redirect to="#" />;

    return (

<>
      {[false].map(expand => (
        <Navbar key={expand} bg="primary" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas

              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"

            >

              <Offcanvas.Header closeButton />
              <Nav.Link href="#" className="mt-3 pb-4 fs-5 ">SERVICES/PRICING</Nav.Link>
              <Nav.Link href="#" className="fs-5">APPOINTMENTS</Nav.Link>
              <Nav.Link href="#" className="text-danger pt-4 fs-5" onClick={handleSignOut}>SIGN OUT</Nav.Link>

              <Offcanvas.Body />
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        {user === null &&
          <>
           <AuthForm />
          </>
        }
</>

    );
  }
}

NavBar.contextType = AppContext;
