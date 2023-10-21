import { Title } from "./Title";
import { Project } from "./Project";

import { DefaultProps } from "./App.types";
import { useViewSection } from "../hooks/useViewSection";
import { links, projectsData } from "../constants/data";

export const Projects = ({ setActive, lastClickTime }: DefaultProps) => {
  const initialViewState = {
    sectionName: links[2].name,
    lastClickTime,
    setActive,
    threshold: 0.5,
  };
  const { ref } = useViewSection(initialViewState);

  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <Title text="My projects" />
      <div>
        {projectsData.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </section>
  );
};
