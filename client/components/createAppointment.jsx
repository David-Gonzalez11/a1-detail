import React from 'react';
export default class ScheduleAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      address: '',
      name: '',
      appointmentScheduled: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    if (this.city === null || this.address === null || this.name === null) {
      alert('all fields are required');
      return;
    }
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': localStorage.getItem('react-context-jwt')

      },

      body: JSON.stringify(this.state)
    };
    fetch('/api/appointments/', req)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          name,
          address: event.target.value,
          city: event.target.value,
          appointmentScheduled: event.target.value
        });
      });

  }

  render() {

    return <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Schedule Appointment
              </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-1">
                    <label htmlFor="name" className="col-form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={this.handleChange} name="name"/>
                  </div>
                  <div className="mb-1">
                    <label htmlFor="recipient-address" className="col-form-label">Address</label>
                    <input type="text" className="form-control" id="recipient-address" onChange={this.handleChange} name="address"/>
                  </div>
                  <div className="mb-1">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <textarea className="form-control" id="city" onChange={this.handleChange} name="city"></textarea>
                  </div>

                  <div>
                    <label className='pt-3' htmlFor='date-time'>Please Select Date and Time:</label>
                    <div>
                      <input name="appointmentScheduled" onChange={this.handleChange} type="datetime-local"></input>
                   </div>
                  </div>
                  <div className="text-center d-grid gap-2">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                  </div>
                </form>
              </strong>
            </div>
          </div>
        </div>
         </div>
    </>;
  }
}
