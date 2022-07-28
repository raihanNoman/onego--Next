import React from "react";
import styled from "styled-components";

const Office = () => {
  return (
    <section>
      <h3>Contact Info</h3>
      <p>Registrant name: RIDE SOLUTIONS PTY LTD</p>
      <p>Registrant ID: 20636789574</p>
      <p>Address: &nbsp;&nbsp; Unit 308, 90 Podium Way</p>
      <p style={{ paddingLeft: "10%" }}> Oran Park, NSW - 2570</p>

      <p>Email: asraful.hasan95@gmail.com</p>
      <p>Tel: 044 959 6147</p>
    </section>
  );
};

const Tech = () => {
  return (
    <section>
      <h3>Devoloper</h3>
      <p>Email: nomanapps21@gmail.com</p>
      <p>Tel: +1 929 408 6490</p>
    </section>
  );
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { Office, Tech };
