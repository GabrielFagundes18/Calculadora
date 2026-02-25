import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: #2c3e50; /* Cor escura elegante */
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px; /* Separa o visor dos botões */
  border-radius: 8px;
  box-shadow: inset 0px 2px 10px rgba(0,0,0,0.3); /* Efeito de profundidade */

  input {
    width: 100%;
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    text-align: right;
    outline: none;
  }
`;