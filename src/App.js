import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBarUi } from './components/index.js';
import Catalouge from './pages/Catalog';
const App = () => {

  return (<>

    <Router>


      <NavBarUi />

      <Routes>


        <Route path="/courses/catalogue" element={<Catalouge />} />

      </Routes>


    </Router>



  </>)


}

export default App;
