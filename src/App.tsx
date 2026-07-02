import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import PromptGenerator from './pages/PromptGenerator'
import PromptLibrary from './pages/PromptLibrary'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/generator" element={<PromptGenerator />} />
          <Route path="/library" element={<PromptLibrary />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
