import React from "react";
import styled from "styled-components";
import RNApic from "../../public/RNA.jpg";
import AHBpic from "../../public/AHB.jpeg";
import Image from "next/image";

const RNA = () => {
  return (
    <Card>
      <Image src={RNApic} height={500} objectFit="cover" />
      <label>
        <em>{"Co-Founder: "}</em>Raihan
      </label>
    </Card>
  );
};

const AHB = () => {
  return (
    <Card>
      <Image src={AHBpic} height={500} />
      <label>
        <em>{"Founder: "}</em>Asraful
      </label>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-inline: 1rem;

  label {
    margin-block: 0.5rem;
    em {
      font-style: normal;
      font-weight: 500;
    }
  }

  img {
    display: flex;
    flex-direction: column;
    flex: auto;

    min-height: 390px;
    max-height: 100%;

    object-fit: fill;
    object-position: bottom;
    border-radius: 1rem;
  }
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default { RNA, AHB };
