import { ImageProps, StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface AppImageType {
  src: string | StaticImageData;
  priority?: boolean;
  children?: React.ReactNode;
  alt?: string;
  style?: React.CSSProperties;
}

interface AppSwitchType {
  A: string;
  B: string;
  style?: React.CSSProperties;
}

export type { AppImageType, AppSwitchType };
