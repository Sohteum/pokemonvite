import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import Main from './components/Main'
import Login from './components/Login'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;