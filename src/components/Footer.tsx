import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-200 py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b border-gray-700 pb-6">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white">Anthony Seadler</h2>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a className="text-primary hover:text-white">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 Anthony Seadler. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
