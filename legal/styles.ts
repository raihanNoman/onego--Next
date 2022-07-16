import styled, { CSSProperties } from "styled-components";

const Logo = styled.img`
  width: 30%;
  max-width: 300px;
  object-fit: cover;
`;

const LegalForm = styled.div`
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
  h4 {
    // birthday
    font-size: 1rem;
    margin-top: 0.3rem;
    margin-left: 1rem;
  }
`;
const LegalPage = styled.div`
  padding: 3rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { LegalPage, LegalForm, Logo };
