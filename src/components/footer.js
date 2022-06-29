import React from "react";
import styled from "styled-components";
import insta from "../images/dark.Instagram.png";
import twitter from "../images/dark.Twitter.png";
import face from "../images/dark.Facebook.png";
import pinte from "../images/dark.Pinterest.png";

const Logo = styled.img`
  width: 3rem;
`;

const Contatos = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-around;
  margin-left: 4rem;
`;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
        <Contatos>
          <Logo src={insta} alt="" />
          <Logo src={twitter} alt="" />
          <Logo src={face} alt="" />
          <Logo src={pinte} alt="" />
        </Contatos>

        <container>
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
        </container>
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
