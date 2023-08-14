import React from 'react';
export default class UserAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      isLoaded: false
    };
    this.renderList = this.renderList.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(appointmentId) {
    const newArray = this.state.appointments.filter(appts => {
      return appts.appointmentId !== appointmentId.appointmentId;
    });
    const req = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': localStorage.getItem('authToken-jwt')
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/appointments/${appointmentId.appointmentId}`, req).then(
      result => {
        this.setState({
          appointments: newArray,
          isLoaded: true
        });
      }
    );
  }

  renderList() {
    fetch('/api/appointments', {
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': localStorage.getItem('authToken-jwt')
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          appointments: data,
          isLoaded: true
        });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.renderList();
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div className="lds-dual-ring text-center">
          <h1>loading...</h1>
        </div>
      );
    }

    return (
      <>
        <h1 className="text-center">Appointments</h1>

        {this.state.appointments.map(appt => (
          <div className="card text-bg-light mb-2" key={appt.appointmentId}>
            <div className="card-body">
              <i
                onClick={this.handleDelete.bind(appt.appointmentId)}
                className="bi bi-trash-fill text-danger"
              >
                Delete
              </i>
              <p className="card-text text-center">What: {appt.service}</p>
              <p className="card-text text-center">
                When: {appt.appointmentScheduled}
              </p>
              <p className="card-text text-center">Where: {appt.address}</p>
              <p className="card-text text-center">City: {appt.city}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}
