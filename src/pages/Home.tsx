import { FaServer, FaCode, FaBolt, FaUser, FaDice } from "react-icons/fa";
import ProfileCard from "../components/ProfileCard";
import RecentActivityList from "../components/RecentActivityList";

const PROJECT_SITES = [
  "https://okcleanskateparks.org",
  "https://discostrangermusic.com",
] as const;

export default function Home() {
  const handleLaunch = () => {
    const randomIndex = Math.floor(Math.random() * PROJECT_SITES.length);
    const url = PROJECT_SITES[randomIndex];
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-neutral-900 text-white px-6 py-20 flex items-center justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-md uppercase tracking-widest text-primary mb-4">
              <FaUser className="text-primary" />
              Anthony Seadler
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Full-Stack Web Developer.
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg mb-8">
              I build full-stack applications with React, Node.js, Express,
              PostgreSQL, and modern tools like Vite, Tailwind, and TypeScript.
              I focus on creating optimized, responsive, and secure web
              experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleLaunch}
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-neutral-200 transition shadow-md shadow-primary"
              >
                Click for a Random Project
                <FaDice size={16} />
              </button>

              <button className="inline-flex text-primary items-center gap-2 border border-primary px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-black transition">
                See Tech Stack
              </button>
            </div>
          </div>

          {/* Right Content: Tech Features */}
          <div className="space-y-8">
            {[
              {
                Icon: FaServer,
                title: "Backend Development",
                description:
                  "Build custom APIs with Node.js, Express, and PostgreSQL, ensuring smooth data handling and secure connections.",
              },
              {
                Icon: FaCode,
                title: "Responsive Frontend",
                description:
                  "Create seamless and engaging user interfaces with React, styled with Tailwind CSS for a modern look and feel.",
              },
              {
                Icon: FaBolt,
                title: "Optimized for Speed",
                description:
                  "Ensure optimal performance across the stack, from efficient database queries to fast, smooth frontend rendering.",
              },
            ].map(({ Icon, title, description }, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-xl">
                  <Icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-neutral-500 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile + Activity Section */}
      <section className="bg-neutral-900 px-3">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          <ProfileCard />
          <RecentActivityList />
        </div>
      </section>
    </>
  );
}
