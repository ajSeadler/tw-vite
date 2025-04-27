import React from "react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Communications Coursework",
    description:
      "Completed 60 credit hours towards a Communications major at University of Louisville.",
    date: "2015",
  },
  {
    id: 2,
    title: "Web Dev Certifications",
    description:
      "Obtained Web Development certificates from University of Oklahoma & Full Stack Academy.",
    date: "December 2023",
  },
  {
    id: 3,
    title: "Cybersecurity Degree Enrollment",
    description:
      "Began pursuing a BS in Cybersecurity at Southern Nazarene University.",
    date: "August 2024",
  },
  {
    id: 4,
    title: "Home Network Lab Deployment",
    description:
      "Set up Raspberry Pi NAS and Pi-hole DNS filtering for a secure home network.",
    date: "2024",
  },
];

const RecentActivityList: React.FC = () => {
  return (
    <div className="bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Career Timeline
        </h2> */}
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {achievements.map((ach) => (
            <li key={ach.id} className="mb-10 ms-4">
              {/* Dot */}
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-primary"></div>

              {/* Content */}
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {ach.date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">
                {ach.title}
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {ach.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecentActivityList;
