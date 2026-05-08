import { prisma } from "@/lib/prisma"

import { NextResponse } from "next/server"

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json()

    const project =
      await prisma.project.create({
        data: {
          title: body.title,
          description:
            body.description,

          difficulty:
            body.difficulty,

          hoursPerDay:
            Number(
              body.hoursPerDay
            ),
        },
      })

    return NextResponse.json(
      project,
      {
        status: 201,
      }
    )
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      {
        error:
          "Failed to create project",
      },
      {
        status: 500,
      }
    )
  }
}