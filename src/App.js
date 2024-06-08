import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBarUi } from './components/index.js';
import Catalouge from './pages/Catalog';
import HomeUi from './pages/Home';
const App = () => {

  return (<>

    <Router>


      <NavBarUi />

      <Routes>

        <Route path='/potato' element={<HomeUi />} />
        <Route exact path="/courses/catalogue" element={<Catalouge />} />

      </Routes>


    </Router>



  </>)


}

export default App;
