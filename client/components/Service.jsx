import React from 'react';

export default class Service extends React.Component {
  render() {
    const exteriorClean =
 <>
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

  </div>
</div>
    </>;
    const fullDetail = (
      <>
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

  </div>
</div>
      </>
    );
    const basicWash = (
      <>
        <div className="card" style={{ width: '16rem', height: '25rem' }}>
  <img src="https://noh2o.com/wp-content/uploads/2022/04/Exterior-Auto-Detailing.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title">Basic wash</h6>
    <ul>
       <li> Exterior hand Wash</li>
                    <li>Exterior window clean</li>
                    <li>Clean tires and apply tire dressing</li>
                    <li>Interior Window Clean</li>
                    <li>Vacuum</li>
                    <li>Paste Wax</li>
    </ul>
  </div>
</div>
      </>
    );
    const miniDetail = (
      <>
        <div className="card" style={{ width: '16rem', height: '25rem' }}>
  <img src="https://www.detailxperts.net/wp-content/uploads/2015/06/3-Tire-Dressing-Products-to-Avoid.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title">Mini Detail</h6>
     <ul>
      <li>Exterior Hand Wash</li>
      <li> Exterior window clean</li>
      <li> Clean tires and apply dresisng</li>
      <li>Interior Window Clean</li>
      <li>Vacuum</li>
      <li>Paste Wax</li>

    </ul>

  </div>
</div>
      </>
    );
    return (
      <>
      <div>
  <ul className="nav nav-pills nav-fill">
    <li className="nav-item">
        <span>{exteriorClean}</span>

    </li>
    <li className="nav-item">
      <span>{basicWash}</span>

    </li>
    <li className="nav-item">
      <span>{miniDetail}</span>

    </li>
    <li className="nav-item">
      <span>{fullDetail}</span>

    </li>
 </ul>
      </div>
      </>
    );
  }
}
