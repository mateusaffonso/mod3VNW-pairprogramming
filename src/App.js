import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import { createGlobalStyle } from "styled-components";
import './index.css'

const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --color-text: #373737;
  font-size: 62.5%;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Main />
      <Footer />
    </>
  )
}
