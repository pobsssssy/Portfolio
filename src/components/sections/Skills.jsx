import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";

const skills = [
  ".NET",
  "C#",
  "VB.NET",
  "MSSQL",
  "MySQL",
  "Design Pattern",
  "WebHooks",
  "API Integration",
  "GitHub",
  "Azure",
  "Firebase",
  "Additional Skill", // TODO: Replace with another relevant skill.
];

const skillGroups = [
  { label: "Development", value: ".NET, C#, VB.NET" },
  { label: "Data", value: "MSSQL, MySQL, Firebase" },
  { label: "Integration", value: "APIs, Webhooks, Automation" },
];

function Skills() {
  return (
    <Box as="section" id="skills" className="section-shell section-shell-alt section-anchor">
      <Container maxW="7xl" px={{ base: "1rem", md: "1.5rem" }}>
        <Reveal>
          <SectionHeading
            eyebrow="04 / SKILLS & TOOLS"
            title="Tools I use to solve problems"
            description="A practical mix of application development, databases, cloud services, integrations, and automation platforms."
          />
        </Reveal>

        <Grid templateColumns={{ base: "1fr", lg: "0.8fr 1.2fr" }} gap={{ base: "2rem", lg: "4rem" }} alignItems="start">
          <Reveal delay={80}>
            <Box>
              {skillGroups.map((group, index) => (
                <Box className="skill-group-row" key={group.label}>
                  <Text className="skill-group-index">0{index + 1}</Text>
                  <Box>
                    <Heading as="h3" color="var(--text-primary)" fontSize="1.1rem">
                      {group.label}
                    </Heading>
                    <Text mt="0.25rem" color="var(--text-muted)">
                      {group.value}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Reveal>

          <Reveal delay={160}>
            <Flex gap="0.8rem" wrap="wrap">
              {skills.map((skill, index) => (
                <Text
                  as="span"
                  className={`large-skill-badge ${skill === "Additional Skill" ? "placeholder-skill" : ""}`}
                  key={skill}
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  {skill}
                </Text>
              ))}
            </Flex>
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
