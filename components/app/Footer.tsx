import Link from "next/link";
import React from "react";
import styled from "styled-components";

const AppFooter = ({ divider = true }: { divider?: boolean }) => (
  <Footer>
    {divider && <span />}

    <Link href={"/"}>Home</Link>
    <Link href={"/team"}>Team</Link>
    <Link href={"/policy"}>Policy</Link>
    <Link href={"/support"}>Support</Link>
  </Footer>
);

const Footer = styled.footer`
  display: flex;
  padding: 1rem;

  justify-content: center;
  align-items: center;
  align-self: center;
  position: relative;

  span {
    background: #77777728;
    height: 3px;
    width: 80vw;
    top: 10%;
    position: absolute;
  }
  a {
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

    & {
      color: #353637;
    }

    &:hover {
      opacity: 1;
      transition: 500ms;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    & {
      display: flex;
      flex-direction: column;
    }
    a {
      margin-top: 1rem;
    }
  }
`;

export default AppFooter;
