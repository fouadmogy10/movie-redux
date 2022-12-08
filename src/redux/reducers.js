import {AllMovie} from './types';

const initState ={
    movies:[],
    MovieCount:0
}
const movieReducer = (state=initState,action)=>{
    switch (action.type) {
        case AllMovie:
            return {movies:action.data,MovieCount:action.MovieCount}
        default:
            return state
            break;
    }
}
export default movieReducer;