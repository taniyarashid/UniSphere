import { useState } from 'react'
import { Link } from 'react-router-dom'

const departments = ['CSE', 'EEE', 'BBA', 'English', 'Software Engineering', 'Law', 'Data Science', 'Economics']

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    studentId: '',
    department: '',
    semester: '',
  })

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  function handleSubmit(event) {
  event.preventDefault()

  const studentIdPattern = /^\d{3}-\d{3}-\d{3}$/
  if (!studentIdPattern.test(formData.studentId)) {
    alert('Student ID must look like 241-115-001')
    return
  }

  console.log(formData)
}

  const inputStyle =
    'w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-aqua-500 focus:ring-4 focus:ring-aqua-400/20 transition'
  const labelStyle = 'block text-sm font-semibold text-slate-700 mb-2'

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans">
      {/* Left brand panel */}
      <div className="relative overflow-hidden lg:w-5/12 bg-gradient-to-br from-sphere-950 via-sphere-900 to-sphere-700 text-white px-8 py-12 lg:px-14 flex flex-col justify-center">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-aqua-400/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-sphere-700/60 blur-3xl"></div>

        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-aqua-300 to-aqua-500 shadow-lg shadow-aqua-400/40"></div>
            <span className="font-display text-3xl font-extrabold tracking-tight">
              Uni<span className="text-aqua-400">Sphere</span>
            </span>
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-bold mt-8 leading-tight">
            Join your campus <span className="text-aqua-400">community.</span>
          </h1>
          <p className="mt-4 text-sphere-100/80 text-lg max-w-sm">
            Create your student account in under a minute.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="lg:w-7/12 flex items-center justify-center bg-slate-100 px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white rounded-3xl shadow-xl shadow-sphere-900/10 p-8 lg:p-10"
        >
          <h2 className="font-display text-3xl font-bold text-sphere-950">Create account</h2>
          <p className="text-slate-500 mt-1 mb-8">Metropolitan University students only</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className={labelStyle}>Full name</label>
              <input name="fullName" placeholder="Your full name" value={formData.fullName} onChange={handleChange} className={inputStyle} />
            </div>

            <div className="sm:col-span-2">
              <label className={labelStyle}>University email</label>
              <input name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Student ID</label>
              <input name="studentId" placeholder="e.g. 241-115-001" maxLength="11" value={formData.studentId} onChange={handleChange} className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Semester</label>
              <input name="semester" type="number" min="1" max="12" placeholder="e.g. 5" value={formData.semester} onChange={handleChange} className={inputStyle} />
            </div>

            <div className="sm:col-span-2">
              <label className={labelStyle}>Department</label>
              <select name="department" value={formData.department} onChange={handleChange} className={inputStyle}>
                <option value="">Select department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className={labelStyle}>Password</label>
              <input name="password" type="password" placeholder="At least 6 characters" value={formData.password} onChange={handleChange} className={inputStyle} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-sphere-700 to-sphere-900 hover:from-sphere-900 hover:to-sphere-950 text-white font-semibold rounded-xl py-3 shadow-lg shadow-sphere-700/30 transition"
          >
            Create account
          </button>

          <p className="text-sm text-slate-500 mt-6 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-sphere-700 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register