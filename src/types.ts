// types.ts
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: {
    perfScore: number;
    featuresCount: number;
    bundleKb: number;
  };
  heroModel?: string; // optional for now
  galleryImages: string[];
  liveUrl: string;
  repoUrl: string;
}
