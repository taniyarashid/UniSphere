import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const features = [
  { icon: '📚', title: 'Notes & Resources', text: 'Find and share study material' },
  { icon: '🎓', title: 'Senior Guidance', text: 'Get advice from experienced students' },
  { icon: '⭐', title: 'Course Reviews', text: 'Choose courses with confidence' },
  { icon: '🛡️', title: 'Anonymous Complaints', text: 'Speak up safely' },
]

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans">
      {/* Left brand panel */}
      <div className="relative overflow-hidden lg:w-1/2 bg-gradient-to-br from-sphere-950 via-sphere-900 to-sphere-700 text-white px-8 py-12 lg:px-16 flex flex-col justify-center">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-aqua-400/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-sphere-700/60 blur-3xl"></div>

        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-aqua-300 to-aqua-500 shadow-lg shadow-aqua-400/40"></div>
            <span className="font-display text-3xl font-extrabold tracking-tight">
              Uni<span className="text-aqua-400">Sphere</span>
            </span>
          </div>

          <h1 className="font-display text-3xl lg:text-5xl font-bold mt-8 leading-tight">
            Your university life,
            <br />
            <span className="text-aqua-400">all in one sphere.</span>
          </h1>
          <p className="mt-4 text-sphere-100/80 text-lg max-w-md">
            A student-built platform for Metropolitan University.
          </p>

          <div className="hidden md:grid grid-cols-2 gap-4 mt-10 max-w-lg">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur border border-white/10 rounded-xl p-4"
              >
                <div className="text-2xl">{feature.icon}</div>
                <p className="font-semibold mt-2">{feature.title}</p>
                <p className="text-sm text-sphere-100/70">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="lg:w-1/2 flex items-center justify-center bg-slate-100 px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-sphere-900/10 p-8 lg:p-10"
        >
          <h2 className="font-display text-3xl font-bold text-sphere-950">Welcome back</h2>
          <p className="text-slate-500 mt-1 mb-8">Log in to continue to UniSphere</p>

          <label className="block text-sm font-semibold text-slate-700 mb-2">University email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-5 focus:outline-none focus:border-aqua-500 focus:ring-4 focus:ring-aqua-400/20 transition"
          />

          <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-7 focus:outline-none focus:border-aqua-500 focus:ring-4 focus:ring-aqua-400/20 transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sphere-700 to-sphere-900 hover:from-sphere-900 hover:to-sphere-950 text-white font-semibold rounded-xl py-3 shadow-lg shadow-sphere-700/30 transition"
          >
            Log in
          </button>

          <p className="text-sm text-slate-500 mt-6 text-center">
            New to UniSphere?{' '}
            <Link to="/register" className="text-sphere-700 font-semibold hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login