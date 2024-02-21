import styled from "styled-components";
export const ContactInfoStyles = styled.div`
  width: 300px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid black;
`
export const ContactInfoText = styled.div`
  width: 270px;
  padding: 5px;
  font-size: 20px;
  border-radius: 5px;
  margin: 10px auto;
  text-align: center;
  border: 1px solid grey;
`
export const ContactInfoConteiner = styled.div`
  width: 280px;
  border: 1px solid grey;
  margin: 15px auto;
  border-radius: 5px
`
export const ContactInfoFirstDiv = styled.div`
  display: flex;
  height: 110px;
  border-bottom: 1px solid grey;

   p {
    margin: 16px 0 5px 10px
  } 
   h4 {
    margin: 0 5px 0 0;
  }
`
export const ContactInfoImage = styled.img`
  width: 70px;
  height: 70px;
  padding:15px 0 0 15px;
`
export const ContactInfoSecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid grey;
  & > p{
    margin:15px 0 8px 15px;
  }
  & > h5{
    margin: 0 0 20px 15px;
  }
`;


