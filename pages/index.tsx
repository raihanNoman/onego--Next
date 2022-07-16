import type { NextPage } from "next";
import { useRef } from "react";
import Footer from "../components/Footer";
import AppHead from "../layout/AppHead";
import { Page, Screen } from "../styles/Main";
import { Amplify, DataStore } from "aws-amplify";
import awsConfig from "../src/aws-exports";
import { Form, Hero, MoreInfo } from "../components/Home";
Amplify.configure(awsConfig);

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null),
    scrolldown = () => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <Page style={{ backgroundColor: "#564e4e" }}>
      <AppHead />

      <Screen
        style={{
          padding: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "blue",
            width: "100%",
          }}
        >
          <Hero />
          <Form />
        </div>

        <h4 onClick={scrolldown}>More info</h4>
        <div ref={ref}>
          <MoreInfo />
        </div>
      </Screen>

      <Footer />
    </Page>
  );
};

export default Home;
