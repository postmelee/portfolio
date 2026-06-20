import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowUp,
  Check,
  Copy,
  ExternalLink,
  Mail,
  NotebookPen,
} from 'lucide-react'
import { BulletList } from './components/BulletList'
import { ChromeHeader } from './components/ChromeHeader'
import { ProjectList } from './components/ProjectList'
import { SectionTitle } from './components/SectionTitle'
import { SectionToc } from './components/SectionToc'
import { SimpleEntryList } from './components/SimpleEntryList'
import { SkillsSection } from './components/SkillsSection'
import { Text } from './components/Text'
import { GitHubLogo, LiquidPortfolioIcon, type IconComponent } from './components/icons'
import {
  aboutBullets,
  awards,
  contactLinks,
  education,
  heroStatement,
  skills,
} from './data/portfolio'
import { projectSections } from './data/projects'
import { ACTIVE_SECTION_SYNC_EVENT } from './useActiveSection'

const contactIconByLabel = new Map<string, IconComponent>([
  ['Email', Mail],
  ['Liquid Portfolio', LiquidPortfolioIcon],
  ['Github', GitHubLogo],
  ['Blog', NotebookPen],
])

const workSection = projectSections.find((section) => section.id === 'experience')
const portfolioProjectSections = projectSections.filter((section) => section.id !== 'experience')

function App() {
  useLayoutEffect(() => {
    function requestActiveSectionSync() {
      window.requestAnimationFrame(() => {
        window.dispatchEvent(new Event(ACTIVE_SECTION_SYNC_EVENT))
      })
    }

    function readScrollOffset() {
      const scrollPaddingTop = Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop,
      )

      return Number.isFinite(scrollPaddingTop) ? scrollPaddingTop : 24
    }

    function scrollToPosition(top: number, behavior: ScrollBehavior) {
      if (behavior !== 'auto') {
        window.scrollTo({ top, behavior })
        return
      }

      const root = document.documentElement
      const previousScrollBehavior = root.style.scrollBehavior

      root.style.scrollBehavior = 'auto'
      window.scrollTo({ top, behavior })
      window.requestAnimationFrame(() => {
        root.style.scrollBehavior = previousScrollBehavior
      })
    }

    function scrollToHash(hash: string, behavior: ScrollBehavior) {
      if (hash === '#top') {
        scrollToPosition(0, behavior)
        requestActiveSectionSync()
        return true
      }

      const element = document.getElementById(hash.slice(1))
      if (!element) {
        return false
      }

      const top = element.getBoundingClientRect().top + window.scrollY
      scrollToPosition(Math.max(0, top - readScrollOffset()), behavior)
      requestActiveSectionSync()
      return true
    }

    function handleAnchorClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) {
        return
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) {
        return
      }

      const href = anchor.getAttribute('href')
      if (!href || href === '#') {
        return
      }

      event.preventDefault()
      if (scrollToHash(href, 'smooth')) {
        window.history.replaceState(null, '', '#top')
        if (href !== '#top') {
          window.history.replaceState(null, '', href)
        }
      }
    }

    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        scrollToHash(window.location.hash, 'auto')
      })
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <>
      <ChromeHeader />
      <SectionToc />
      <PortfolioDocument />
    </>
  )
}

function PortfolioDocument() {
  return (
    <div
      className="page-shell portfolio-page"
      id="top"
    >
      <main>
        <section className="hero-section" id="about">
          <div className="hero-copy">
            <Text as="h1" variant="display">
              <span className="hero-title-line">제품과 오픈소스를 만드는 </span>
              <PressureTitleText
                className="hero-title-line hero-title-emphasis"
                text="프론트엔드 개발자"
              />
            </Text>
            <Text className="hero-statement">{heroStatement}</Text>
            <BulletList items={aboutBullets} />
            <ContactSection />
          </div>
        </section>

        <section className="content-section" id="skills">
          <SectionTitle title="Skills" />
          <SkillsSection groups={skills} />
        </section>

        {workSection ? (
          <section className="timeline-section" id={workSection.id}>
            <SectionTitle title={workSection.title} />
            <ProjectList entries={workSection.entries} />
          </section>
        ) : null}

        <section className="timeline-section projects-section" id="projects">
          <SectionTitle title="Projects" />
          <div className="project-category-list">
            {portfolioProjectSections.map((section) => (
              <section
                className="project-category"
                id={section.id === 'projects' ? undefined : section.id}
                key={section.id}
              >
                <Text as="h3" variant="markdownH2" className="project-category-title">
                  {section.title}
                </Text>
                <ProjectList entries={section.entries} />
              </section>
            ))}
          </div>
        </section>

        <section className="content-section" id="awards">
          <SectionTitle title="Awards and Honors" />
          <SimpleEntryList entries={awards} />
        </section>

        <section className="content-section education-section" id="education">
          <SectionTitle title="Education" />
          <SimpleEntryList entries={education} />
        </section>

        <FooterContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

function PressureTitleText({
  className,
  text,
}: {
  className?: string
  text: string
}) {
  const containerRef = useRef<HTMLSpanElement | null>(null)
  const characterRefs = useRef<Array<HTMLSpanElement | null>>([])
  const isPressureActiveRef = useRef(false)

  function resetPressure() {
    characterRefs.current.forEach((character) => {
      character?.style.removeProperty('--pressure-weight')
    })
  }

  function updatePressure(clientX: number, clientY: number) {
    const container = containerRef.current
    if (!container) {
      return
    }

    const containerRect = container.getBoundingClientRect()
    const influenceRadius = Math.max(containerRect.width * 0.42, 92)

    characterRefs.current.forEach((character) => {
      if (!character) {
        return
      }

      const rect = character.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distance = Math.hypot(clientX - centerX, clientY - centerY)
      const pressure = Math.max(0, 1 - distance / influenceRadius)
      const easedPressure = pressure * pressure * (3 - 2 * pressure)
      const weight = Math.round(700 - easedPressure * 600)

      character.style.setProperty('--pressure-weight', String(weight))
    })
  }

  useEffect(() => {
    function handleWindowPointerMove(event: PointerEvent) {
      const container = containerRef.current
      if (!container) {
        return
      }

      const rect = container.getBoundingClientRect()
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom

      if (isInside) {
        isPressureActiveRef.current = true
        updatePressure(event.clientX, event.clientY)
        return
      }

      if (isPressureActiveRef.current) {
        isPressureActiveRef.current = false
        resetPressure()
      }
    }

    window.addEventListener('pointermove', handleWindowPointerMove)

    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove)
    }
  }, [])

  const classes = className ? `${className} pressure-title` : 'pressure-title'

  return (
    <span
      ref={containerRef}
      className={classes}
      aria-label={text}
      onPointerEnter={(event) => updatePressure(event.clientX, event.clientY)}
      onPointerMove={(event) => updatePressure(event.clientX, event.clientY)}
      onPointerLeave={resetPressure}
    >
      {Array.from(text).map((character, index) => (
        <span
          key={`${character}-${index}`}
          ref={(node) => {
            characterRefs.current[index] = node
          }}
          className={
            character === ' '
              ? 'pressure-title-character pressure-title-space'
              : 'pressure-title-character'
          }
          aria-hidden="true"
        >
          {character === ' ' ? '\u00A0' : character}
        </span>
      ))}
    </span>
  )
}

function ContactSection() {
  const emailLink = contactLinks.find((link) => link.href.startsWith('mailto:'))
  const emailAddress = emailLink?.href.replace('mailto:', '')

  return (
    <section className="contact-block" aria-labelledby="contact-title">
      <Text as="h2" variant="caption" className="contact-title" id="contact-title">
        Contact
      </Text>
      {emailAddress && emailLink ? (
        <EmailContactLine emailAddress={emailAddress} href={emailLink.href} />
      ) : null}
      <div className="contact-links-block">
        <Text as="h3" variant="caption" className="contact-title">
          Links
        </Text>
        <ContactLinkList hiddenLabels={new Set(['Email'])} />
      </div>
    </section>
  )
}

function EmailContactLine({
  emailAddress,
  href,
}: {
  emailAddress: string
  href: string
}) {
  return (
    <div className="contact-email-row">
      <a className="contact-email contact-email-link" href={href} aria-label="이메일 보내기">
        <Mail className="contact-email-icon" strokeWidth={1.8} aria-hidden="true" />
        <span>{emailAddress}</span>
      </a>
      <EmailCopyButton emailAddress={emailAddress} />
    </div>
  )
}

function EmailCopyButton({
  className,
  emailAddress,
}: {
  className?: string
  emailAddress: string
}) {
  const [copied, setCopied] = useState(false)
  const resetTimerRef = useRef<number | null>(null)
  const classes = [
    'contact-copy-button',
    className,
    copied ? 'contact-copy-button-copied' : undefined,
  ].filter(Boolean).join(' ')

  useEffect(() => () => {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current)
    }
  }, [])

  async function handleCopy() {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current)
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = emailAddress
        textarea.setAttribute('readonly', '')
        textarea.style.position = 'fixed'
        textarea.style.top = '-999px'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }

      setCopied(true)
      resetTimerRef.current = window.setTimeout(() => {
        setCopied(false)
        resetTimerRef.current = null
      }, 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      className={classes}
      type="button"
      aria-label="이메일 주소 복사"
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="contact-copy-icon" strokeWidth={2.1} aria-hidden="true" />
      ) : (
        <Copy className="contact-copy-icon" strokeWidth={1.9} aria-hidden="true" />
      )}
      <span>{copied ? '복사됨' : '복사'}</span>
    </button>
  )
}

function FooterContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)
  const emailLink = contactLinks.find((link) => link.href.startsWith('mailto:'))
  const emailAddress = emailLink?.href.replace('mailto:', '')
  const backToTopClassName = [
    'footer-back-to-top',
    isBackToTopVisible ? 'footer-back-to-top-visible' : undefined,
  ].filter(Boolean).join(' ')

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    if (!('IntersectionObserver' in window)) {
      setIsBackToTopVisible(true)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsBackToTopVisible(Boolean(entry?.isIntersecting))
    }, { threshold: 0.16 })

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="footer-contact-section"
      id="contact"
      aria-labelledby="footer-contact-title"
    >
      <div className="footer-contact-content">
        <Text as="h2" variant="caption" className="footer-contact-eyebrow" id="footer-contact-title">
          Contact
        </Text>
        <Text as="p" variant="markdownH1" className="footer-contact-heading">
          함께 해결할 문제가 있다면
        </Text>
        {emailAddress && emailLink ? (
          <div className="footer-contact-email-row">
            <a className="footer-contact-email" href={emailLink.href}>
              {emailAddress}
            </a>
            <EmailCopyButton
              className="footer-contact-copy-button"
              emailAddress={emailAddress}
            />
          </div>
        ) : null}
        <Text className="footer-contact-note">
          제품, 오픈소스, 프론트엔드 개발과 관련된 이야기를 편하게 보내주세요.
        </Text>
      </div>
      <a
        className={backToTopClassName}
        href="#top"
        aria-hidden={!isBackToTopVisible}
        aria-label="맨 위로 이동"
        tabIndex={isBackToTopVisible ? undefined : -1}
      >
        <ArrowUp className="footer-back-to-top-icon" strokeWidth={1.9} aria-hidden="true" />
        <span>맨 위로</span>
      </a>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="사이트 정보">
      <span>© 2026. 이태규</span>
      <span>Frontend Developer</span>
    </footer>
  )
}

function ContactLinkList({
  className,
  hiddenLabels,
}: {
  className?: string
  hiddenLabels?: ReadonlySet<string>
}) {
  const classes = className ? `contact-row ${className}` : 'contact-row'

  return (
    <div className={classes}>
      {contactLinks.filter((link) => !hiddenLabels?.has(link.label)).map((link) => {
        const Icon = contactIconByLabel.get(link.label) ?? ExternalLink
        const isExternal = !link.href.startsWith('mailto:')
        const displayLabel = link.label === 'Github' ? 'GitHub' : link.label

        return (
          <a
            key={link.href}
            className="contact-link"
            href={link.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
          >
            <Icon className="contact-icon" strokeWidth={1.8} aria-hidden="true" />
            <span>{displayLabel}</span>
            {isExternal ? (
              <ExternalLink className="contact-action-icon" strokeWidth={1.7} aria-hidden="true" />
            ) : null}
          </a>
        )
      })}
    </div>
  )
}

export default App
