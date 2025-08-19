import Link from "next/link"

export default function Page() {
  return (
    <div className="prose w-full flex flex-col justify-center">
      <h1>hello, world!</h1>
      <Link className="btn btn-primary w-full" href="/register">Register</Link>
    </div>

  )
}