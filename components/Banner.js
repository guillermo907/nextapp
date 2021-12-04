import styled from 'styled-components';
import Link from 'next/link';

const BannerCont = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80vh;
  background-image: url('https://images.unsplash.com/photo-1527079739242-736e10a5fbb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80');
  background-color: ${(props) => props.bgColor};
  background-blend-mode: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  padding: 20px 20px;

  .banner-card {
    background-color: var(--color-one);
    width: 80%;
    height: 80%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Banner = (props) => {
  return (
    <BannerCont bgColor={props.bgColor} color={props.color}>
      <div className="banner-card box-shadow">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <Link href="/about">Go</Link>
      </div>
    </BannerCont>
  );
};

export default Banner;
