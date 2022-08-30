import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AppContext from '../lib/app-context';

export default class NavBar extends React.Component {
  render() {
    const style = {
      width: '100px',
      marginLeft: '1rem'
    };
    const { user, handleSignOut } = this.context;
    return (
<>
        {user !== null &&
        <>
          {[false].map(expand => (
            <Navbar key={expand} bg="primary" expand={expand} className="mb-1">
              <Container fluid>
                <a href="#main-page"><img src="https://media.istockphoto.com/vectors/car-wash-cartoon-symbol-vector-illustration-vector-id1282310388?k=20&m=1282310388&s=612x612&w=0&h=mC7n35uNLQkSYWGQjyAsN8oU8MO25U3Me_6y9iq-duw=" className="main-image" style={style}/></a>
                <Navbar.Brand href="#" />
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="bg-white" />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton />
                  <Nav.Link href="#main-page" className="fs-5 appointments">HOME</Nav.Link>
                  <Nav.Link href="#services" className="mt-3 pb-4 fs-5 appointments">SERVICES/PRICING</Nav.Link>
                  <Nav.Link href="#appointments" className="fs-5 appointments">APPOINTMENTS</Nav.Link>
                  <Nav.Link href="#" className="text-danger pt-4 fs-5 appointments" onClick={handleSignOut}>SIGN OUT</Nav.Link>
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
                    <Nav.Link href="#services" className="mt-3 pb-4 fs-5 appointments">SERVICES/PRICING</Nav.Link>
                    <Nav.Link href="#" className="fs-5 appointments">APPOINTMENTS</Nav.Link>
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
