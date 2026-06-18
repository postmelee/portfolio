import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { navItems } from '../data/portfolio'
import { projectSections } from '../data/projects'
import { useActiveSection } from '../useActiveSection'

const sectionIds = navItems.map((item) => item.id)
const projectTocItems = projectSections
  .filter((section) => section.id !== 'experience')
  .map((section) => ({
    id: section.id,
    label: section.title.replace(/\s+Projects?$/, ''),
  }))
const projectTocIds = projectTocItems.map((item) => item.id)
const projectTocTransitionMs = 420

export const SectionToc = memo(function SectionToc() {
  const activeId = useActiveSection(sectionIds)
  const activeProjectGroupId = useActiveSection(projectTocIds)
  const tocListRef = useRef<HTMLOListElement | null>(null)
  const projectSublistRef = useRef<HTMLOListElement | null>(null)
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null)
  const isProjectsActive = activeId === 'projects'
  const [isProjectTocRendered, setIsProjectTocRendered] = useState(isProjectsActive)
  const [isProjectTocExpanded, setIsProjectTocExpanded] = useState(isProjectsActive)

  useEffect(() => {
    let frame = 0
    let closeTimer = 0

    if (isProjectsActive) {
      setIsProjectTocRendered(true)
      frame = window.requestAnimationFrame(() => {
        setIsProjectTocExpanded(true)
      })
    } else {
      setIsProjectTocExpanded(false)
      closeTimer = window.setTimeout(() => {
        setIsProjectTocRendered(false)
      }, projectTocTransitionMs)
    }

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
      if (closeTimer !== 0) {
        window.clearTimeout(closeTimer)
      }
    }
  }, [isProjectsActive])

  useLayoutEffect(() => {
    const sublist = projectSublistRef.current

    if (!sublist) {
      return
    }

    let frame = 0

    function syncProjectSublistWidth() {
      frame = 0
      const links = Array.from(sublist?.querySelectorAll<HTMLAnchorElement>('.section-toc-sublink') ?? [])
      const contentWidth = links.reduce(
        (right, link) => Math.max(right, link.offsetLeft + link.offsetWidth),
        0,
      )

      sublist?.style.setProperty('--section-toc-sublist-open-width', `${Math.ceil(contentWidth + 13)}px`)
    }

    function scheduleSync() {
      if (frame === 0) {
        frame = window.requestAnimationFrame(syncProjectSublistWidth)
      }
    }

    syncProjectSublistWidth()
    window.addEventListener('resize', scheduleSync)

    return () => {
      window.removeEventListener('resize', scheduleSync)
      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [])

  useLayoutEffect(() => {
    const tocList = tocListRef.current

    if (!tocList) {
      return
    }

    const activeLink = activeLinkRef.current
    const projectsItem = tocList.querySelector<HTMLElement>('.section-toc-item-projects')
    const targetElement = isProjectsActive ? projectsItem : activeLink

    if (!targetElement) {
      return
    }

    const tocRect = tocList.getBoundingClientRect()
    const targetRect = targetElement.getBoundingClientRect()
    const nextLeft = isProjectsActive
      ? tocList.scrollLeft + targetRect.left - tocRect.left
      : tocList.scrollLeft + targetRect.left - tocRect.left - (tocRect.width - targetRect.width) / 2
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    tocList.scrollTo({
      left: Math.max(0, nextLeft),
      behavior: isProjectsActive || prefersReducedMotion ? 'auto' : 'smooth',
    })
  }, [activeId, isProjectsActive])

  const tocClassName = [
    'section-toc',
    isProjectsActive ? 'section-toc-projects-open' : '',
    isProjectTocRendered ? 'section-toc-projects-visible' : '',
    isProjectTocExpanded ? 'section-toc-projects-expanded' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav
      className={tocClassName}
      aria-label="페이지 목차"
    >
      <ol className="section-toc-list" ref={tocListRef}>
        {navItems.map((item) => {
          const isActive = activeId === item.id
          const isProjectsItem = item.id === 'projects'
          const linkClassName = isActive
            ? 'section-toc-link section-toc-link-active'
            : 'section-toc-link'

          return (
            <li
              className={isProjectsItem ? 'section-toc-item section-toc-item-projects' : 'section-toc-item'}
              key={item.id}
            >
              <a
                ref={!isProjectsActive && isActive ? activeLinkRef : undefined}
                aria-controls={isProjectsItem ? 'section-toc-project-list' : undefined}
                aria-current={isActive ? 'location' : undefined}
                aria-expanded={isProjectsItem ? isProjectsActive : undefined}
                className={linkClassName}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
              {isProjectsItem ? (
                <ol
                  ref={projectSublistRef}
                  aria-hidden={!isProjectsActive}
                  aria-label="프로젝트 목차"
                  className="section-toc-sublist"
                  id="section-toc-project-list"
                >
                  {projectTocItems.map((project) => {
                    const isProjectActive = isProjectsActive && activeProjectGroupId === project.id

                    return (
                      <li key={project.id}>
                        <a
                          aria-current={isProjectActive ? 'location' : undefined}
                          className={
                            isProjectActive
                              ? 'section-toc-sublink section-toc-sublink-active'
                              : 'section-toc-sublink'
                          }
                          href={`#${project.id}`}
                          tabIndex={isProjectsActive ? undefined : -1}
                        >
                          {project.label}
                        </a>
                      </li>
                    )
                  })}
                </ol>
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
})
