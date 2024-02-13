import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Agents from "../pages/Agents";
import Cartes from "../pages/Cartes";
import Esport from "../pages/Esport"

const router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/agents' element={<Agents/>}/>
            <Route path='/cartes' element={<Cartes/>}/>
            <Route path='/esport' element={<Esport/>}/>
        </Routes>
    );
};

export default router;