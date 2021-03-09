import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import About from './components/about';
import Sertificate from './components/sertifi';
import Resume from './components/resume';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-3" >
              <div className="app_sidebar" >
                <Sidebar />
              </div>
            </div>
            <div className="col-lg-9 app_main-content">
              {/* Navbar */}
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                {/* bisa juga digunakan dengan cara di bawah ini */}
                <Route path="/sertificate" component={Sertificate} />
                {/* ahkir */}
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
