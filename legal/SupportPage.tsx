import styled from "styled-components";
import LOGO from "../../assets/logoT.png";
import { LegalPage, LegalForm, Logo } from "./styles";

export default function SupportPage() {
  return (
    <LegalPage>
      <Form>
        <Logo src={LOGO} alt="Profile picture" />
        <h1>One Go Support</h1>

        <section>
          <h2>Contact Info</h2>
          <p>Registrant name: RIDE SOLUTIONS PTY LTD</p>
          <p>Registrant ID: 20636789574</p>
          <p>Address: Unit 308, 90 Podium Way, Oran Park, NSW - 2570</p>
          <p>Email: asraful.hasan95@gmail.com</p>
          <p>Tel: 044 959 6147</p>
        </section>

        <section>
          <h2>Devoloper</h2>
          <p>Email: raihan1044@gmail.com</p>
          <p>Tel: 044 959 6147</p>
        </section>
      </Form>
    </LegalPage>
  );
}

const Form = styled.div`
  align-items: center;
  min-height: 1000px;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 1rem;
  padding-inline: 3rem;
  box-shadow: 0px 5px 13px #3b3b3b;
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: center;
    margin-block: 1rem;
    width: 50%;
  }
  h1 {
    margin-block: 1rem;
    margin-bottom: 2rem;
    display: flex;
  }
  h2 {
    align-items: flex-start;
    display: flex;
  }
`;
