import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello</h1>
      <HashRouter>
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;
