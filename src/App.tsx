import React from 'react';
import "./styles/globals.css";
import Form from "./components/Form";
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} ></Route>
      </Routes>
    </BrowserRouter>

  )


}


export default App;
