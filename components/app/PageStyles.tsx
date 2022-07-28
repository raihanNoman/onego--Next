import styled from "styled-components";

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #cdcdcd;
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  width: 100%;
  max-width: 1100px;
  flex: auto;

  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: white;
`;

const Row = styled.section`
  display: flex;
  flex-direction: row;
  flex: auto;
  overflow: hidden;

  width: 100%;
  justify-content: space-evenly;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Page, Screen, Row };
