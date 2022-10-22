import React from 'react';
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';

export default class Service extends React.Component {
  render() {
    const popUp =
 <>
      {
      <div className="card" style={{ width: '16rem', height: '25rem' }}>
  <img src="http://bestshinecarwash.com/wp-content/uploads/2019/07/AdobeStock_131682314-1024x683.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title">Exterior Clean</h6>
     <ul>
      <li>Exterior Hand Wash</li>
      <li>Exterior Hand Wash</li>
      <li>Exterior window clean</li>
      <li>Clean tires and apply dresisng</li>

    </ul>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Click</a> */}
  </div>
</div>
      /* {
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
      } */}
    </>;
    const fullDetail = (
      <>
        {
         <div className="card" style={{ width: '16rem', height: '25rem' }}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsF-M045KgOmy7todRDgfVZXeMsRqa4UE-g&usqp=CAU" className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title">Full Detail</h6>
    <ul>
        <li>Exterior hand Wash</li>
                    <li>Exterior window clean</li>
                     <li>Clean tires and apply tire dressing</li>
                    <li>Interior Window Clean</li>
                    <li>Interior Double vacuum</li>
                     <li>Paste Wax</li>
                     <li>Clay Bar and Wax</li>
                     <li>Shampoo Floor Mats</li>
    </ul>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Click</a> */}
  </div>
</div>
        /* {
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
        } */}
      </>
    );
    const basicWash = (
      <>
        {
         <div className="card" style={{ width: '16rem', height: '25rem' }}>
  <img src="https://noh2o.com/wp-content/uploads/2022/04/Exterior-Auto-Detailing.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title">Basic wash</h6>
    <ul>
       <li> Exterior hand Wash</li>
                    <li>Exterior window clean</li>
                    <li>Clean tires and apply tire dressing</li>
                    <li>Interior Window Clean</li>
                    <li>Paste Wax</li>
    </ul>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Click</a> */}
  </div>
</div>
        /* {
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
        } */}
      </>
    );
    const miniDetail = (
      <>
        {
         <div className="card" style={{ width: '16rem', height: '25rem' }}>
  <img src="https://www.detailxperts.net/wp-content/uploads/2015/06/3-Tire-Dressing-Products-to-Avoid.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title">Mini Detail</h6>
     <ul>
      <li>Exterior Hand Wash</li>
      <li> Exterior window clean</li>
      <li> Clean tires and apply dresisng</li>
      <li>Interior Window Clean</li>
      <li>Paste Wax</li>

    </ul>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Click</a> */}
  </div>
</div>
        /* {
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
        } */}
      </>
    );
    return (
      <>
      <div>
  <ul className="nav nav-pills nav-fill">
    <li className="nav-item">
        <span>{popUp}</span>
        {/* <i className="bi bi-droplet text-success fs-4"></i> <br />
        <span className="fs-4">$60</span> */}
    </li>
    <li className="nav-item">
      <span>{basicWash}</span>
      {/* <i className="bi bi-droplet text-success fs-4"></i> <br />
      <span className="fs-4">$90</span> */}
    </li>
    <li className="nav-item">
      <span>{miniDetail}</span>
      {/* <i className="bi bi-droplet text-success fs-4"></i> <br />
      <span className='fs-4'>$130</span> */}
    </li>
    <li className="nav-item">
      <span>{fullDetail}</span>
      {/* <i className="bi bi-droplet text-success fs-4"></i> <br />
      <span className="fs-4">$200</span> */}
    </li>
 </ul>
      </div>
      </>
    );
  }
}
