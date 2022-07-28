import React from 'react';
import AuthForm from './components/auth-form';
import Home from './pages/home';
import NavBar from './components/navbar';
import parseRoute from './lib/parseRoute';
import jwtDecode from 'jwt-decode';
import NotFound from './components/not-found';
// import AppContext from './lib/app-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });

    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({ user });

  }

  handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    this.setState({ user: null });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'sign-up') {
      return <AuthForm action={route.patth} onSignIn={this.handleSignIn}/>;
    }
    if (route.path === 'sign-in') {
      return <AuthForm action={route.path} onSignIn={this.handleSignIn}/>;
    }
    return <NotFound />;
  }

  render() {
    if (this.state.isAuthorizing) return null;
    // const { user, route } = this.state;
    // const { handleSignIn, handleSignOut } = this;
    // const contextValue = { user, route, handleSignIn, handleSignOut };
    return (
    // <AppContext.Provider value={contextValue}>

      <>
        <NavBar />
        {this.renderPage()}
      </>
      // </AppContext.Provider>

    );
  }
}
