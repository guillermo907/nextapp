import styled from 'styled-components';

const AboutCont = styled.div`
  background-color: var(--color-three);
  min-height: 91vh;
  padding: 10px;
`;

const About = () => {
  return (
    <AboutCont>
      <h1>About page</h1>
      <h2>Sobre nosotros</h2>
    </AboutCont>
  );
};

export default About;
