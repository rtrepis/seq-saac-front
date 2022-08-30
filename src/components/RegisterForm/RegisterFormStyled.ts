import styled from "styled-components";

const RegisterFormStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .register-form  {
    max-width: 335px;
    padding: 15px;
    border: 2px green solid;
    border-radius: 15px;

    &__input {
      background-color: #e9e9e9;
    }

    &__button {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      background-color: green;
      width: 160px;
      height: 55px;
    }

    &__footer {
      margin-top: 50px;
      text-align: center;
    }
  }
`;

export default RegisterFormStyled;
