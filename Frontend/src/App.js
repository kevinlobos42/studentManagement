import './css/app.less'
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import { useState } from 'react'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  let loggedin = false;
  useState(() => {
    if (!loggedin && window.location.pathname === '/') {
      window.location = '/login'
    }
  }, [])

  return (
    <div className="App">
      {
        loggedin === true ?
          <Sidebar /> :
          ''
      }
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
