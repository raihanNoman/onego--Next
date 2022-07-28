import { NextPage } from "next";
import React, { useCallback, useEffect, useRef } from "react";
import Page from "../../components/app/PageStyles";
import AppFooter from "../../components/app/Footer";
import AppHead from "../../components/app/AppHead";
import FAQ from "../../components/home/FAQ";
import Journey from "../../components/home/Journey";
import RoadMap from "../../components/home/RoadMap";
import Mission from "../../components/home/Mission";
import CallToAction from "../../components/home/CallToAction";
import Hero, { Form } from "../../components/home/Hero";

const Home: NextPage = () => {
  const ref = useRef<HTMLFormElement>(null);
  const joinNow = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Page.Page style={{ background: "#fff" }}>
      <AppHead />

      <Hero>
        <Form ref={ref} />
      </Hero>
      <Mission />

      <Page.Screen>
        <RoadMap />
        <Journey joinNow={joinNow} />
        <FAQ />
      </Page.Screen>

      {/* <MobileDownload /> */}
      <CallToAction onClick={joinNow} />
      <AppFooter divider={false} />
    </Page.Page>
  );
};

export default Home;
