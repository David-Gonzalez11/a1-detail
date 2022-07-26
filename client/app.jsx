import React from 'react';
import AuthForm from './components/auth-form';
import Home from './pages/home';
import NavBar from './components/navbar';
import parseRoute from './lib/parseRoute';
// import AuthPage from './components/auth';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
    /**
     * Listen for hash change events on the window object
     * Each time the window.location.hash changes, parse
     * it with the parseRoute() function and update state
     */
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'sign-up') {
      return <AuthForm />;
    }
  }

  render() {
    return (
      <>
        <NavBar />
        {this.renderPage()}
      </>
    );
  }
}
