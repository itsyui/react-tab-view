import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Main } from "./Main";

const App: React.FC = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
