import React, { useState, useEffect } from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getPage } from '../redux/actions';


const PaginationComponent = () => {


    const [pageCount, setpageCount] = useState(2)

    const dispatch = useDispatch();
    const pages = useSelector((state) => state.MovieCount);
    
    useEffect(() => {
        setpageCount(pages)
    }, [])


    const handlePageClick = (data) => {
        dispatch(getPage(data.selected + 1))
    }




    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3 w-50"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default PaginationComponent