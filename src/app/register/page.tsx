import registerUserLogic from "@/lib/registerUserLogic"
export default function Page() {

  return (
    <form action={registerUserLogic}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full">
        <legend className="fieldset-legend">Please register</legend>

        <label className="label">Full Name</label>
        <input required type="text" className="input" name="name" placeholder="eg. Tetsushi Aoyama" />

        <label className="label">Course</label>
        <select required name="course" defaultValue="" className="select" >
          <option disabled value="">choose your course</option>
          <option value="serious">Super Serious Run</option>
          <option value="fun">Super Fun Run</option>
        </select>

        <label className="team">Team name</label>
        <input type="text" className="input" name="team" placeholder="leave blank if none" />

      </fieldset>

      <input type="submit" value="Submit" className="btn btn-primary" />

    </form>
  )
}