import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router";

function Hero() {
  return (
    <Box as="section" className="hero-section" id="home">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <Container maxW="7xl" px={{ base: "1rem", md: "1.5rem" }} position="relative" zIndex="1">
        <Flex minH={{ base: "calc(100vh - 72px)", md: "720px" }} align="center" py={{ base: "5rem", md: "7rem" }}>
          <Box maxW="900px" className="page-enter">
            <Text className="hero-kicker">SOFTWARE DEVELOPER · AI AUTOMATION</Text>
            <Heading
              as="h1"
              fontSize={{ base: "3rem", sm: "4rem", md: "5.8rem" }}
              lineHeight={{ base: "1.04", md: "0.98" }}
              letterSpacing="-0.065em"
              color="var(--text-primary)"
              maxW="900px"
            >
              I build software that works smarter, not harder.
            </Heading>
            <Text mt="1.5rem" color="var(--text-muted)" fontSize={{ base: "1.05rem", md: "1.25rem" }} maxW="680px">
              Hi, I’m Leonel Pobre. I create reliable business applications and practical AI-powered workflows that turn repetitive work into efficient systems.
            </Text>

            <Flex mt="2rem" gap="0.9rem" wrap="wrap">
              <NavLink to="/projects" className="primary-button">
                View Projects
                <span aria-hidden="true">↗</span>
              </NavLink>
              <NavLink to="/contact" className="secondary-button">
                Let’s Work Together
              </NavLink>
            </Flex>

            <Flex mt="3.25rem" gap={{ base: "1.5rem", md: "3rem" }} wrap="wrap">
              <Box>
                <Text className="stat-value">02+</Text>
                <Text className="stat-label">Featured projects</Text>
              </Box>
              <Box>
                <Text className="stat-value">11+</Text>
                <Text className="stat-label">Core technologies</Text>
              </Box>
              <Box>
                <Text className="stat-value">100%</Text>
                <Text className="stat-label">Focused on useful solutions</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Hero;
