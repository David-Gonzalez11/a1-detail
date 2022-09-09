import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default class Service extends React.Component {
  render() {
    const popUp =
 <>
      {
        ['bottom'].map(placement => (
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                <Popover.Header as="h3">Exterior Clean</Popover.Header>
                <Popover.Body>
                  <p className='fs-4'> 25 to 35 minutes </p>

                  <i className="bi bi-circle-fill"> Exterior hand Wash</i><br />
                  <i className="bi bi-circle-fill"> Exterior window clean</i><br />
                  <i className="bi bi-circle-fill"> Clean tires and apply tire dressing</i>

                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="secondary bg-transparent" className="fs-4 text-dark mt-2  border-3 border-dark">Exterior Clean</Button>
          </OverlayTrigger>
        ))
      }
    </>;
    const fullDetail = (
      <>
        {
          ['bottom'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Header as="h3" >Full Detail </Popover.Header>
                  <Popover.Body>
                    <p className='fs-4'>80 to 90 minutes</p>

                    <i className="bi bi-circle-fill"> Exterior hand Wash</i><br />
                    <i className="bi bi-circle-fill"> Exterior window clean</i><br />
                    <i className="bi bi-circle-fill"> Clean tires and apply tire dressing</i>
                    <i className="bi bi-circle-fill"> Interior Window Clean</i><br />
                    <i className="bi bi-circle-fill"> Interior Double vacuum</i><br />
                    <i className="bi bi-circle-fill"> Paste Wax</i><br />
                    <i className="bi bi-circle-fill"> Clay Bar and Wax</i><br />
                    <i className="bi bi-circle-fill"> Shampoo Floor Mats</i><br />

                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="secondary bg-transparent" className="fs-4 text-dark border-3 border-dark mt-2">Full Detail</Button>
            </OverlayTrigger>
          ))
        }
      </>
    );
    const basicWash = (
      <>
        {
          ['bottom'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Header as="h3">Basic Wash</Popover.Header>
                  <Popover.Body>
                    <p className='fs-4'>40 to 50 minutes</p>

                    <i className="bi bi-circle-fill"> Exterior hand Wash</i><br />
                    <i className="bi bi-circle-fill"> Exterior window clean</i><br />
                    <i className="bi bi-circle-fill"> Clean tires and apply tire dressing</i>
                    <i className="bi bi-circle-fill"> Interior Window Clean</i><br />
                    <i className="bi bi-circle-fill"> Paste Wax</i><br />

                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="secondary bg-transparent" className="fs-4 text-dark  border-3 border-dark mt-2">Basic Wash</Button>
            </OverlayTrigger>
          ))
        }
      </>
    );
    const miniDetail = (
      <>
        {
          ['bottom'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Header as="h3">Mini Detail</Popover.Header>
                  <Popover.Body>
                    <p className='fs-4'>40 to 50 minutes</p>

                    <i className="bi bi-circle-fill"> Exterior hand Wash</i><br />
                    <i className="bi bi-circle-fill"> Exterior window clean</i><br />
                    <i className="bi bi-circle-fill"> Clean tires and apply tire dressing</i>
                    <i className="bi bi-circle-fill"> Interior Window Clean</i><br />
                    <i className="bi bi-circle-fill"> Paste Wax</i><br />

                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="secondary bg-transparent" className="fs-4 text-dark  border-3 border-dark mt-2">Mini Detail</Button>
            </OverlayTrigger>
          ))
        }
      </>
    );
    return (
      <>
      <div>
  <ul className="nav nav-pills nav-fill bg-info">
    <li className="nav-item">
        <p>{popUp}</p>
        <i className="bi bi-droplet text-success fs-4"></i> <br />
        <span className="fs-4">$60</span>
    </li>
    <li className="nav-item">
      <p>{basicWash}</p>
      <i className="bi bi-droplet text-success fs-4"></i> <br />
      <span className="fs-4">$90</span>
    </li>
    <li className="nav-item">
      <p>{miniDetail}</p>
      <i className="bi bi-droplet text-success fs-4"></i> <br />
      <span className='fs-4'>$130</span>
    </li>
    <li className="nav-item">
      <p>{fullDetail}</p>
      <i className="bi bi-droplet text-success fs-4"></i> <br />
      <span className="fs-4">$200</span>
    </li>
 </ul>
      </div>
      </>
    );
  }
}
