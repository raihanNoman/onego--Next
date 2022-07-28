import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import PageStyles from "../app/PageStyles";
import { GiTreasureMap } from "react-icons/gi";
import styled from "styled-components";

interface RoadMapStep {
  step: string;
  explanation: string;
  complete: "yes" | "no" | "working";
}

const Steps: RoadMapStep[] = [
  {
    step: "Create the app",
    explanation:
      "We are proud to announce that we have created our OneGo app. For those who have been following along, we have combined the host and user app to simplify the process",
    complete: "yes",
  },
  {
    step: "Pre-Launch to Hosts",
    explanation:
      "We want to have an adequate amount listings before launching to users. If you have'nt joined yet, JOIN NOW! Times running out...",
    complete: "working",
  },
  {
    step: "Launch to Users",
    explanation:
      "Release the app for users to download and start booking trips",
    complete: "no",
  },
];

const TimeLine = () => (
  <Timeline mode="alternate" style={{ flex: 1 }}>
    {Steps.map((item, index) => (
      <Timeline.Item
        key={index}
        dot={
          item.complete === "working" ? (
            <ClockCircleOutlined style={{ fontSize: "16px" }} />
          ) : null
        }
        color={item.complete === "yes" ? "#00d100" : undefined}
      >
        <h1>{item.step}</h1>
        <p style={{ color: "#727272" }}>{item.explanation}</p>
      </Timeline.Item>
    ))}
  </Timeline>
);

const RoadMap = () => (
  <RoadMapComponent>
    <span>
      <GiTreasureMap size={40} color={"#00aaff"} style={{ marginLeft: 20 }} />
      Road map
    </span>

    <PageStyles.Row>
      <Message>
        <strong>Warm welcome to our new hosts!</strong>
        <p>
          Thank you to all our new hosts for choosing OneGo. As planned, we are
          spearheding towards launching in Sydney by mid August, followed by
          Melbourne at the end of August. If we have'nt confirmed your vehicles,
          please contact support again. We are committed to being the most
          hospitable company in Australia for both our users and our hosts.
        </p>
        <small> --- OneGo team</small>
      </Message>
      <TimeLine />
    </PageStyles.Row>
  </RoadMapComponent>
);

const Message = styled.div`
  flex: 0.8;
  margin-right: 5%;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  strong {
    align-self: center;
    margin-bottom: 1rem;
  }
  small {
    align-self: flex-end;
    margin-right: 1rem;
  }
`;

const RoadMapComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1.4rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    section {
      display: flex;
      flex-direction: column;
      position: relative;
      text-align: center;
    }
    div {
      margin-block: 1rem;
      margin-bottom: 2rem;
      font-size: 14px;

      strong {
        font-size: 16px;
      }
    }
  }
`;

export default RoadMap;
