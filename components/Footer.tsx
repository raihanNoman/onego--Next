import Link from "next/link";
import React from "react";
import { FooterStyle } from "../styles/Main";

export default function Footer() {
  return (
    <FooterStyle>
      <ul>
        <li>
          <Link href={"/guidelines"}>Guidelines</Link>
        </li>
        <li>
          <Link href={"/policy"}>Policy</Link>
        </li>
        <li>
          <Link href={"/support"}>Support</Link>
        </li>
      </ul>
    </FooterStyle>
  );
}
