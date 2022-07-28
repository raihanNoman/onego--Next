import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Page from "../../components/app/PageStyles";
import Logo from "../../components/app/Logo";
import Contacts from "../../components/support/Contacts";
import Founders from "../../components/support/Founders";
import AppFooter from "../../components/app/Footer";
import Mission from "../../components/home/Mission";

const index: NextPage = () => {
  return (
    <Page.Page>
      <TeamPage>
        <Logo style={{ marginTop: 0 }} size={300} />
        <h1>Building Australia&#39;s most hospitable company</h1>

        <em>Our mission:</em>
        <strong>
          To bring people closer togather in the true Aussie spirit, and create
          the most hospitable company in Australia.
        </strong>

        <h4>
          {"\t"}We believe in the axium <small>ব্যবহারে বংশের পরিচয়</small> -
          our bahaviour towards others tells them what kind of family we belong
          to. When renting out cars ourselves, we found that all car rental
          services are missing this key ingredient: hospitality. When we are
          commited to hospitablity, we altutomatically erridicate bad attitudes,
          faulty reservations, and unreasonable behaviour. We believe in
          connecting travelers and hosts in person. It&#39;s the human touh that
          makes allows a host to trust the user with their car, and allows a
          user to feel cared for, and focus on their trip.
        </h4>

        <section style={{ marginBottom: "1rem", marginLeft: "1rem" }}>
          <h3>Join the team</h3>
          <p>
            If you share our vision, and have a true Aussie spirit, please
            contact OneGo support. {"\n"}We are currently looking to team
            members in:
          </p>

          <p>
            React Devoloper{"\n"}
            React Native Devoloper{"\n"}
            AWS Certified Backend Devoloper{"\n"}
            Administrative Assistant{"\n"}
            Customer Service Assistant Manager{"\n"}
          </p>
        </section>

        {/*    
     
     Brining people togather in the true aussie spirit
     <h5>Our mission</h5>
        <p>We are building Australia&#39;s most hosbitable company</p>

        <h5>Our motto</h5>
        <p>ব্যবহারে বংশের পরিচয়</p>

        <h5>Our Values</h5>
        <p>Hospitality first</p>
        <p>Creativity first</p>
        <p>Patiently persavere</p>
        <p>Have a heart</p>

       <h5>Career</h5>
        <p>React Devoloper</p>
        <p>React Native Devoloper</p>
        <p>AWS Certified Backend Devoloper</p>

        <p>Administrative Assistant</p>
        <p>Customer Service Assistant Manager</p> */}

        <Page.Row>
          <Founders.AHB />
          <Founders.RNA />
        </Page.Row>
      </TeamPage>

      <AppFooter />
    </Page.Page>
  );
};

const TeamPage = styled(Page.Screen)`
  margin-top: 1rem;
  padding-top: 0;
  white-space: pre-wrap;
  h1 {
    align-self: center;
    margin-top: -1rem;
    text-align: center;
  }
  h4 {
    font-weight: normal;
  }

  em {
    align-self: center;
    margin-block: 1rem;
  }
  strong {
    text-align: center;
  }

  @media only screen and (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    padding-block: 1rem;
    strong {
      margin-bottom: 1rem;
      font-weight: 600;
    }

    section {
      display: flex;
      flex-direction: column;
    }

    img {
      object-fit: cover;
      max-height: 100px;
      max-width: 100px;
    }
  }
`;

export default index;
