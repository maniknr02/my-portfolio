import React, { useState } from "react";
import { Typography, Button, Stack } from "@mui/material";
import {
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectContent,
} from "./styles/StyledComponents";
import ProjectModal from "./ProjectModal";
import { projects } from "./constants";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects">
      <Typography variant="h4" fontWeight={700} align="center" gutterBottom sx={{ mt: 8, mb: 4 }}>
        Featured Projects
      </Typography>

      <ProjectsContainer>
        {projects.map((proj) => (
          <ProjectCard key={proj.title} onClick={() => setSelected(proj)}>
            <ProjectImage image={proj.image} title={proj.title} />
            <ProjectContent>
              <Typography variant="h6" fontWeight={600}>
                {proj.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {proj.description.slice(0, 90)}...
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {proj.tech.map((t) => (
                  <Button
                    key={t}
                    size="small"
                    variant="outlined"
                    sx={{ textTransform: "none", borderRadius: 4, mb: 1 }}
                  >
                    {t}
                  </Button>
                ))}
              </Stack>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsContainer>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
