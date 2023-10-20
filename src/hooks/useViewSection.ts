import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { timeChecker } from "../helpers/checkTime";
import type { Link, SetSection } from "../components/App.types";

interface UseViewProps {
  sectionName: Link;
  lastClickTime: number;
  setActive: SetSection;
  threshold: number
}

export const useViewSection = ({ sectionName, lastClickTime, setActive, threshold }: UseViewProps) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    if (inView && timeChecker(lastClickTime)) setActive(sectionName);
  }, [inView, setActive, lastClickTime, sectionName]);

  return { ref };
};
