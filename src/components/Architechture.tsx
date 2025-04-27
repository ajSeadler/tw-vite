import { FaServer, FaCode, FaBolt, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    title: "Reliable APIs",
    description:
      "Leverage Node.js with Express and PostgreSQL to build fast, scalable, and reliable backends for your app.",
    icon: <FaServer className="text-teal-400" size={20} />,
  },
  {
    title: "Modern User Interfaces",
    description:
      "Create responsive, pixel-perfect UIs using React, Tailwind CSS, and reusable component libraries.",
    icon: <FaCode className="text-teal-400" size={20} />,
  },
  {
    title: "Optimized for Performance",
    description:
      "Enjoy quick load times and mobile-friendly, SEO-ready pages optimized for the best user experience.",
    icon: <FaBolt className="text-teal-400" size={20} />,
  },
  {
    title: "Secure by Default",
    description:
      "Built-in security features like SSL, authentication, and best practices to protect your users and data.",
    icon: <FaShieldAlt className="text-teal-400" size={20} />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-neutral-900 text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Build fast. Scale with confidence.
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Everything you need to launch and grow full-stack apps—from UI to
            database to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="bg-neutral-800 p-4 rounded-xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-neutral-500 text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
