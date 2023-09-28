import styled from 'styled-components';

export const OverlayPublication = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const NewPostContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const NewPostHeader = styled.div`
  text-align: center;
`;

const NewPostContent = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const NewPostFooter = styled.div`
  text-align: center;
`;


