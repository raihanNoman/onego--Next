import React from "react";
import Logo from "../components/app/Logo";
import styled, { CSSProperties } from "styled-components";
import { RiGooglePlayFill } from "react-icons/ri";
import { BsApple } from "react-icons/bs";
import Colors from "../constants/Colors";

const DownloadApp = () => {
  return (
    <Background style={Colors.grey}>
      <Logo size={300} style={{ marginTop: 50 }} />

      <h1>Car rentals</h1>
      <h3>For humans. By humans.</h3>

      <h4>Download the app</h4>

      <DownloadButtons />
    </Background>
  );
};

const DownloadButtons = ({ style }: { style?: CSSProperties }) => {
  return (
    <MainBox style={style}>
      <Box>
        <BsApple size={"70%"} style={icon} />
        <p>Download on the</p>
        <h5>App Store</h5>
      </Box>
      <Box>
        <RiGooglePlayFill size={"70%"} style={icon} />
        <p>GET IT ON</p>
        <h5>Google Play</h5>
      </Box>
    </MainBox>
  );
};

const icon: CSSProperties = {
  position: "absolute",
  left: -35,
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);
  width: "100%";
  aspect-ratio: 16/9;
  align-items: center;

  h1 {
    margin-top: -80px;
    text-align: center;
    margin-bottom: 100px;
    font-size: 30px;
  }
  h3 {
    margin-top: -100px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 100px;
  }
  h4 {
    font-size: 0.7rem;
    font-weight: 500;
  }
`;

const Box = styled.div`
  display: flex;
  height: 50px;
  width: 170px;
  flex-direction: column;
  border: 1px solid #777777;
  margin-inline: 3px;
  position: relative;
  justify-content: center;

  border-radius: 10px;

  h5 {
    font-size: 1rem;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 30px;
    right: 0;
    top: 35%;
    text-align: center;
  }

  p {
    font-size: 1px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 20%;
    right: 0;
    top: 5px;
    text-align: center;
  }
`;
const MainBox = styled.div`
  display: flex;

  align-items: center;

  border-radius: 10px;
`;

export { DownloadButtons };
export default DownloadApp;
