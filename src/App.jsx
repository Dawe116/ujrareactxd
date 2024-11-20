import { BrowserRouter as Router,NavLink, Routes, Route } from 'react-router-dom';  
import './App.css';
import {ChessList} from './ChessList';
import {ChessCreate} from './ChessCreate';
import {ChessSingle} from './ChessSingle';

export const App= () =>  {
  return (
    <Router>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
              <span className='nav-link'>Sakkozók</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<ChessList />} />
          <Route path='/chess-create' element={<ChessCreate />} />
          <Route path='/chess/:chessId' element={<ChessSingle />} />
        </Routes>
      </Router>
  );
}


