import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uiPageCurrentActionCreator } from "../../app/slice/uiSlice";

interface PaginationNavProps {
  pageCurrent: number;
}

const PaginationNav = ({ pageCurrent }: PaginationNavProps): JSX.Element => {
  const dispatch = useDispatch();

  const handlePage = (pageGoTo: number) => {
    dispatch(
      uiPageCurrentActionCreator({ show: true, allSequencesPage: pageGoTo })
    );
  };

  return (
    <Pagination className="justify-content-center m-4">
      {pageCurrent < 3 ? <Pagination.First disabled /> : <Pagination.First />}

      {pageCurrent > 2 && <Pagination.Ellipsis />}
      {pageCurrent > 1 && (
        <Pagination.Item onClick={() => handlePage(pageCurrent - 2)}>
          {pageCurrent - 1}
        </Pagination.Item>
      )}
      {pageCurrent > 0 && (
        <Pagination.Item onClick={() => handlePage(pageCurrent - 1)}>
          {pageCurrent}
        </Pagination.Item>
      )}

      <Pagination.Item active>{pageCurrent + 1}</Pagination.Item>

      <Pagination.Item onClick={() => handlePage(pageCurrent + 1)}>
        {pageCurrent + 2}
      </Pagination.Item>
      <Pagination.Item onClick={() => handlePage(pageCurrent + 2)}>
        {pageCurrent + 3}
      </Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Last />
    </Pagination>
  );
};

export default PaginationNav;
