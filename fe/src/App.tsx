import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

import './app.css';
import './theme/styles.css';
import theme from './theme';
import ButterfliesList from './components/Butterfly/List';
import CreateButterfly from './components/Butterfly/Create';
import Wishlist from './components/Butterfly/Wishlist';

export default () => <ChakraProvider theme={theme}>
  <Router>
    <header>
      <Navigation/>
    </header>

    <Container maxW="container.xl"
               px={[5, 10, 20]}
               py={[10, 20, 30]}
               h={{
                 base: 'auto',
                 md: '100vh',
               }}>
      <Routes>
        <Route path="butterflies" element={<ButterfliesList/>}/>
        <Route path="create" element={<CreateButterfly/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
      </Routes>
    </Container>
  </Router>
</ChakraProvider>;
