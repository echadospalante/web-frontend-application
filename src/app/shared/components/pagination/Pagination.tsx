import { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';

type PaginationProps = {
  perPageData: number;
  length: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  paginationDiv: string;
  paginationClass: string;
};

const Pagination = ({
  perPageData,
  length,
  currentPage,
  setCurrentPage,
  paginationDiv,
  paginationClass,
}: PaginationProps) => {
  const handleClick = (item: number) => {
    setCurrentPage(item);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(length / perPageData); i++) {
    pageNumbers.push(i);
  }
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 2);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage);
  };

  return (
    <Fragment>
      <Row className="justify-content-between align-items-center">
        <div className={paginationDiv}>
          <ul className={paginationClass}>
            <li className={`page-item ${currentPage <= 1 ? 'disabled' : ''}`}>
              <Link
                className="page-link"
                to="#"
                onClick={() => handlePrevPage()}
              >
                <i className="mdi mdi-chevron-left"></i>
              </Link>
            </li>
            {(pageNumbers || []).map((item, index) => (
              <li
                className={
                  currentPage === item ? 'page-item active ' : 'page-item'
                }
                key={index}
              >
                <Link
                  className="page-link"
                  to="#"
                  id={item + ''}
                  onClick={() => handleClick(item - 1)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage > length / perPageData ? 'disabled' : ''
              }`}
            >
              <Link
                className="page-link"
                to="#"
                onClick={() => handleNextPage()}
              >
                <i className="mdi mdi-chevron-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </Row>
    </Fragment>
  );
};

export default Pagination;
