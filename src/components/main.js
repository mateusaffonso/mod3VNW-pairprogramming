import React from "react";
import styled from "styled-components";
import velvet from "../images/cake.png";
import Pizza from "../images/pizza.png";
import smothie from "../images/capuccino.png";
import colher from "../images/pexels-karolina-grabowska-4199094@2x.png";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const Imag = styled.img`
  width: 20rem;
  display: flex;
  align-items:center;
`;
const Figure = styled.div`
  width: 25%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const PartAbout = styled.div`
  width: 100%;
  display: flex;
  background-color: #ffffff;
  border: 2px solid;
`;
const Colher = styled.div`
  width: 50%;
  border: 1px solid;
`;
const ImgAbout = styled.img`
  width: 100%;
`;
const TitleSob = styled.h2`
  font-size: 4rem;
  font: normal normal 600 40px/50px Hurme Geometric Sans 1;
  letter-spacing: 1.72px;
  color: #373737;
`;
const Text = styled.p`
  width: 48rem;
  height: 25em;
  font-size: 2rem;
  font: normal normal normal 20px/32px Hurme Geometric Sans 1;
  color: #373737;
`;
const Sobre = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const Cadastro = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;
const Submit = styled.button`
  width: 7rem;
`;
const Email = styled.input`
  width: 8rem;
`;
export default function main() {
  return (
    <>
      <GlobalStyled />
      <main>
        <h2>lastest recipes</h2>
        <hr />
        <Container>
          <section>
            <Figure>
              <Imag src={velvet} alt="" />
            </Figure>
            <p>Red Velvet Cake</p>
          </section>

          <section>
            <Figure>
              <Imag src={Pizza} alt="" />
            </Figure>
            <p>Margherita Pizza</p>
          </section>

          <section>
            <Figure>
              <Imag src={smothie} alt="" />
            </Figure>
            <p>Peanut Smoothie</p>
          </section>
        </Container>

        <PartAbout>
          <Colher>
            <ImgAbout src={colher} alt="" />
          </Colher>
          <Sobre>
            <TitleSob>ABOUT</TitleSob>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
              tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
              dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur
              lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec
              mollis sagittis, enim risus euismod nisi, quis rutrum quam augue
              id mauris. Pellentesque mattis hendrerit semper. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien
              facilisis aliquam.
            </Text>
          </Sobre>
        </PartAbout>

        <Cadastro>
          <h2>SUBSCRIBE</h2>
          <p>Sign up for newsletter</p>
          <Email type="email" placeholder="Your Email" />
          <Submit>SUBMIT</Submit>
        </Cadastro>
      </main>
    </>
  );
}
