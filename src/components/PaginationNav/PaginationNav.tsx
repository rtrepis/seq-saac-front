import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uiPageCurrentActionCreator } from "../../app/slice/uiSlice";

interface PaginationNavProps {
  pageNav: { itemsTotal: number; pageCurrent: number };
}

const PaginationNav = ({
  pageNav: { itemsTotal, pageCurrent },
}: PaginationNavProps): JSX.Element => {
  const dispatch = useDispatch();

  const pageLast = itemsTotal / 6;

  const handlePage = (pageGoTo: number) => {
    dispatch(uiPageCurrentActionCreator(pageGoTo));
  };

  return (
    <Pagination className="justify-content-center m-4">
      {pageCurrent > 2 && <Pagination.First onClick={() => handlePage(0)} />}

      {pageCurrent > 2 && (
        <Pagination.Ellipsis onClick={() => handlePage(pageCurrent - 3)} />
      )}
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

      {pageLast > pageCurrent + 1 && (
        <Pagination.Item onClick={() => handlePage(pageCurrent + 1)}>
          {pageCurrent + 2}
        </Pagination.Item>
      )}
      {pageLast > pageCurrent + 2 && (
        <Pagination.Item onClick={() => handlePage(pageCurrent + 2)}>
          {pageCurrent + 3}
        </Pagination.Item>
      )}
      {pageLast > pageCurrent + 3 && (
        <Pagination.Ellipsis onClick={() => handlePage(pageCurrent + 3)} />
      )}

      {pageLast > 3 && (
        <Pagination.Last onClick={() => handlePage(pageLast - 1)} />
      )}
    </Pagination>
  );
};

export default PaginationNav;
