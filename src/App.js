import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./views/login";
import Register from "./views/register";
import AxiosView from './views/axiosView';
function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/AxiosView' element={<AxiosView/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
