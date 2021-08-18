import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <Container>
      <NavBar />

      <Footer />
    </Container>

  );
}

export default App;
