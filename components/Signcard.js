import styled from 'styled-components';
const CardContainer = styled.div`
  background-color: dodgerblue;
  z-index: 9999;
  border-radius: 12px;
  padding: 12px;
  min-height: 70%;
  min-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    width: 80%;
    min-height: 50%;
    margin: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    min-height: 50%;
    margin: 20px;
  }

  button {
    border-radius: 12px;
    padding: 10px 22px;
    margin: 12px;
    background-color: var(--color-one);
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const Signcard = () => {
  return (
    <CardContainer className="box-shadow glass">
      <h1>Crea tu cuenta</h1>
      <button className="box-shadow">Suscribirse</button>
    </CardContainer>
  );
};

export default Signcard;
