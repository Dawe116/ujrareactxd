import { BrowserRouter as Router,NavLink, Routes, Route } from 'react-router-dom';  
import './App.css';
import {DartsList} from './DartsList';
import {DartsCreate} from './DartsCreate';
import {DartsSingle} from './DartsSingle';

export const App= () =>  {
  return (
    <Router>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
              <span className='nav-link'>Dartsozók</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<DartsList />} />
          <Route path='/darts-create' element={<DartsCreate />} />
          <Route path='/darts/:dartsId' element={<DartsSingle />} />
        </Routes>
      </Router>
  );
}


