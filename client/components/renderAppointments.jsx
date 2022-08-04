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
  }

  renderList() {

    fetch('/api/appointments', {
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': localStorage.getItem('react-context-jwt')
      }
    })
      .then(res =>
        res.json()
      )
      .then(data => {
        this.setState({
          appointments: data,
          isLoaded: true
        });

      }).catch(err => console.error(err));
  }

  componentDidMount() {
    this.renderList();
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) return <span className="visually-hidden">Loading...</span>;

    return (

      <>
        <h1 className='text-center'>Appointments</h1>

        {this.state.appointments.map(appt =>

          <div className="card text-bg-light mb-2" key={appt.appointmentId}>
            <div className="card-body">
              <p className="card-text text-center">What: {appt.service}</p>
              <p className="card-text text-center">When: {appt.appointmentScheduled}</p>
              <p className='card-text text-center'>Where: {appt.address}</p>
              <p className='card-text text-center'>City: {appt.city}</p>

            </div>
          </div>
        )}
      </>

    );
  }
}
