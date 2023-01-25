import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Cta from "../../components/Cta/Cta";
import Navigation from "../../components/Navigation/Navigation";
import PaginationNav from "../../components/PaginationNav/PaginationNav";
import SearchSequence from "../../components/SearchSequence/SearchSequence";
import SequencesCardList from "../../components/SequencesCardList/SequencesCardList";
import useApi from "../../hooks/useApi";

const HomePage = (): JSX.Element => {
  const { getAllPublicSequence } = useApi();
  const sequencePublic = useSelector((state: RootState) => state.sequences);
  const uiNavHomePage = useSelector((state: RootState) => state.ui.nav);

  useEffect(() => {
    getAllPublicSequence(6, uiNavHomePage.allSequencesPublic.pageCurrent);
  }, [getAllPublicSequence, uiNavHomePage.allSequencesPublic.pageCurrent]);

  return (
    <>
      <Navigation page="SEQ-SAAC" linkPage="home" />
      <Cta />
      <Row className="justify-content-center m-3">
        <Col xs="12" sm="10" md="8" lg="6" xl="4">
          <SearchSequence />
        </Col>
      </Row>
      <SequencesCardList sequences={sequencePublic} />
      {uiNavHomePage.allSequencesPublic.itemsTotal > 6 &&
        uiNavHomePage.show && (
          <PaginationNav pageNav={uiNavHomePage.allSequencesPublic} />
        )}
    </>
  );
};
export default HomePage;
