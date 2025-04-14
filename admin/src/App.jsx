import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {Routes, Route} from "react-router-dom";
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const url="https://deli-go-backend.onrender.com";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <div className="app-components">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}></Route>
          <Route path='/list' element={<List url={url} />}></Route>
          <Route path='/orders' element={<Orders url={url}/>}></Route>
        </Routes>
      </div>
    </div>
  )

}

export default App;
