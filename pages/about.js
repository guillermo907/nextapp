import styled from 'styled-components';
import Image from 'next/image';

const AboutCont = styled.div`
  background-color: var(--color-three);
  min-height: 91vh;
  padding: 10px;

  img {
    border-radius: 12px;
    margin: 20px;
  }
`;

const About = () => {
  return (
    <AboutCont>
      <h1>About page</h1>
      <h2>Sobre nosotros</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        exercitationem adipisci labore! Numquam incidunt deleniti repudiandae
        officiis fugiat laborum delectus id a non est dolorem reiciendis iste
        tempore soluta, cumque praesentium ullam reprehenderit quam. Id nam
        delectus ipsa eaque reprehenderit commodi. Aliquam autem porro, nulla,
        nesciunt et praesentium quisquam laboriosam, inventore atque quis
        recusandae obcaecati ea! Laboriosam, dolorem! Laudantium, libero dolorum
        hic dolore sunt, error quae, dolores velit porro iste consequuntur cum
        expedita blanditiis doloremque aliquid odit! Illum, harum quo!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolores,
        beatae rerum maxime unde nihil recusandae consequuntur culpa eum impedit
        blanditiis facilis quo ipsam, explicabo quia hic magnam nemo harum
        placeat debitis sequi. Molestiae dolorum laboriosam suscipit, molestias,
        soluta dolore harum nihil autem magnam tempore delectus. Magnam ullam
        veritatis nostrum?
      </p>
      <Image
        width="400"
        height="400"
        /* layout="responsive" */
        src="https://images.unsplash.com/photo-1527079739242-736e10a5fbb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
        alt="decorative"
        className="box-shadow"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque
        atque repellat! Ab ipsa sit odit assumenda praesentium voluptatibus eum
        debitis ex autem quod, recusandae rerum itaque, velit officiis aliquam
        earum nihil adipisci! Amet labore cupiditate ipsa delectus architecto
        velit maxime? Sequi facere officia repellat non natus consequatur, quo
        totam suscipit obcaecati nobis amet atque tempore at sit ex earum quis
        dolore molestias perferendis quod.
      </p>
    </AboutCont>
  );
};

export default About;
