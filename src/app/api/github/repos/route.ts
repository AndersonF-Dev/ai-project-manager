import { NextResponse }
from "next/server"

import {
  FetchGitHubRepos,
} from "@/services/github"

export async function GET() {
  try {
    const repos =
      await FetchGitHubRepos()

    const formattedRepos =
      repos.map((repo: any) => {
        const updatedAt =
          new Date(repo.updated_at)

        const daysWithoutUpdate =
          Math.floor(
            (
              Date.now() -
              updatedAt.getTime()
            ) /
              (1000 * 60 * 60 * 24)
          )

        let status =
          "In Progress"

        if (
          repo.archived
        ) {
          status =
            "Completed"
        }

        if (
          daysWithoutUpdate > 90
        ) {
          status =
            "Abandoned"
        }

        return {
          id: repo.id,

          name: repo.name,

          description:
            repo.description,

          language:
            repo.language,

          stars:
            repo.stargazers_count,

          updatedAt:
            repo.updated_at,

          status,

          private:
            repo.private,

          htmlUrl:
            repo.html_url,
        }
      })

    return NextResponse.json(
      formattedRepos
    )
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      {
        error:
          "Failed to fetch GitHub repositories",
      },
      {
        status: 500,
      }
    )
  }
}