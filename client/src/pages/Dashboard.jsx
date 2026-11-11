import { Link } from 'react-router-dom'

const menuItems = ['Dashboard', 'Notes & Resources', 'Find Seniors', 'Course Reviews', 'Complaints']

const quickActions = [
  { icon: '📚', title: 'Notes & Resources', text: 'Browse and share study material', badge: 'Update 2' },
  { icon: '🎓', title: 'Senior Guidance', text: 'Find mentors in your department', badge: 'Update 3' },
  { icon: '⭐', title: 'Course Reviews', text: 'Rate courses and teachers', badge: 'Update 3' },
  { icon: '🛡️', title: 'Anonymous Complaints', text: 'Report issues safely', badge: 'Update 4' },
]

const stats = [
  { label: 'Department', value: 'CSE' },
  { label: 'Semester', value: '5' },
  { label: 'Student ID', value: '241-115-001' },
]

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="md:w-64 bg-gradient-to-b from-sphere-950 to-sphere-900 text-white p-6 flex flex-col">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-aqua-300 to-aqua-500"></div>
          <span className="font-display text-2xl font-extrabold">
            Uni<span className="text-aqua-400">Sphere</span>
          </span>
        </div>

        <nav className="mt-8 flex md:flex-col gap-2 overflow-x-auto">
          {menuItems.map((item, index) => (
            <button
              key={item}
              className={
                'text-left whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition ' +
                (index === 0 ? 'bg-white/15 text-aqua-300' : 'text-sphere-100/70 hover:bg-white/10')
              }
            >
              {item}
            </button>
          ))}
        </nav>

        <Link to="/login" className="mt-6 md:mt-auto text-sm text-sphere-100/70 hover:text-aqua-300">
          Log out
        </Link>
      </aside>

      {/* Main area */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="bg-gradient-to-r from-sphere-700 to-sphere-900 text-white rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-aqua-400/30 blur-3xl"></div>
          <p className="relative text-sphere-100/80">Metropolitan University, Sylhet</p>
          <h1 className="relative font-display text-3xl lg:text-4xl font-bold mt-1">
            Welcome back, <span className="text-aqua-300">Student</span>
          </h1>
          <p className="relative mt-2 text-sphere-100/80">Here is your UniSphere at a glance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="font-display text-2xl font-bold text-sphere-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-xl font-bold text-sphere-950 mt-8 mb-4">Explore UniSphere</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <div
              key={action.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-aqua-400 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{action.icon}</span>
                <span className="text-xs font-semibold bg-sphere-100 text-sphere-700 px-3 py-1 rounded-full">
                  {action.badge}
                </span>
              </div>
              <p className="font-display font-bold text-sphere-950 mt-4">{action.title}</p>
              <p className="text-sm text-slate-500 mt-1">{action.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Dashboard