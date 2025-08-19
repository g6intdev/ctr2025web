import prisma from "@/lib/prisma"

export default async function registerUserAndReturn(name: string, course: "serious" | "fun", category: "indiv" | "team", teamName?: string) {
  if (teamName) {
    const user = await prisma.user.create({
      data: {
        name: name,
        runnerCourse: course,
        runnerCategory: category,
        teamName: teamName
      }
    })
    return user
  } else {
    const user = await prisma.user.create({
      data: {
        name: name,
        runnerCourse: course,
        runnerCategory: category,
      }
    })
    return user
  }
}