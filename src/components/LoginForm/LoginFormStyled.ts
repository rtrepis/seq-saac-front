import styled from "styled-components";

const LoginFormStyled = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .register-form  {
    max-width: 335px;
    padding: 15px;
    border: 2px #1b7d20 solid;
    border-radius: 15px;

    &__button {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      width: 160px;
      height: 55px;
    }

    &__footer {
      margin-top: 50px;
      text-align: center;
    }
  }
`;

export default LoginFormStyled;
