import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const Hats = () => {
  return (
    <div>
    <h1>Hats</h1>
  </div>
  );
};

const Balenciaga = (props) => {
  return (
    <div>
      <h1>x1's</h1> 
      <button onClick={() => props.history.push('/hats')}>Hats</button>
      <Link to={`${props.match.url}/15`}>Versace</Link>
      <Link to={`${props.match.url}/16`}>Chanel</Link>
    </div>
  )
}

const App = (props) => {
  console.log(props);
  return (
    <div>
      <Route path='/' component={HomePage} />
      <Route path='/hats' component={Hats} />
      <Route path='/hats/:hatId' component={Balenciaga} />
    </div>
  );
}

export default App;
