// src/components/AboutPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Monitor, HardDrive } from "lucide-react";

type Experience = {
  year: string;
  role: string;
  company: string;
  details: string;
};

const experiences: Experience[] = [
  {
    year: "2017-2019",
    role: "Telecommunication Technician",
    company: "SCC",
    details:
      "Installed data and voice lines for businesses, ensuring reliable communication infrastructure. Worked with clients to understand their needs and provided tailored installation solutions, ensuring high-quality service and support.",
  },

  {
    year: "2022",
    role: "Frontend Engineer",
    company: "Tech Labs",
    details:
      "Built reusable UI components and improved bundle performance by 35%.",
  },
  {
    year: "2020",
    role: "Junior Developer",
    company: "Startup XYZ",
    details:
      "Contributed to MVP rollout, automated CI/CD pipelines with GitHub Actions & Docker.",
  },
];

const stats = [
  { label: "Projects", value: "65+" },
  { label: "Years Experience", value: "3" },
  { label: "Clients", value: "20+" },
];

const skills = [
  {
    name: "Full-Stack Development",
    icon: Code,
  },
  {
    name: "Network Support & Configuration",
    icon: Server,
  },
  {
    name: "Cable Installation & Maintenance",
    icon: HardDrive,
  },
  {
    name: "Responsive Design & Accessibility",
    icon: Monitor,
  },
];

const AboutPage: React.FC = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center px-6 py-24 bg-neutral-900"
  >
    <div className="max-w-6xl mx-auto space-y-20">
      {/* Animated Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          I build performant, accessible web apps with a focus on clean code,
          intuitive UX, and scalable architectures. From pixel-perfect UIs to
          robust back-end services, I bridge design and functionality to deliver
          exceptional digital experiences.
        </p>
      </motion.div>

      {/* Core Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1, duration: 0.6 }}
      >
        <h3 className="text-3xl font-semibold text-white mb-8">Core Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center border border-gray-700 rounded-2xl p-6 hover:border-primary transition"
            >
              <Icon className="h-10 w-10 mb-4 text-gray-400 group-hover:text-primary transition" />
              <span className="text-md font-medium text-gray-300 group-hover:text-white transition">
                {name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline & Stats */}
      <div className="flex flex-col lg:flex-row lg:space-x-20 space-y-16 lg:space-y-0">
        {/* Timeline */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-8">Experience</h3>
          <div className="border-l border-gray-700 ml-4 pl-6 space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[20px] top-1 h-3 w-3 bg-primary rounded-full"></span>
                <div>
                  <p className="text-primary font-medium">
                    {exp.year} — {exp.role}
                  </p>
                  <p className="text-gray-300 italic">{exp.company}</p>
                  <p className="text-gray-400 mt-2">{exp.details}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-bold text-primary">{stat.value}</p>
              <p className="text-gray-400 mt-2 uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 mb-6">
          Ready to collaborate? Let’s create something amazing together.
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 border-2 border-primary text-primary font-semibold rounded-full uppercase transition hover:bg-primary hover:text-neutral-900"
        >
          Get In Touch
        </a>
      </motion.div>
    </div>
  </section>
);

export default AboutPage;
