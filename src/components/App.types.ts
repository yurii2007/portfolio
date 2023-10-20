import { links } from "../constants/data";

export type Link = (typeof links)[number]["name"];

export type SetSection = React.Dispatch<React.SetStateAction<Link>>;

export interface DefaultProps {
  setActive: SetSection;
  lastClickTime: number
};