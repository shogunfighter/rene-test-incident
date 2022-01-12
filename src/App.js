// import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavItem, Container, NavDropdown} from 'react-bootstrap';

import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Incident from './components/Incident/Incident.js';
import Login from './components/Login/Login.js';


function App() {
  return (
      <main>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="d-none">Incidence Monitoring</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/incident">Incident</Nav.Link>
                <Nav.Link href="/sign-in">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="App">
          <header className="App-header">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/incident" element={<Incident />} />
                <Route path="/sign-in" element={<Login />} />
              </Routes>
            </Router>
          </header>
        </div>
      </main>
  );
}

export default App;
