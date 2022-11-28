import { Form, InputGroup } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";

const SearchSequence = (): JSX.Element => {
  return (
    <InputGroup>
      <InputGroup.Text id="basic-addon">
        <IoSearch />
      </InputGroup.Text>
      <Form.Control
        placeholder="Cerca seqüències"
        aria-label="searchSequences"
        aria-describedby="basic-addon1"
      ></Form.Control>
    </InputGroup>
  );
};

export default SearchSequence;
