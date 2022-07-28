import { Amplify } from "aws-amplify";
import awsConfig from "../src/aws-exports";
import Home from "./home";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

Amplify.configure(awsConfig);
// const Home = dynamic(() => import("./home"), { ssr: false });

export default Home;
