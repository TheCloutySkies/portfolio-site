import type { FC, ReactNode } from "react";

export type OrbitImagesProps = {
  images?: string[];
  altPrefix?: string;
  shape?: string;
  customPath?: string;
  baseWidth?: number;
  radiusX?: number;
  radiusY?: number;
  radius?: number;
  starPoints?: number;
  starInnerRatio?: number;
  rotation?: number;
  duration?: number;
  itemSize?: number;
  direction?: string;
  fill?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  showPath?: boolean;
  pathColor?: string;
  pathWidth?: number;
  easing?: string;
  paused?: boolean;
  centerContent?: ReactNode;
  responsive?: boolean;
};

declare const OrbitImages: FC<OrbitImagesProps>;
export default OrbitImages;
