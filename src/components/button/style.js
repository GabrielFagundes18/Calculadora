import styled from "styled-components";

export const ButtonContainer = styled.button`
padding: 20px;
  background-color: #3498db;
  border: none;
  border-radius: 8px; 
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: #2980b9; 
    transform: scale(1.02);    
  }

  &:active {
    transform: scale(0.95);    
  }
`;
