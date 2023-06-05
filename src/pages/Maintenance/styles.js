import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 840px;
  gap: 20px;
  background-color: #F2F5F6;
`;

export const Title = styled.h2``;

export const TopContent = styled.div`
  width: 75%;
  height: 40%;
`;

export const ServiceTypeContainer = styled.div`
  width: 95%;
  display: flex;
  height: 60%;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
  align-self: center;
  gap: 15px
`;

export const BottomContent = styled.div`
  width: 75%;
  height: 40%;
  background-color: #F2F5F6;
`;
