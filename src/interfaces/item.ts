import { ReactNode } from "react";

export interface MenuItemProps {
  label: string;
  icon: ReactNode;
  active?: boolean;
}

export interface CardProps {
  label: string;
  value: number;
  icon: ReactNode;
}
