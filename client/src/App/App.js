import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import './App.css';
import logo from '../Images/logo-rapid.png';
import footerP from '../Images/rapidpass-footer1.jpg';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Footer from '../Footer/Footer';
import useToken from './useToken.js';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Breadcrumb, Button, Container, Row, Col} from 'react-bootstrap'

function App() {
  //const token = getToken();
  //const location = useLocation();
  const { token, setToken } = useToken();
  //const isLoggedIn = location.pathname.includes('dashboard');
  //if (!token) {
  //  return <Login setToken={setToken} />
  //}
  return (
    
    <div className="page-container">
      <div className="content-wrap">
      <header > 
      <img src={logo} />
      <Breadcrumb>
          <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
          <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
          <Breadcrumb.Item href="/about"> About </Breadcrumb.Item>
          <Breadcrumb.Item href="/"> Contact Us </Breadcrumb.Item>
      </Breadcrumb>
      </header>
    
      <body  class="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/about">
            <Preferences/>
          </Route>
          <Route path="/">
            <p> Welcome, please visit login or register to our service!</p>
            <Container> 
              <Row> 
              <Col><Button variant="outline-primary" href="/dashboard"> Login </Button> </Col> 
              <Col> <Button variant="outline-secondary"> Register </Button> </Col> 
            </Row></Container>
            
          </Route>
        </Switch>
      </BrowserRouter>
      </body>
      </div>
    
      <Footer/>
  
      
    </div>
  );
}


export default App;

/*plain old js function
footer {
    left: 0;
    right: 0;
    bottom: 0;
    position: relative ;
    text-align: center;
    display: inline-block;
}
<div width="max-width">
      <Footer class="navbar bottom"/>
      </div>
<footer  class="navbar fixed-bottom">
        Cool Footer
        <img src={footerP} />
      </footer>
 <ul>
              <li><Link to="/dashboard"> Dashboard </Link> </li>
            </ul>
  <Container>
            <Row>
              <Col>
              <img src={logo} />  
              </Col>
              <Col>
              <Breadcrumb>
              <Breadcrumb.Item> Home </Breadcrumb.Item>
              <Breadcrumb.Item> Dashboard </Breadcrumb.Item>
              <Breadcrumb.Item> About </Breadcrumb.Item>
              <Breadcrumb.Item> Contact Us </Breadcrumb.Item>
            </Breadcrumb>
              </Col>
            </Row>
        </Container>
<button onClick= {() => reset()} >
              Log out
            </button>

            function reset() {
  //setToken(null);
  return <BrowserRouter>
    <Switch>
      <Redirect to="/" /> 
    </Switch> 
  </BrowserRouter> 
      
}
function dashboardClk() {
  return <div>
    
    </div>
}
<Redirect to="/dashboard" />
    <Dashboard/>
    
//children nodes created in between tags
function App() {
  return <div>
    <Folder name="Desktop">
      <File name="dogs.jpeg"/>
      <File name="cats.png"/>
    </Folder>
    
    <Folder name="Applications"/>

    
  </div>
}
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
// to render the func below, treat it like html tag

// arrow function
//props - acts like a regular function argument
// give data to react component
//curly braces - evaluates as js object 
const Folder = (props) => {
  //const name = "jasleen's folder"; //<h3>{name}</h3>
  const borderStyle = {border: '2px solid pink'}
  return <div style={borderStyle}>
    <h3>{props.name}</h3>
      <div style={{marginLeft: '17px'}}>
        <h4>{props.children}</h4>
      </div>
    </div>
}

const File = (props) => {
  return <div>{props.name}</div>
}
*/

 