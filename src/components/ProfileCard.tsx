import React, { useEffect, useState } from "react";
import { GitBranch, Users, UserPlus } from "lucide-react";
import {
  fetchGitHubData,
  GitHubData,
  LanguageData,
} from "../services/githubService";

const ProfileCard: React.FC = () => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [topLanguages, setTopLanguages] = useState<LanguageData>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = localStorage.getItem("githubDataCache");
        if (cached) {
          const { githubData, topLanguages, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 5 * 60 * 1000) {
            setGithubData(githubData);
            setTopLanguages(topLanguages);
            return;
          }
        }

        const {
          githubData: fetchedGitHubData,
          topLanguages: fetchedTopLanguages,
        } = await fetchGitHubData();

        setGithubData(fetchedGitHubData);
        setTopLanguages(fetchedTopLanguages);

        localStorage.setItem(
          "githubDataCache",
          JSON.stringify({
            githubData: fetchedGitHubData,
            topLanguages: fetchedTopLanguages,
            timestamp: Date.now(),
          })
        );
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // Prepare for language bars
  const totalLangs = Object.values(topLanguages).reduce((sum, n) => sum + n, 0);
  const top5 = Object.entries(topLanguages).slice(0, 5);

  return (
    <div className="bg-neutral-900 min-h-screen antialiased py-16">
      <div className="container mx-auto">
        <div className="bg-gray-50 relative shadow rounded-lg  mx-auto p-6 sm:p-8">
          {/* Profile pic & header */}
          <div className="flex justify-center">
            <img
              src="/images/me.jpg"
              alt="Profile"
              className="rounded-full absolute -top-16 w-32 h-32 shadow-md border-4 border-white transition-transform hover:scale-110"
            />
          </div>
          <div className="mt-20 text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Anthony Seadler
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Full-Stack Developer | Network Analyst
            </p>
          </div>

          {/* Connect button */}
          <div className="my-6 px-6">
            <a
              href={githubData?.html_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block bg-gray-900 text-gray-200 rounded-lg py-3 font-medium hover:bg-primary hover:text-black transition text-center"
            >
              Connect with <span className="font-bold">@ajSeadler</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6">
            {[
              {
                Icon: GitBranch,
                label: "Repositories",
                value: githubData?.public_repos,
              },
              { Icon: Users, label: "Followers", value: githubData?.followers },
              {
                Icon: UserPlus,
                label: "Following",
                value: githubData?.following,
              },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <Icon className="w-8 h-8 text-primary" />
                <div className="ml-3">
                  <p className="text-lg font-bold text-gray-900">
                    {value ?? ""}
                  </p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Top languages */}
          <div className="mt-8 px-6">
            <h3 className="text-gray-900 font-medium mb-4">
              Top Languages Used
            </h3>
            <div className="space-y-3">
              {top5.map(([lang, count]) => {
                const pct = ((count / totalLangs) * 100).toFixed(0);
                return (
                  <div key={lang} className="flex items-center">
                    <span className="w-20 text-sm text-gray-700">{lang}</span>
                    <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-neutral-900"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-xs text-gray-500">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
