import React from "react";
import styled from "styled-components";
import insta from "../images/dark.Instagram.png";
import twitter from "../images/dark.Twitter.png";
import face from "../images/dark.Facebook.png";
import pinte from "../images/dark.Pinterest.png";


const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    height: 20rem;
    /* border: 1px solid; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: 4.3rem;

    background-color: #F2F4F1;

  }
`;

const Logo = styled.img`
  width: 3rem;
`;

const Contatos = styled.div`
  width: 20rem;
  display: flex;
  gap: 0.7rem;
`;


const Faixa = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #446061;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <section>

        <Contatos>

          <a href="https://www.instagram.com/" alt="instagram logo" target="_blanck"><Logo src={insta} alt="instagram logo" /></a>
          <a href="https://twitter.com/?lang=pt-br" alt="Twitter logo" target="_blanck"><Logo src={twitter} alt="Twitter logo" /></a>
          <a href="https://www.facebook.com/" alt="Facebook logo" target="_blanck"><Logo src={face} alt="Facebook logo" /></a>
          <a href="https://br.pinterest.com/" alt="Pinterest logo" target="_blanck"><Logo src={pinte} alt="Pinterest logo" /></a>
          
        </Contatos>



          <nav>
            <ul>
              <a href="#">
                <li>about</li>
              </a>
              <a href="#">
                <li>recipes</li>
              </a>
              <a href="#">
                <li>subscribe</li>
              </a>
            </ul>
          </nav>
        </section>
        <Faixa>
          <p>
            Layout produzido por Vai na Web para fins exclusivamente educacionais.
            Referência:
            https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
          </p>
        </Faixa>
      </FooterContainer>
    </>
  );
}
