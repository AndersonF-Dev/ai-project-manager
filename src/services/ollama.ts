export async function GeneratePlan(prompt: string) {
  const response = await fetch(
    "http://localhost:11434/api/generate",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        model: "qwen2.5:7b",
        prompt,
        stream: false,
      }),
    }
  )

  return response.json()
}