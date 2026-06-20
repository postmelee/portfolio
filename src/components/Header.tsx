import { memo } from 'react'
import {
  Mail,
  NotebookPen,
} from 'lucide-react'
import profileImage from '../assets/profile-about.jpg'
import { contactLinks } from '../data/portfolio'
import { GitHubLogo, LiquidPortfolioIcon, type IconComponent } from './icons'

type HeaderAction = {
  Icon: IconComponent
  href: string
  label: string
}

type HeaderActionCandidate = Omit<HeaderAction, 'href'> & {
  href?: string
}

type HeaderContentProps = {
  showActions?: boolean
}

const contactHrefByLabel = new Map(contactLinks.map((link) => [link.label, link.href]))

const headerActionCandidates: HeaderActionCandidate[] = [
  { Icon: LiquidPortfolioIcon, href: contactHrefByLabel.get('Liquid Portfolio'), label: 'Liquid Portfolio' },
  { Icon: GitHubLogo, href: contactHrefByLabel.get('Github'), label: 'GitHub' },
  { Icon: NotebookPen, href: contactHrefByLabel.get('Blog'), label: 'Blog' },
  { Icon: Mail, href: contactHrefByLabel.get('Email'), label: 'Email' },
]

const headerActions = headerActionCandidates.filter((action): action is HeaderAction => Boolean(action.href))

export const HeaderContent = memo(function HeaderContent({
  showActions = false,
}: HeaderContentProps) {
  return (
    <div className="header-content">
      <a className="brand-link" href="#top" aria-label="상단으로 이동">
        <span className="header-avatar" aria-hidden="true">
          <img src={profileImage} alt="" />
        </span>
        <strong>이태규</strong>
        <span className="brand-role">Frontend Developer</span>
      </a>
      <nav
        aria-hidden={!showActions}
        className={`header-actions ${showActions ? 'header-actions-visible' : ''}`}
        aria-label="외부 링크"
      >
        {headerActions.map((action) => {
          const isExternal = !action.href.startsWith('mailto:')

          return (
            <a
              className="header-action-link"
              href={action.href}
              key={action.label}
              rel={isExternal ? 'noreferrer' : undefined}
              tabIndex={showActions ? undefined : -1}
              target={isExternal ? '_blank' : undefined}
            >
              <action.Icon className="header-action-icon" strokeWidth={1.85} aria-hidden="true" />
              <span>{action.label}</span>
            </a>
          )
        })}
      </nav>
      <div aria-hidden="true" className="header-menu-slot" />
    </div>
  )
})
