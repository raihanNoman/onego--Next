import NextImage from "next/image";
import React from "react";
import AppStyles from "./AppStyles";
import { AppImageType } from "./appTypes";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <AppStyles.Button {...props}>{props.title}</AppStyles.Button>;
};

const Image = ({ style, src, alt, children, priority }: AppImageType) => (
  <AppStyles.ImageWrapper style={style}>
    <NextImage
      src={src}
      alt={alt}
      layout="intrinsic"
      objectFit="cover"
      priority={priority}
    />
    {children}
  </AppStyles.ImageWrapper>
);

export { Button, Image };
