import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import logo from '../images/logo.png'
import { GetAllMovies, SearchMovies } from "../redux/actions";
const NavBar = () => {
  const dispatch =useDispatch();
  const search = async (word) => {
    if (word === "") {
      dispatch(GetAllMovies());
    } else {
      dispatch(SearchMovies(word));
      // setMovie(res.data.results)
    }
    
  }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-75 mx-auto">
              <i className="fa fa-search"></i>
              <input type="text" onChange={(e)=>{dispatch(SearchMovies(e.target.value))}} className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
