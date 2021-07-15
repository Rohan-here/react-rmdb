import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle'; //Styles 
import Header from './components/Header'; //components
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
const App = () => (
  <Router>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>

    <GlobalStyle />
  </Router>
);

export default App;
