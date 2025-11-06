import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Stack, Button } from "@mui/material";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle fontWeight={700}>{project.title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
          {project.tech.map((tech) => (
            <Button
              key={tech}
              size="small"
              variant="outlined"
              sx={{ textTransform: "none", borderRadius: 4 }}
            >
              {tech}
            </Button>
          ))}
        </Stack>
        {project.link && (
          <Button
            variant="contained"
            color="primary"
            href={project.link}
            target="_blank"
            sx={{ borderRadius: 2 }}
          >
            View Project
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
