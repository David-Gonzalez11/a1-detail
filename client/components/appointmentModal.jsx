
import React from 'react';
import { Modal } from 'bootstrap';
export default class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const { action } = this.props;
  //   const req = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.state)
  //   };
  //   fetch(`/api/auth/${action}`, req)
  //     .then(res => res.json())
  //     .then(result => {
  //       if (action === 'sign-up') {
  //         window.location.hash = 'sign-in';
  //       } else if (result.user && result.token) {
  //         this.props.onSignIn(result);
  //         window.location.hash = '#main-page';
  //       }
  //     });
  // }

  render() {

    return (
<>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Wash me Now</button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Schedule Appointment</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Name</label>
                    <input type="text" className="form-control" id="recipient-name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-address" className="col-form-label">Address</label>
                    <input type="text" className="form-control" id="recipient-address"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">City</label>
                    <textarea className="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
</>
    );
  }
}
