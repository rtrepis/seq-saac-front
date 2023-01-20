import { SyntheticEvent, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useApi from "../../hooks/useApi";

const SearchSequence = (): JSX.Element => {
  const { getSearchSequences, getAllPublicSequence } = useApi();
  const gotoPage = useSelector(
    (state: RootState) => state.ui.nav.allSequencesPage
  );

  const initialSearchSequencesWord = {
    searchWord: "",
  };
  const [searchSequencesWord, setSearchSequencesWord] = useState(
    initialSearchSequencesWord
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSequencesWord({
      ...searchSequencesWord,
      [event.target.id]: event.target.value,
    });
  };

  const handelSubmitSearch = async (event: SyntheticEvent) => {
    event.preventDefault();
    const { searchWord } = searchSequencesWord;
    if (searchWord.length > 0) {
      await getSearchSequences(searchWord);
    } else {
      await getAllPublicSequence(2, gotoPage);
    }
  };

  return (
    <Form onSubmit={handelSubmitSearch}>
      <InputGroup>
        <InputGroup.Text id="basic-addon">
          <IoSearch />
        </InputGroup.Text>
        <Form.Control
          id="searchWord"
          placeholder="Cerca seqüències"
          aria-label="searchSequences"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        ></Form.Control>
      </InputGroup>
    </Form>
  );
};

export default SearchSequence;
