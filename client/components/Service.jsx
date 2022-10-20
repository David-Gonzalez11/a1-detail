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
  <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
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
