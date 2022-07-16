import React from "react";

import styled from "styled-components";
import LOGO from "../../assets/logoT.png";
export default function HostAgreement() {
  return (
    <AuthPage>
      <AuthForm>
        <Logo src={LOGO} alt="Profile picture" />
        <h1>
          OneGo is a ride shareing app. Our mission is to simplify riding for
          everyone.
        </h1>
        <h2>
          Simply follow the tasks on the taskboard and complete your ride.
        </h2>
      </AuthForm>
    </AuthPage>
  );
}

const Logo = styled.img`
  width: 30%;
  max-width: 300px;
  object-fit: cover;
`;

const AuthForm = styled.div`
  align-items: center;
  min-height: 1000px;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0px 5px 13px #3b3b3b;
  h4 {
    // birthday
    font-size: 1rem;
    margin-top: 0.3rem;
    margin-left: 1rem;
  }
`;
const PhoneNumberBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;

  margin-left: 1rem;
  flex: auto;
`;

const AuthPage = styled.div`
  padding: 3rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
