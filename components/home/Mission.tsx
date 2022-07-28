import { forwardRef } from "react";
import styled from "styled-components";

const Mission = forwardRef<HTMLDivElement>((_, ref) => (
  <MissionComponent ref={ref}>
    <p>Our mission</p>
    <h1>&#8220;Building Australia&#39;s most hospitable company&#8221;</h1>
  </MissionComponent>
));

const MissionComponent = styled.div`
  display: flex;
  flex-direction: column;

  height: 20vh;
  width: 100vw;
  color: #777;

  align-items: center;
  justify-content: center;
  align-self: center;

  h1 {
    font-style: italic;
    text-align: center;
  }

  @media only screen and (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    h1 {
      max-width: 90%;
    }
  }
`;

Mission.displayName = "Mission";
export default Mission;
