import React from 'react'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

const Pagination = ({ setSearchParams, limit, page, count}) => {

    const handlePrevPage = () => {
        if (page > 1) {
            setSearchParams({ limit, page: page - 1})
        }
    }

    const handleNextPage = () => {
        if (page < Math.ceil(count / limit)) {
            setSearchParams({ limit, page: page + 1})
        }
    }

    const changePage = (e) => {
        setSearchParams({ limit, page: e.target.name })
    }

    const renderPageBtns = () => {
        let numberOfPage = Math.ceil(count / limit)

        return Array(numberOfPage)
            .fill(1)
            .map((el, index) => {
                return (
                    <li key={index} className="pagination__item">
                        <button className={`pagination__btn ${page === el + index ? `pagination__btn--active` : ""}`   } name={el + index} onClick={changePage}>{el + index}</button>
                    </li>
                )
            })
    }

    return (
        <div className="pagination">
            <ul className="pagination__list">
                {page > 1 ? (
                    <li className="pagination__item">
                        <button className="pagination__btn pagination__btn--arrow" onClick={handlePrevPage}>
                            <MdKeyboardArrowLeft />
                        </button>
                    </li>
                ) : null}
                {count && renderPageBtns()}
                {page < Math.ceil(count / limit) ? (
                    <li className="pagination__item">
                        <button className="pagination__btn pagination__btn--arrow" onClick={handleNextPage}>
                            <MdKeyboardArrowRight />
                        </button>
                    </li>
                ) : null}
            </ul>
        </div>
    )
}
export default Pagination
