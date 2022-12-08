import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MovieDetails from "./components/MovieDetails";
function App() {

  return (
    <div className="font color-body " dir="rtl">
      <NavBar/>
      <Container>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<MoviesList/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        </Routes>
        </BrowserRouter>
        </Container>
    </div>
  );
}

export default App;
