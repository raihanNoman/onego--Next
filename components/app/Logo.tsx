import Image from "next/image";
import React from "react";
import styled, { CSSProperties } from "styled-components";
import LOGO from "../../public/logo.png";

const Logo = ({ size, title, style }: LogoProps) => {
  return (
    <LogoWrapper style={style}>
      <Image src={LOGO} alt="OneGo logo" height={size} width={size} />
      {title && <label>{title}</label>}
    </LogoWrapper>
  );
};

type LogoProps = { size: number; title?: string; style?: CSSProperties };
const LogoWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  align-items: center;

  label {
    font-size: 30px;
    font-weight: 600;
  }
`;

export default Logo;
