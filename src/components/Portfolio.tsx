import React from "react";
import { FaLink } from "react-icons/fa"; // Importing the link icon from react-icons

const Portfolio: React.FC = () => {
  // Project data
  const projects = [
    {
      title: "OK Clean Skateparks",
      description:
        "An initiative I founded to empower the local community in Oklahoma to maintain and preserve skateparks. We host regular events aimed at keeping skateparks clean and safe for all skaters. Users can subscribe to the newsletter to stay informed about upcoming events or details.",
      techStack: ["React", "Node.js", "Tailwind"],
      imageUrl: "/images/okcs.png",
      projectLink: "https://github.com/your-repo",
      additionalInfo:
        "The platform was designed with a focus on ease of use and community engagement, allowing users to organize, track, and promote local skatepark clean-up events efficiently.",
    },
    {
      title: "sesh.",
      description:
        "sesh. is a social platform designed for skateboarders to connect, share progress on tricks, and discover local skate spots. Users can engage with a dynamic 'Spot Hunt' feature that provides information about nearby skate spots, promoting a sense of community and exploration.",
      techStack: ["React Native", "Typescript", "Express.js", "PostgreSQL"],
      imageUrl: "/images/skate-social.png",
      projectLink: "https://github.com/your-repo",
      additionalInfo:
        "The platform emphasizes user-friendly design and community interaction, offering tools for users to easily organize and participate in local skatepark clean-up events. It blends social sharing with event tracking to support both skater culture and environmental efforts.",
    },
  ];

  return (
    <div className="bg-neutral-900 py-26 px-6 md:px-12">
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12 bg-neutral-900 p-8 md:p-10 transition-all duration-300"
          >
            {/* Left Side: Project Image */}
            <div className="flex-1">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-full rounded-xl "
              />
            </div>

            {/* Right Side: Project Info */}
            <div className="flex-1 text-white space-y-6">
              <h3 className="text-2xl font-semibold flex items-center">
                {project.title}
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-primary hover:text-white"
                >
                  <FaLink />
                </a>
              </h3>
              <p className="text-lg text-gray-400">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex gap-3 flex-wrap">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1 text-sm text-neutral-900 bg-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Additional Info */}
              <p className="text-sm text-gray-400 mt-6">
                {project.additionalInfo}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-400 my-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
