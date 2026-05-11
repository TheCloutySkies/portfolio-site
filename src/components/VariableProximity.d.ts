import type {
  CSSProperties,
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  RefObject,
} from "react";

export type VariableProximityProps = {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef?: RefObject<HTMLElement | null>;
  radius?: number;
  falloff?: string;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLSpanElement>, "onClick">;

declare const VariableProximity: ForwardRefExoticComponent<
  VariableProximityProps & RefAttributes<HTMLSpanElement>
>;
export default VariableProximity;
