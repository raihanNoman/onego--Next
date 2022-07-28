import { Collapse } from "antd";
import styled from "styled-components";
const { Panel } = Collapse;

interface FAQtype {
  question: string;
  answer: string;
  open: boolean;
}

const FAQs: FAQtype[] = [
  {
    question: "What is One Go?",
    answer:
      "Welcome to the future of ride sharing! OneGo is an app that allows Aussies share their rides. As a host, you can list your cars to rent out to users. As a user, you can rent a car from a host. A host gets an extra income, and a user gets great service. Win-win!",
    open: false,
  },
  {
    question: "How does it work?",
    answer:
      "Just download the app and list your cars. We will connect you with a user who is looking for a car. Then provide a great service to list your car again.",
    open: true,
  },
  {
    question: "Whats the big deal with hospitality?",
    answer:
      "We believe in hospitality first. While good manners may not cure cancer, it certainly reduces unnecessary stress that causes cancer. We want to build Australia's most hospitable company. Gone are the days of frustration when you book a car only to find out its not there. On top of that, dealing with a reciptionist with a bad attitude is a nightmare.",
    open: true,
  },
  {
    question: "What locations are you in?",
    answer:
      "We are going to launch in Sydney first, followed by Melbourne. We want to pace ourselves before opening up to new cities because we want to ensure the best possbile service to our hosts and our users. We obsess over customer support.",
    open: true,
  },
];

const FAQ = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <FAQCollapse onChange={onChange} accordion>
      <h1>FAQs</h1>
      {FAQs.map((item, index) => (
        <Panel
          header={item.question}
          key={index}
          className="site-collapse-custom-panel"
        >
          <p>{item.answer}</p>
        </Panel>
      ))}
    </FAQCollapse>
  );
};

const FAQCollapse = styled(Collapse)`
  border: none;
  background-color: white;
  font-size: medium;

  .ant-collapse-content {
    background: #dadada4b;
  }
`;

export default FAQ;
