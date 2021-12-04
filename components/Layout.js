import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
:root{
    --color-one: dodgerblue; //blue
    --color-two: #1e81b0; //dark blue
    --color-three: #09ac74; //green
    --color-four: #2E4053; //dark
}

  body {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin: 0;
  //background-color: var(--color-one);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  }
  a{
      text-decoration: none;
      color: inherit;
  }
  h1{
      margin: 0;
  }

  #__next{
    width: 100%;
    height: 100%;
  }

  .glass {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.33);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }
  .box-shadow {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }

`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
