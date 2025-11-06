import React from "react";
import { Typography, Stack, Divider, Box } from "@mui/material";
import { ExperienceContainer, ExperienceCard, SkillChip } from "./styles/StyledComponents";
import { experiences, skills } from "./constants";

const Experience: React.FC = () => {
  return (
    <ExperienceContainer id="experience">
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Experience
      </Typography>

      {experiences.map((exp) => (
        <ExperienceCard key={exp.role} elevation={0}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="h6" fontWeight={700}>
                {exp.role}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {exp.company}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {exp.duration}
            </Typography>
          </Stack>

          <ul style={{ marginTop: "0.5rem" }}>
            {exp.desc.map((d) => (
              <li key={d}>
                <Typography variant="body2" color="text.secondary">
                  {d}
                </Typography>
              </li>
            ))}
          </ul>
        </ExperienceCard>
      ))}

      <Divider sx={{ my: 6, width: "60%" }} />

      <Typography variant="h4" fontWeight={700} gutterBottom>
        Skills
      </Typography>

      {Object.entries(skills).map(([category, items]) => (
        <Box key={category} sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
            {category}
          </Typography>
          <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ mb: 2 }}>
            {items.map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </Stack>
        </Box>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
