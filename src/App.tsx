import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'

function Nav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isProjects = pathname === '/projects'

  return (
    <nav className="nav">
      <div className="toggle">
        <div className={`toggle-thumb${isProjects ? ' right' : ''}`} />
        <button
          className={`toggle-label${!isProjects ? ' active' : ''}`}
          onClick={() => navigate('/')}
        >
          About
        </button>
        <button
          className={`toggle-label${isProjects ? ' active' : ''}`}
          onClick={() => navigate('/projects')}
        >
          Projects
        </button>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="layout">
      <Nav />
      <main className="content">
        <Routes>
          <Route path="/" element={<section className="page about" />} />
          <Route path="/projects" element={<section className="page projects" />} />
        </Routes>
      </main>
    </div>
  )
}
