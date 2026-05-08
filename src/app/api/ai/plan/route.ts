import { NextResponse }
from "next/server"

import { GenerateAIPlan }
from "@/ai/planner"

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json()

    const roadmap =
      await GenerateAIPlan({
        title: body.title,

        description:
          body.description,

        difficulty:
          body.difficulty,

        hoursPerDay:
          Number(
            body.hoursPerDay
          ),
      })

    return NextResponse.json({
      roadmap,
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      {
        error:
          "Failed to generate roadmap",
      },
      {
        status: 500,
      }
    )
  }
}