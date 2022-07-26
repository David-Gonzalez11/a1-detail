import React from 'react';
import AuthForm from './components/auth-form';
import Home from './pages/home';
import NavBar from './components/navbar';
export default class App extends React.Component {
  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'sign-up') {
      return <AuthForm/>;
    }
  }

  render() {
    return (
      <>
      <NavBar />
      <Home />
       <AuthForm />
      </>
    );
  }
}
