import ReactPaginate from "react-paginate";

import "./index.css";

const Pagination = (props) => {
  const { totalPages, handelPageClick } = props;

  const handlePageChange = (data) => {
    handelPageClick(data.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={"< Prev"}
      nextLabel={"Next >"}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={"pagination"}
      activeClassName={"active"}
      pageClassName={"page-number"}
      previousClassName={"label"}
      nextClassName={"label"}
      breakClassName={"page-number"}
    />
  );
};

export default Pagination;
