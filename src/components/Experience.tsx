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
    <section ref={ref} id="experience">
      <Title text="My Experience" />
      <VerticalTimeline layout="1-column-left" lineColor="#e5e7eb">
        {experienceData.map((info) => (
          <VerticalTimelineElement
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={info.date}
            icon={info.icon}
            iconStyle={{ background: "white", fontSize: "1.5rem" }}
            key={info.title}
          >
            <h3 className="font-semibold capitalize">{info.title}</h3>
            <p className="font-normal !mt-0">{info.location}</p>
            <p className="!mt-1 !font-normal text-gray-700">{info.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
