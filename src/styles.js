import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #2d3436;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;

  h1 {
    margin-bottom: 24px;
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: -1px;
    color: #1e293b;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

export const Content = styled.div`
  background-color: #fff;
  width: 90%;
  max-width: 400px;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
