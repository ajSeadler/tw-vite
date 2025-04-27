/* eslint-disable @typescript-eslint/no-explicit-any */
// services/githubService.ts
export interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export interface LanguageData {
  [key: string]: number;
}

export const fetchGitHubData = async () => {
  const userRes = await fetch("https://api.github.com/users/ajSeadler");
  const userData = await userRes.json();

  const reposRes = await fetch(
    "https://api.github.com/users/ajSeadler/repos?per_page=100"
  );
  const reposData = await reposRes.json();

  const githubData: GitHubData = {
    public_repos: userData.public_repos,
    followers: userData.followers,
    following: userData.following,
    html_url: userData.html_url,
  };

  const languageCount: LanguageData = {};
  reposData.forEach((repo: any) => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });

  const sortedLanguages = Object.fromEntries(
    Object.entries(languageCount).sort(([, a], [, b]) => b - a)
  );

  return { githubData, topLanguages: sortedLanguages };
};
