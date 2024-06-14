import React from 'react';
import './App.scss'
import Home from './Home/Home';
import {Routes,Route} from 'react-router-dom'

import Layout from './Layout/Layout';

const App = () => {

    return (
        <>
          <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
        </Route>
        </Routes>  
        </>          
    );
};

export default App;