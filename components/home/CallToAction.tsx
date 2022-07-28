import { forwardRef } from "react";
import styled from "styled-components";
import { Button, Image } from "../app/AppComponents";
import M1 from "../../public/mission1.jpeg";
import M2 from "../../public/mission2.jpeg";
import M3 from "../../public/mission3.jpeg";

const CallToAction = forwardRef<HTMLDivElement, { onClick: () => void }>(
  ({ onClick }, ref) => (
    <MissionComponent ref={ref}>
      <Image src={M3} alt="Meet new people" />
      <Image src={M2} alt="Provide the best service" />
      <Image src={M1} alt="Hospitality above all" />

      <h1>Ready to Host?</h1>
      <Button title="Join Now" onClick={onClick} />
    </MissionComponent>
  )
);

const MissionComponent = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  div {
    // Background images
    opacity: 0.1618;
    max-height: 30vh;
    flex: 1;
  }
  h1 {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 25%;

    font-size: 2.5rem;
    color: #2a2a2a;
  }

  button {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 50%;
  }
`;

CallToAction.displayName = "CallToAction";
export default CallToAction;
