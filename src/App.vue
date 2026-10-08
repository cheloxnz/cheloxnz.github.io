<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import StackSection from './components/StackSection.vue'
import AiSection from './components/AiSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import CursorGlow from './components/CursorGlow.vue'
</script>

<template>
  <CursorGlow />
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <StackSection />
    <AiSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>
