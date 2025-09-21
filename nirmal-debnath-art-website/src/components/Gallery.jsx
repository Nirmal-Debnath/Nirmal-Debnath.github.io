import { useMemo, useState } from 'react'
import { buildGallery } from '../utils/galleryFromGlob.js'

function ZoomModal({ open, onClose, painting }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={onClose}>
      <img
        src={painting.src}
        alt={painting.title}
        className="max-h-[90vh] max-w-[95vw] select-none"
        draggable="false"
        onClick={(e)=>e.stopPropagation()}
      />
    </div>
  )
}

function PaintingCard({ p, onZoom }) {
  return (
    <div className="group relative rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={p.src}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
          draggable="false"
          onClick={()=>onZoom(p)}
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0" />
      </div>
      <div className="p-3">
        <div className="text-sm font-medium">{p.title}</div>
        <div className="text-xs opacity-70">{p.medium || ''}</div>
      </div>
    </div>
  )
}

export default function Gallery() {
  // Build once at runtime (build-time discovery via Vite glob)
  const sections = useMemo(() => buildGallery(), [])
  const [zoom, setZoom] = useState(null)

  return (
    <div className="space-y-8">
      {sections.length === 0 && <p className="text-sm opacity-70">No artworks found. Add images under src/assets/images/&lt;section&gt;/</p>}
      {sections.map(sec => (
        <section key={sec.id} className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">{sec.title}</h2>
          {sec.items.length===0 ? (
            <p className="text-sm opacity-70">No artworks yet.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {sec.items.map(p => (
                <PaintingCard key={p.id} p={p} onZoom={setZoom} />
              ))}
            </div>
          )}
        </section>
      ))}
      <ZoomModal open={!!zoom} painting={zoom} onClose={()=>setZoom(null)} />
    </div>
  )
}