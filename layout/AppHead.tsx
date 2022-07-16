import React from "react";
import Head from "next/head";

export default function AppHead() {
  return (
    <Head>
      <title>meCast - Let your imagination run wild</title>
      <meta
        name="description"
        content="The place to let your imagination run wild" // serch engine // add to all pages
      />
      <meta
        data-rh="true"
        name="description"
        content="Snapchat lets you easily talk with friends, view Live Stories from around the world, and explore news in Discover. Life's more fun when you live in the moment!"
      />
      <meta
        data-rh="true"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        data-rh="true"
        name="keywords"
        content="Snap,Snapchat,Friends,spotlight,Open Your Snapchat"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
