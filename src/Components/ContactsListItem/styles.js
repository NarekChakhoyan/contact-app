import styled from "styled-components";

export const ContactsListStyles = styled.div`
  border-radius: 5px;
  border: 1px solid grey;
  display: flex;
  cursor: pointer;
  &:hover{background-color: aliceblue}
`;
export const ContactsListImage = styled.img`
  height: 55px;
  width: 55px;
  padding: 5px;
`;
export const Container = styled.div`
  width: 76%;
`;
export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;
export const CloseButton = styled.button`
  border: none;
  background-color:white;
  cursor: pointer;
`;
export const ContactsEditWrapper = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
`;
export const ContactInfo = styled.h5`
  margin: 0;
  font-size: 16px;
`;
export const EditButton = styled.button`
  font-size: 15px; 
  color: white;
  border: none;
  border-radius: 3px;
  background-color: blue;
  cursor: pointer;
`;
export const EditInputs = styled.div`
  position: absolute;
  background-color: white;
  width: 275px;
  border: 3px solid darkblue;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;
export const CancelButton = styled.button`
  background-color: white;
  color: black;
  width: 80px;
  border-radius: 4px;
  margin: 5px;
  padding: 5px;
  border: 1px solid darkgray;
`;
export const SaveButton = styled.button`
  width: 80px;
  border-radius: 4px;
  color: white;
  margin: 5px;
  padding: 5px;
  background-color:green;
  border: 1px solid darkgray;
  
  ${prop => prop.disabled && 'background-color:gray; pointer-events: none;'}
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const NameInput = styled.input`
  width: 230px;
  padding: 5px;
  margin: 5px auto;
  border-radius: 4px;
`;
export const PositionInput = styled.input`
  width: 230px;
  padding: 5px;
  margin: 5px auto;
  border-radius: 4px;
`;


