import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import { Page, Screen } from "../../styles/Main";

const index: NextPage = () => {
  return (
    <Page>
      <Screen>
        <Logo title="Support" size={300} />

        <section>
          <h3>Contact Info</h3>
          <p>Registrant name: RIDE SOLUTIONS PTY LTD</p>
          <p>Registrant ID: 20636789574</p>
          <p>Address: Unit 308, 90 Podium Way, Oran Park, NSW - 2570</p>
          <p>Email: asraful.hasan95@gmail.com</p>
          <p>Tel: 044 959 6147</p>
        </section>

        <section>
          <h3>Devoloper</h3>
          <p>Email: raihan1044@gmail.com</p>
          <p>Tel: 929 408 6490</p>
        </section>
      </Screen>
      <Footer />
    </Page>
  );
};

export default index;

const Card = styled.div`
  display: flex;

  max-width: 1200px;

  flex: 1;
  justify-content: space-between;
  align-items: stretch;
  background-color: lightblue;

  margin-block-end: 1rem;
`;
