import { useEffect, useState } from 'react'

export const ACTIVE_SECTION_SYNC_EVENT = 'portfolio-active-section-sync'

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (sectionIds.length === 0) {
      return
    }

    let frame = 0
    let initialSyncTimer = 0
    let current = sectionIds[0] ?? ''

    function readActiveSection() {
      frame = 0
      const anchorY = window.scrollY + Math.max(180, window.innerHeight * 0.34)
      let next = sectionIds[0] ?? ''

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) {
          continue
        }

        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= anchorY) {
          next = id
        }
      }

      if (next !== current) {
        current = next
        setActiveId(next)
      }
    }

    function scheduleRead() {
      if (frame === 0) {
        frame = window.requestAnimationFrame(readActiveSection)
      }
    }

    readActiveSection()
    initialSyncTimer = window.setTimeout(scheduleRead, 120)
    window.addEventListener('scroll', scheduleRead, { passive: true })
    window.addEventListener('resize', scheduleRead)
    window.addEventListener('hashchange', scheduleRead)
    window.addEventListener(ACTIVE_SECTION_SYNC_EVENT, scheduleRead)

    return () => {
      window.removeEventListener('scroll', scheduleRead)
      window.removeEventListener('resize', scheduleRead)
      window.removeEventListener('hashchange', scheduleRead)
      window.removeEventListener(ACTIVE_SECTION_SYNC_EVENT, scheduleRead)
      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
      if (initialSyncTimer !== 0) {
        window.clearTimeout(initialSyncTimer)
      }
    }
  }, [sectionIds])

  return activeId
}
