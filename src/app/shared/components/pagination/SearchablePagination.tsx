import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Button, Col, Input, Row } from 'reactstrap';

type SearchablePaginationProps = {
  perPageData: number;
  length: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isShowingPageLength: boolean;
  paginationDiv: string;
  paginationClass: string;
  showPageNumbers?: boolean;
  showInputText?: boolean;
};

const SearchablePagination = ({
  perPageData,
  length,
  currentPage,
  setCurrentPage,
  isShowingPageLength,
  paginationDiv,
  paginationClass,
  showPageNumbers = true,
  showInputText = false,
}: SearchablePaginationProps) => {
  const handleClick = (item: number) => {
    setCurrentPage(item);
  };
  const [goToPage, setGoToPage] = useState({
    value: null as number | null,
    error: false,
  });

  const [disable, setDisable] = useState(false);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(length / perPageData); i++) {
    pageNumbers.push(i);
  }
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 2);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage);
  };

  const handleGoToPageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.target.value === '') {
      setGoToPage({ value: null, error: false });
    } else if (parseInt(event.target.value) > Math.ceil(length / perPageData)) {
      setGoToPage({
        value: parseInt(event.target.value),
        error: true,
      });
    } else {
      setGoToPage({
        value: parseInt(event.target.value),
        error: false,
      });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisable(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentPage, disable]);

  return (
    <React.Fragment>
      <Row className="justify-content-between align-items-center">
        {isShowingPageLength && (
          <Col sm={12} md={5}>
            <div className="text-muted dataTables_info">
              Showing {perPageData} of {length} entries
            </div>
          </Col>
        )}

        <div className={paginationDiv}>
          <ul className={paginationClass}>
            <li
              className={`page-item mx-1 ${currentPage <= 1 ? 'disabled' : ''}`}
            >
              <Button
                className="page-link pointer"
                disabled={disable}
                color="success"
                onClick={() => {
                  setDisable(true);
                  handlePrevPage();
                }}
              >
                <i id="prev" className="mdi mdi-chevron-left"></i>
                {/* <UncontrolledTooltip target="prev" placement="top">
                  Página anterior
                </UncontrolledTooltip> */}
              </Button>
            </li>

            {showPageNumbers &&
              (pageNumbers || []).map((item, index) => (
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

            {showInputText && (
              <li className="page-item">
                {/* <UncontrolledTooltip target="go-to-page" placement="top">
                  <p>Ir a página</p>
                  <span>
                    Puedes ir a una página específica escribiendo el número de
                    página y presionando enter
                  </span>
                </UncontrolledTooltip> */}
                <Input
                  type="text"
                  className="form-control"
                  id="go-to-page"
                  min={1}
                  max={Math.ceil(length / perPageData)}
                  step={1}
                  value={goToPage.value || ''}
                  onChange={handleGoToPageChange}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const value = +e.currentTarget.value;
                      const valid =
                        value > 0 && value <= Math.ceil(length / perPageData);
                      if (valid) {
                        setCurrentPage(parseInt(e.currentTarget.value) - 1);
                      }
                    }
                  }}
                  invalid={goToPage.error}
                  style={{ width: '120px' }}
                />
              </li>
            )}

            <li
              className={`page-item mx-1 ${
                currentPage > length / perPageData ? 'disabled' : ''
              }`}
            >
              <Button
                className="page-link pointer"
                disabled={disable}
                color="success"
                onClick={() => {
                  setDisable(true);
                  handleNextPage();
                }}
              >
                <i id="next" className="mdi mdi-chevron-right"></i>
                {/* <UncontrolledTooltip target="next" placement="top">
                  Página siguiente
                </UncontrolledTooltip> */}
              </Button>
            </li>
          </ul>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default SearchablePagination;
