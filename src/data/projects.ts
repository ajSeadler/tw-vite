// src/data/projects.ts
import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "SkatePark Finder",
    tagline: "Discover local skateparks in style",
    description:
      "A mobile-first React Native + Expo app with Express + PostgreSQL backend, full offline support, and interactive maps.",
    tech: ["React Native", "Expo", "Express", "PostgreSQL"],
    metrics: { perfScore: 95, featuresCount: 8, bundleKb: 120 },
    heroModel: undefined,
    galleryImages: ["/images/skate1.jpg", "/images/skate2.jpg"],
    liveUrl: "https://skateparkfinder.com",
    repoUrl: "https://github.com/you/skateparkfinder",
  },
  {
    id: "2",
    title: "Budget Master",
    tagline: "Track every dollar effortlessly",
    description:
      "A full-stack React + Vite app with Tailwind UI, secure JWT auth, and real-time charts using Recharts.",
    tech: ["React", "Vite", "Tailwind", "Node.js", "Express"],
    metrics: { perfScore: 88, featuresCount: 12, bundleKb: 200 },
    heroModel: undefined,
    galleryImages: ["/images/budget1.jpg", "/images/budget2.jpg"],
    liveUrl: "https://budgetmaster.app",
    repoUrl: "https://github.com/you/budgetmaster",
  },
  {
    id: "3",
    title: "CleanSweep",
    tagline: "Community-driven skatepark cleanups",
    description:
      "Built with React.tsx, Expo Router, and a PostgreSQL/Express backend—complete with geolocation and event scheduling.",
    tech: ["React.tsx", "Expo", "Express", "PostgreSQL"],
    metrics: { perfScore: 92, featuresCount: 10, bundleKb: 150 },
    heroModel: undefined,
    galleryImages: ["/images/clean1.jpg", "/images/clean2.jpg"],
    liveUrl: "https://cleansweep.org",
    repoUrl: "https://github.com/you/cleansweep",
  },
];
