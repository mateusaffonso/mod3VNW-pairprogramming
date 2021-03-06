import React, { useState } from "react";
import styled from "styled-components";
import velvet from "../images/SmallCake.png";
import Pizza from "../images/pizza.png";
import smothie from "../images/capuccino.png";
import colher from "../images/pexels-karolina-grabowska-4199094@2x.png";




const MainContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;

font-size: 62.5%;

background-color: #F2F4F1;


  .headlineFoodSection{
      /* border: 1px solid;  */
      display: flex;
      flex-direction: column;
      align-items: center;
      gap:2rem; 

  }

  hr {
      width: 5rem;
      color: var(--color-text);
      color: black;
      border: 0.1rem solid;
      border-radius: 25% ;
  }

  .subscribeSection {
    background-color: #DFE4DE;

  }

`

const LastestRecipesContainer = styled.div`
/* border: 1px solid; */
width: 93%;
height: 100%;
margin-block:12rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;


margin-bottom: 25rem;


h2 {
  text-align: center;
  color: var(--color-text);
  font-size: 4rem;
}

div {
  margin-bottom: 6.5rem;
}

`

const Container = styled.div`
  /* border: 1px solid; */
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;

  
  section {
    /* border: 5px solid red; */
    width:31rem;
    height: 44rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background-color: #FFFFFF;
    

    figure{
      /* border: solid 1px; */
      width: 100%;

      img {
        width: 100%;
        height: 100%;
        /* display: flex;
        align-items: center; */
      }

    }

    .headlineFoodSection {
      margin-top: 3.5rem;
    }
    
    hr {
      width: 2.5rem ;
    }

    h3 {
      font-size: 2rem;
      font-weight: 400;
    }
    
  }
  
  
  `;



const PartAbout = styled.div`
  width: 100%;
  height: 60rem;
  display: flex;
  background-color: #ffffff;
  /* border: 2px solid; */
  color: var(--color-text);
`;

const SpoonImg = styled.div`
  width: 50%;
  height: 100%;
  /* border: 1px solid; */
`;
const ImgAbout = styled.img`
  width: 100%;
  height: 100%;
`;
const TitleSob = styled.h2`
  font-size: 4rem;
`;
const Text = styled.p`
  /* border: 2px solid; */
  width: 48.4rem;
  font-size: 2rem;
  text-align: left;
`;
const Sobre = styled.div`
  /* border: 3px solid red; */
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

`;


const Cadastro = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;

  color: var(--color-text);

  h2 {
    font-size: 4rem;
    letter-spacing: 2px;
    
  }

  p {
    font-size: 3rem;
  }
  
`;
const Submit = styled.button`
  width: 16rem;
  border: 6px solid;
  font-size: 2.4rem;
  padding: 1rem;
  color: var(--color-text);

  letter-spacing: 2px;

  
`;
const Email = styled.input`
  width: 40rem;
  height: 6rem;
  padding: 2rem;

  background-color: #EFF1EE;
  border: none;
  
`;
export default function Main() {

  const [foodItem, setFoodItem] = useState([
    {foodName:'Red Velvet Cake', image:velvet},
    {foodName:'Margherita Pizza', image:Pizza},
    {foodName:'Peanut Smoothie', image:smothie}])


  return (
    <>
      <MainContainer>
        <LastestRecipesContainer>
          <div className="headlineFoodSection">

            <h2>lastest recipes</h2>
            <hr className="titleLine"/>

          </div>
          <Container>
            {foodItem.map((item) => (
              <section>
                  <figure>
                      <img src={item.image} alt={`Imagem de um ${item.foodName}`}/>
                  </figure>
                  <div className="headlineFoodSection">
                    <hr/>
                    <h3>{item.foodName}</h3>
                  </div>
              </section>
            ))}
  
          </Container>

        </LastestRecipesContainer>

        <PartAbout>
          <SpoonImg>
            <ImgAbout src={colher} alt="imagem de uma colher contendo sal grosso " />
          </SpoonImg>
          <Sobre>
            <div className="headlineFoodSection">

              <TitleSob>ABOUT</TitleSob>
              <hr />

            </div>
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

        <Cadastro className="subscribeSection">
          <h2>SUBSCRIBE</h2>
          <p>Sign up for newsletter</p>
          <Email type="email" placeholder="Your Email" />
          <Submit>SUBMIT</Submit>
        </Cadastro>
      </MainContainer>
    </>
  );
}
