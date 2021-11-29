import './App.css';
import React, {Component} from 'react';
import logo from './WetBat.png';
import CreateUser from './components/user/createUser';
import CreateQuote from './components/quote/createQuote';
import ReadUser from './components/user/readUser';
import UpdateUser from './components/user/updateUser';
import UpdateQuote from './components/quote/updateQuote';
import ReadQuote from './components/quote/readQuote';
import mainMenu from './components/menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      
      <div className="main">
        <div className="main-header">
          <div className="Logo">
            <img src={logo} />            
          </div>
        </div>
        <div className="main-menu">
          <div class="ui pointing vertical menu">
            <a class="item">Home</a>
            <a class="item">Quotes</a>
            <a class="item">Leads</a>
            <a class="item">Tours</a>
            <a class="item">Invoices</a>
            <a class="item">Analytics</a>
            <a class="item">Team</a>
            <a class="item">Admin</a>
            <a class="item">Support</a>
          </div>
        </div>
      </div>
      <div className="home">
          <Routes>
            <Route exact path='/createUser' element={<CreateUser />} />
            <Route exact path='/readUser' element={<ReadUser />} />
            <Route exact path='/updateUser' element={<UpdateUser />} />
            <Route exact path='/createQuote' element={<CreateQuote />} />
            <Route exact path='/readQuote' element={<ReadQuote />} />
            <Route exact path='/updateQuote' element={<UpdateQuote />} />

          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
