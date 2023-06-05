import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  width: 80%;
  align-items: center;
  background-color: #008080; 
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  &:hover {
    opacity: 0.9;
  }
`;