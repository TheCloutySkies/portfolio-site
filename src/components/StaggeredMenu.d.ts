import type { FC } from "react";

export type StaggeredMenuNavItem = { label: string; link: string; ariaLabel?: string };

export type StaggeredMenuSocialItem = { label: string; link: string };

export type StaggeredMenuProps = {
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuNavItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  isFixed?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
};

declare const StaggeredMenu: FC<StaggeredMenuProps>;
export default StaggeredMenu;
