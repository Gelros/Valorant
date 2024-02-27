import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Agents from "../pages/Agents";
import Cartes from "../pages/Cartes";
import Armes from "../pages/Armes"
import Property from '../pages/Property';

const router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/agents' element={<Agents/>}/>
            <Route path='/cartes' element={<Cartes/>}/>
            <Route path='/armes' element={<Armes/>}/>
            <Route path='/agents/*' element={<Property/>}/>
        </Routes>
    );
};

export default router;