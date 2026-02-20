import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  color: #333;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  h1{
    margin-bottom: 20px;
    

  }
`;
export const Content = styled.div`
  background-color: #fff;
  width: 50%;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
