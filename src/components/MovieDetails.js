import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const MovieDetails = () => {
    const param = useParams()
    console.log(param);
    const [Movie, setMovie] = useState([])
    const getDetails = async() => {
        
        await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=ef42d2967f56cb956faa5ecab9afa93b&language=ar-AR        `).then(res => {
            const moviesData = res.data;
            setMovie(moviesData);
            console.log(res.data);
            console.log(Movie.homepage);
        })
    }
    useEffect(() => {
        getDetails();
        
    }, [])
    
    return (
        <div>
            <Row className="justify-content-around align-items-center">
                <Col md="4"  sm="5" className="mt-4 ">
                    <div className="card-detalis  d-flex  ">
                        <img
                            className="img-movie w-100"
                            src={"https://image.tmdb.org/t/p/w500/"+ Movie.poster_path}
                            alt="ascad"
                        />
                       
                    </div>
                </Col>
                <Col md="8"  sm="7"> 
                <div className=" mx-2">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم:{Movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم :{Movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين :{Movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم :{Movie.vote_average}
                            </p>
                        </div>
                </Col>
            </Row>

            <Row className="justify-content-center my-2">
                <Col md="12"  sm="12" className="">
                    <div className="card-story   d-flex  align-items-center">
                        <div className=" p-4 ">
                            <p className=" fs-5 fw-bolder">القصة:{Movie.overview}</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story"></p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <a href ={`${Movie.homepage}`} >
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary">
                            مشاهده الفيلم
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails
