import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBarUi } from './components/index.js';
const App = () => {

  return (<>

    <Router>


      <NavBarUi />
    </Router>



  </>)


}

export default App;
