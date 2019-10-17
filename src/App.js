import React from 'react';
import logo from './logo.svg';
import CardComponent from './app/card'
import './App.css';
import { Route,Router } from "react-router";
import Chat from './app/chat'

function App() {
  return (
      <div className="App">
          {
            //<CardComponent />
          }
          <Chat/>

      </div>
  );
}

export default App;
