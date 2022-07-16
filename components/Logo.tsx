import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Logo = ({ size, title }: { size: number; title?: string }) => {
  return (
    <LogoWrapper>
      <Image
        src={"/logo.png"}
        alt="Logo"
        width={size}
        height={size}
        layout="fixed"
      />
      <h1>{title}</h1>
    </LogoWrapper>
  );
};
const LogoWrapper = styled.figure`
  align-self: center;
  text-align: center;
`;

export default Logo;
