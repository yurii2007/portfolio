import { Title } from "./Title";
import { Project } from "./Project";

import { projectsData } from "../constants/data";

export const Projects = () => {
  return (
    <section className="scroll-mt-28" id="projects">
      <Title text="My projects" />
      <div>
        {projectsData.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </section>
  );
};
