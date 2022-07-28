import styled from "styled-components";
import { Image } from "../app/AppComponents";

import M3 from "../../public/mission3.jpeg";
import { DownloadButtons } from "../../ads/DownloadApp";

const MobileDownload = () => (
  <MobileDownloadComponent>
    <main>
      <section>
        <Image
          src={M3}
          alt="Join our family for hosts today"
          style={{
            maxWidth: 500,
            justifyContent: "center",
            display: "flex",
          }}
        />
      </section>

      <section>
        <h3>Coming soon...</h3>
        <h4>
          We are working to build an initial list before unvailing the app to
          our users. We want to provide the most hospitable serive to our users
          as possible
        </h4>
        <DownloadButtons style={{ bottom: "10%", right: "20%" }} />
      </section>
    </main>
  </MobileDownloadComponent>
);

const MobileDownloadComponent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  color: #777;
  font-size: 2rem;
  margin-top: 3rem;

  main {
    flex-direction: row;
    display: flex;
    align-self: center;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    margin-bottom: 0rem;
  }
  h4 {
    text-align: center;
    font-weight: 400;
    font-size: small;

    margin-inline: 10px;
    max-width: 500px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default MobileDownload;
