const BASE_URL =
  "https://api.github.com"

export async function FetchGitHubRepos() {
  const response = await fetch(
    `${BASE_URL}/user/repos?per_page=100&sort=updated`,
    {
      headers: {
        Authorization:
          `Bearer ${process.env.GITHUB_TOKEN}`,

        Accept:
          "application/vnd.github+json",
      },

      cache: "no-store",
    }
  )

  if (!response.ok) {
    throw new Error(
      "Failed to fetch repositories"
    )
  }

  const repos =
    await response.json()

  return repos
}