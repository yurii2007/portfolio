import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useViewSection } from "../hooks/useViewSection";
import { Title } from "./Title";
import { DefaultProps } from "./App.types";

import { experienceData, links } from "../constants/data";

export const Experience = ({ lastClickTime, setActive }: DefaultProps) => {
  const initialViewState = {
    sectionName: links[4].name,
    lastClickTime,
    setActive,
    threshold: 0.75,
  };
  const { ref } = useViewSection(initialViewState);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <Title text="My Experience" />
      <VerticalTimeline layout="1-column-right" lineColor="linear-gradient(148.92deg , #029cdc , #23274c)">
        {experienceData.map((info) => (
          <VerticalTimelineElement
            contentStyle={{
              background: "#23274c",
              boxShadow: "none",
              textAlign: "left",
              padding: "2rem",
            }}
            contentArrowStyle={{
              borderLeft: "0.5rem solid #9ca3af",
            }}
            date={info.date}
            icon={info.icon}
            iconStyle={{ background: "#23274c" }}
            key={info.title}
          >
            <h3 className="font-semibold capitalize">{info.title}</h3>
            <p className="font-normal !mt-1">{info.location}</p>
            <p className="!mt-1 !font-normal text-slate-300">{info.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
