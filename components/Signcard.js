import styled from 'styled-components';
const CardContainer = styled.div`
  background-color: dodgerblue;
  z-index: 9999;
  border-radius: 12px;
  padding: 12px;
  min-height: 60%;
  min-width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Signcard = () => {
  return (
    <CardContainer className="box-shadow glass">
      <h1>Banner</h1>
    </CardContainer>
  );
};

export default Signcard;
