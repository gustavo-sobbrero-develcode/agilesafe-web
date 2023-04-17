import styled from 'styled-components';

export const Container = styled.div`
  background-color: #171923;
  position: fixed;
  z-index: 1;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 350px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 300px;
    }
    to {
      opacity: 1;
      width: 350px;
    }
  }
`;

export const ProfilePhotoDiv = styled.div`
  border-radius: 150px;
  height: 150px;
  width: 150px;
  background-color: #fff;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  width: 100%;
  align-items: center;
`;

export const Footer = styled.div`
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
`