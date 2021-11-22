import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation'
import ButterfliesList from './components/Butterfly/List'
import CreateButterfly from './components/Butterfly/Create'

import './app.css';

export default () => <Router>
    <header>
      <Navigation/>
    </header>
    <main>
      <Routes>
        <Route path="butterflies" element={<ButterfliesList/>}/>
        <Route path="create" element={<CreateButterfly/>}/>
      </Routes>
    </main>
</Router>
