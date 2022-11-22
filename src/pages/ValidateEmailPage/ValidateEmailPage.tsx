import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import "./ValidateEmailPage.css";

const ValidateEmailPage = (): JSX.Element => {
  const { getConfirmationCode } = useUser();
  const { code: confirmationCode } = useParams();

  useEffect(() => {
    (async () => {
      await getConfirmationCode(confirmationCode!);
    })();
  }, [getConfirmationCode, confirmationCode]);

  return <div className="message">Validant correu electrònic...</div>;
};

export default ValidateEmailPage;
