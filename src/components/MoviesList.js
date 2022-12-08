import React, { useEffect, useState } from "react";
import { Row} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetAllMovies } from "../redux/actions";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";

const MoviesList = ({pagnatMovies,count}) => {
  const Dispatch =useDispatch()
  const [Movie, setMovie] = useState([]);
  useEffect(()=>{
    // getAllMovies();
    Dispatch(GetAllMovies());
  },[])
  const data = useSelector((state)=> state.movies)
  useEffect(() => {
    setMovie(data)
  }, [data])
  
  return (
    <Row className="mt-3 justify-content-center text-center">
    {
      Movie.length > 0 ?(
        Movie.map((item,index) => {
          
          return(<CardMovie key={index} item={item}/>)
        })
      ):<h2>there is no data</h2>
    }
    
    {
      Movie.length > 0 ?<PaginationComponent/>:null
    }
    
    
    </Row>
  );
};

export default MoviesList;
