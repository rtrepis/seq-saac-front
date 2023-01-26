import Spinner from "react-bootstrap/Spinner";
import LoadingStyled from "./LoadingStyled";

function Loading() {
  return (
    <LoadingStyled>
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </LoadingStyled>
  );
}

export default Loading;
