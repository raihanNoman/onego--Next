import styled from "styled-components";
import React from "react";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  min-width: 100vw;
  min-height: 100vh;
  padding: 2rem 1rem;
  align-items: center;

  background-color: #cdcdcd;
`;

const Screen = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  align-items: center;
  flex-direction: column;

  align-items: stretch;
  background-color: white;

  margin-block-end: 1rem;

  border-radius: 1rem;
  padding: 1rem 3rem;

  section {
    margin-block: 1rem;
  }

  main {
    flex-direction: column;
    align-items: center;
    display: flex;
    width: 500px;

    background-color: red;
  }

  /* h1 {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }
  h3 {
    font-weight: 400;
  } */
`;

const FooterStyle = styled.footer`
  /* height: 35vh;

  background-color: #6c6c6c; */

  width: 90vw;
  display: flex;
  flex: 1;
  padding: 1rem 0;
  margin-top: 2rem;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  align-self: center;

  ul {
    flex-direction: row;
    list-style-type: none;
  }
  li {
    float: left;
    display: flex;
    font-weight: 500;
    font-size: 1rem;
    opacity: 0.4;

    text-align: center;
    justify-content: center;
    align-items: center;

    margin-inline: 1rem;
    height: 50px;
    width: 150px;

    border-radius: 0.5rem;
    text-decoration: none;

    &:hover {
      opacity: 1;
      transition: 500ms;
      font-size: 1.1rem;
      cursor: pointer;
    }
  }
`;

export { Page, Screen, FooterStyle };
