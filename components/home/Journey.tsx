import { Tabs } from "antd";
import styled from "styled-components";
import { Button, Image } from "../app/AppComponents";
import PageStyles from "../app/PageStyles";
import U1 from "../../public/U1.jpg";
import U2 from "../../public/U2.jpg";
import U3 from "../../public/U3.jpg";
import H1 from "../../public/H1.jpg";
import H2 from "../../public/H2.jpg";
import H3 from "../../public/H3.jpg";

import { StaticImageData } from "next/image";
const { TabPane } = Tabs;

interface JourneyType {
  image: string | StaticImageData;
  alt: string;
  title: string;
  sub: string;
}

const userJpurney: JourneyType[] = [
  {
    image: U1,
    alt: "Plan",
    title: "Plan",
    sub: "Select a date, time, and place.",
  },
  {
    image: U2,
    alt: "Pick",
    title: "Pick",
    sub: "Select a car that best suits your needs. Compare listings, ratings, and prices to pick the car you want for your trip.",
  },
  {
    image: U3,
    alt: "Pay",
    title: "Pay",
    sub: "Look at the details for extra perks from the host. See how for you are from the pickup location. Read reviews from other users like yourself. Confirm your payment and start your trip. \n\nWe take care of the detail so you get to fully enjoy your trip.",
  },
];
const hostJourney: JourneyType[] = [
  {
    image: H1,
    alt: "Add",
    title: "Add",
    sub: "Be your own boss, and set your own prices.\n\n Add cars to your fleet. Easily manage your fleet by controlling availability. When you are ready again, simply hit available and start earning.",
  },
  {
    image: H2,
    alt: "Accept",
    title: "Accept",
    sub: "Help travellers with your car and get paid.\n\nAccept new trips. Complete the trip with the best service and get paid. You can monitor all your cars on active trips in your dashboard. Track and monitor your cars live. \n\n The dashboard helps you stay organized with all your cars, transactions, and trip tasks.",
  },
  {
    image: H3,
    alt: "Administer",
    title: "Administer",
    sub: "Get real time updates. Follow the OneGo 13 step taskboard to complete a successful trip. You can message your users, see current location, and much more.",
  },
];

const Journey = ({ joinNow }: { joinNow: () => void }) => (
  <TabComponent defaultActiveKey="1" centered>
    <TabPane tab="Host Journey" key="1">
      <JourneyComponent>
        <PageStyles.Row style={{ marginBottom: "2rem" }}>
          <span>
            <strong>Join the Pre-Launch</strong>
            <small>
              List your cars with other hosts just like you during our
              pre-launch. Pre-launches are a way for you to get registered in a
              city before we open to users in that city.{" "}
              {"(Currently launching in Sydney)"}
            </small>
          </span>
          <div style={{ alignSelf: "center", marginInline: 20 }}>
            <Button title="Join now" onClick={joinNow} />
          </div>
        </PageStyles.Row>
        {hostJourney.map((item, index) => (
          <PageStyles.Row key={index}>
            {index % 2 === 0 && <Image src={item.image} alt={item.alt} />}
            <span>
              <strong>{item.title}</strong>
              <small>{item.sub}</small>
            </span>
            {index % 2 !== 0 && <Image src={item.image} alt={item.alt} />}
          </PageStyles.Row>
        ))}
      </JourneyComponent>
    </TabPane>

    <TabPane tab="User Journey" key="2">
      <JourneyComponent>
        {userJpurney.map((item, index) => (
          <PageStyles.Row key={index}>
            {index % 2 !== 0 && <Image src={item.image} alt={item.alt} />}

            <span>
              <strong>{item.title}</strong>
              <small>{item.sub}</small>
            </span>
            {index % 2 === 0 && <Image src={item.image} alt={item.alt} />}
          </PageStyles.Row>
        ))}
      </JourneyComponent>
    </TabPane>
  </TabComponent>
);

const TabComponent = styled(Tabs)`
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    font-size: 1.2rem;
  }
`;

const JourneyComponent = styled.div`
  margin-bottom: 2rem;
  transition: all 2s ease;

  section {
    margin-block: 1rem;
  }

  div {
    flex: 0.7;
    height: fit-content;
    margin-bottom: 1rem;
    text-align: center;
  }
  span {
    flex: 0.85;
    align-items: center;
    text-align: center;
    flex-direction: column;
    display: flex;
    white-space: pre-wrap;

    padding: 1rem 3rem;
    font-size: 1.2rem;
    strong {
      margin-bottom: 1rem;
    }
  }

  @media only screen and (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    section {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Journey;
