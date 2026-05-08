import { BuildPlannerPrompt }
from "./prompts"

interface GeneratePlanProps {
  title: string
  description: string
  difficulty: string
  hoursPerDay: number
}

export async function GenerateAIPlan({
  title,
  description,
  difficulty,
  hoursPerDay,
}: GeneratePlanProps) {
  const prompt =
    BuildPlannerPrompt(
      title,
      description,
      difficulty,
      hoursPerDay
    )

  const response =
    await fetch(
      "http://localhost:11434/api/generate",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          model: "qwen2.5:7b",

          prompt,

          stream: false,
        }),
      }
    )

  const data =
    await response.json()

  return data.response
}