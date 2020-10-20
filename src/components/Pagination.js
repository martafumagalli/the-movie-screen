import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

function Paginate(props) {
  const { currentPage, btnClick, totalPages } = props;
  return (
    <Pagination size="5" aria-label="Page ">
      <PaginationItem disabled={currentPage <= 0}>
        <PaginationLink first value="1" onClick={btnClick} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous value={currentPage - 1} onClick={btnClick} />
      </PaginationItem>
      {
      [...Array(totalPages)].map((page, i) => (
        <PaginationItem active={i === currentPage} key={page}>
          <PaginationLink value={page} onClick={btnClick}>
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      {/* <PaginationItem >
        <PaginationLink value='1' onClick={btnClick} >
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink value='2' onClick={btnClick} >
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink value='3' onClick={btnClick} >
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink value='4' onClick={btnClick} >
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink value='5' onClick={btnClick} >
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink value='6' onClick={btnClick} >
          6
        </PaginationLink>
      </PaginationItem> */}
      <PaginationItem disabled={currentPage >= totalPages - 1}>
        <PaginationLink next value={currentPage + 1} onClick={btnClick} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink value={totalPages} onClick={btnClick} />
        {totalPages}
      </PaginationItem>
    </Pagination>
  );
}

export default Paginate;

Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  btnClick: PropTypes.func.isRequired,
  totalPages: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};
