// Build sections dynamically from the images folder using Vite glob imports.
// Place images under src/assets/images/<section>/<filename>.(jpg|jpeg|png|webp|gif|svg)

function titleCase(s) {
  return s
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

export function buildGallery() {
  // Eager import returns a map of path -> module (with default export as URL)
  // Adjust extensions as needed.
  const modules = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp,gif,svg}', { eager: true, query: '?url' })

  // Map: sectionId -> { id, title, items: [] }
  const sectionsMap = new Map()

  for (const [path, mod] of Object.entries(modules)) {
    // Example path: "../assets/images/soft-pastel/sp1.jpg"
    const parts = path.split('/')
    const idx = parts.indexOf('images')
    if (idx === -1 || idx + 1 >= parts.length) continue
    const sectionId = parts[idx + 1] // "soft-pastel"
    const fileName = parts[parts.length - 1] // "sp1.jpg"

    const sectionTitle = titleCase(sectionId)
    const itemTitle = titleCase(fileName.replace(/\.[^.]+$/, ''))

    if (!sectionsMap.has(sectionId)) {
      sectionsMap.set(sectionId, { id: sectionId, title: sectionTitle, items: [] })
    }
    const section = sectionsMap.get(sectionId)
    section.items.push({
      id: `${sectionId}-${itemTitle}`.toLowerCase().replace(/\s+/g, '-'),
      title: itemTitle,
      medium: sectionTitle,
      src: mod.default || mod, // Vite gives URL on default export
    })
  }

  // Sort sections alphabetically; sort items by title
  const sections = Array.from(sectionsMap.values())
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((sec) => ({
      ...sec,
      items: sec.items.sort((a, b) => a.title.localeCompare(b.title)),
    }))

  return sections
}