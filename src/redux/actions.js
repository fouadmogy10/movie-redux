import axios from "axios";
import {AllMovie, Url} from "./types";



export const GetAllMovies =()=>{
    return async(dispatch)=>{
        const res =await axios.get(Url)
        
        dispatch({ type:AllMovie , data : res.data.results , MovieCount : res.data.total_pages })
    }
}
export const SearchMovies =(word)=>{
    return async(dispatch)=>{
        const res =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ef42d2967f56cb956faa5ecab9afa93b&language=en-US&&query=${word}`)
        
        dispatch({ type:AllMovie , data : res.data.results , MovieCount : res.data.total_pages })
    }
}
export const getPage = (page) => {
    return async (dispatch) => {
        const res =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ef42d2967f56cb956faa5ecab9afa93b&page=${page}&language=en-US`)
        console.log(res);
        dispatch({ type:AllMovie , data : res.data.results , MovieCount : res.data.total_pages })
        
    }
}
