'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import registerUserAndReturn from "./registerUserAndReturn"

export default async function registerUserLogic(formData: FormData) {

  const rawFormData = {
    name: formData.get('name'),
    course: formData.get('course'),
    team: formData.get('team'),
  };

  let userData: {
    name: string,
    course: "serious" | "fun",
    category: "team" | "indiv",
    team: string | undefined
  } = {
    name: "",
    course: "fun",
    category: "indiv",
    team: undefined
  };

  if (typeof rawFormData.name !== "string") {
    throw new Error("name is not a string!")
  } else {
    userData.name = rawFormData.name
  }

  if (rawFormData.course !== "serious" && rawFormData.course !== "fun") {
    throw new Error("course is not serious or fun!")
  } else {
    userData.course = rawFormData.course
  }

  if (rawFormData.team) {
    if (typeof rawFormData.team !== "string") {
      throw new Error("team is inputted, but somehow it's not a string.")
    }
    userData.category = "team"
    userData.team = rawFormData.team
  }


  const user = await registerUserAndReturn(userData.name, userData.course, userData.category, userData.team)
  const cookieStore = await cookies()
  cookieStore.set('userId', user.userId.toString())
  redirect("/dashboard")

}