// src/App.jsx
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [page, setPage] = useState('gallery')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const blockCtx = (e) => e.preventDefault()
    document.addEventListener('contextmenu', blockCtx)
    return () => document.removeEventListener('contextmenu', blockCtx)
  }, [])

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Nirmal Debnath</div>
          <nav className="flex items-center gap-4">
            <button onClick={()=>setPage('gallery')} className={`text-sm ${page==='gallery'?'underline':''}`}>Gallery</button>
            <button onClick={()=>setPage('about')} className={`text-sm ${page==='about'?'underline':''}`}>About</button>
            <button onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="px-3 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm">
              {theme==='dark'?'Light':'Dark'}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {page==='gallery' ? <Gallery /> : <About />}
      </main>

      <footer className="border-t border-neutral-200/60 dark:border-neutral-800 py-6">
        <div className="max-w-6xl mx-auto px-4 text-xs opacity-70">© {new Date().getFullYear()} Nirmal Debnath</div>
      </footer>
    </div>
  )
}