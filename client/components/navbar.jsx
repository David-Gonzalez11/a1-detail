import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AppContext from '../lib/app-context';
// import Redirect from '../components/redirect';

export default class NavBar extends React.Component {
  render() {

    const { user, handleSignOut } = this.context;
    // if (user) return <Redirect to="" />;
    return (
<>
        {user !== null &&
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
                  <Nav.Link href="#main-page" className="fs-5 appointments">HOME</Nav.Link>
                  <Nav.Link href="#services" className="mt-3 pb-4 fs-5">SERVICES/PRICING</Nav.Link>
                  <Nav.Link href="#" className="fs-5 appointments">APPOINTMENTS</Nav.Link>
                  <Nav.Link href="#" className="text-danger pt-4 fs-5" onClick={handleSignOut}>SIGN OUT</Nav.Link>
                  <Offcanvas.Body />
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
        }
        <div>
          {user === null &&
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
                    <Nav.Link href="#main-page" className="fs-5 appointments">HOME</Nav.Link>
                    <Nav.Link href="#services" className="mt-3 pb-4 fs-5 ">SERVICES/PRICING</Nav.Link>
                    <Nav.Link href="#" className="fs-5">APPOINTMENTS</Nav.Link>
                    <Offcanvas.Body />
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
            </>
          }
        </div>
</>
    );
  }
}
NavBar.contextType = AppContext;
