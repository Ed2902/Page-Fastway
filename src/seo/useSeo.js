import { useEffect } from 'react'

const SITE_URL = 'https://www.fastwaysas.com'

export function useSeo({
  title,
  description,
  canonicalPath,
  robots = 'index,follow',
}) {
  useEffect(() => {
    if (title) document.title = title

    const upsert = (selector, create) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = create()
        document.head.appendChild(el)
      }
      return el
    }

    if (description) {
      const metaDesc = upsert('meta[name="description"]', () => {
        const m = document.createElement('meta')
        m.setAttribute('name', 'description')
        return m
      })
      metaDesc.setAttribute('content', description)
    }

    const metaRobots = upsert('meta[name="robots"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('name', 'robots')
      return m
    })
    metaRobots.setAttribute('content', robots)

    if (canonicalPath) {
      const canonicalUrl =
        canonicalPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${canonicalPath}`

      const linkCanon = upsert('link[rel="canonical"]', () => {
        const l = document.createElement('link')
        l.setAttribute('rel', 'canonical')
        return l
      })
      linkCanon.setAttribute('href', canonicalUrl)
    }
  }, [title, description, canonicalPath, robots])
}
