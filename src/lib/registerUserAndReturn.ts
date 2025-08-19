import prisma from "@/lib/prisma"

export default async function registerUserAndReturn(name: string, course: "serious" | "fun", category: "indiv" | "team", groupName?: string) {
  const user = await prisma.user.create({
    data: {
      name: name,
      runnerCourse: course,
      runnerCategory: category,
      groupName: groupName
    }
  })
  return user
}