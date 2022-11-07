import React from 'react';
import "./Pagination.css";

type PaginationProps = {
    totalArticles: number;
    articlesPerPage: number;
    setCurrentPage: any;
    currentPage: number;
}

function Pagination(props: PaginationProps) {

    let pages = [];
    for (let i = 1; i <= Math.ceil(props.totalArticles / props.articlesPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className="pagination-container">
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => props.setCurrentPage(page)} className=
                        {page == props.currentPage ? 'active' : ''}>{page}</button>
                })
            }
        </div>
    )

}

export default Pagination;