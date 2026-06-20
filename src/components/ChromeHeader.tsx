import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  Check,
  Copy,
  ExternalLink,
  Home,
  Mail,
  NotebookPen,
} from 'lucide-react'
import { contactLinks } from '../data/portfolio'
import { HeaderContent } from './Header'
import { GitHubLogo, LiquidPortfolioIcon, type IconComponent } from './icons'

function MoreDotsIcon() {
  return (
    <svg
      className="menu-trigger-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="4.75" cy="12" r="2.2" />
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="19.25" cy="12" r="2.2" />
    </svg>
  )
}

type MenuItem = {
  external?: boolean
  href?: string
  Icon: IconComponent
  label: string
  onSelect?: 'copyEmail'
  shortcut?: string
}

type CopyToastStatus = 'idle' | 'copied' | 'failed'

const contactHrefByLabel = new Map(contactLinks.map((link) => [link.label, link.href]))
const emailHref = contactHrefByLabel.get('Email')
const emailAddress = emailHref?.startsWith('mailto:') ? emailHref.replace('mailto:', '') : undefined

const menuItems: MenuItem[] = [
  { Icon: Home, href: '#top', label: '홈으로' },
  ...(emailAddress ? [{ Icon: Copy, label: '이메일 복사', onSelect: 'copyEmail' as const }] : []),
  {
    Icon: LiquidPortfolioIcon,
    external: true,
    href: contactHrefByLabel.get('Liquid Portfolio'),
    label: 'Liquid Portfolio',
  },
  {
    Icon: NotebookPen,
    external: true,
    href: contactHrefByLabel.get('Blog'),
    label: '블로그',
  },
  {
    Icon: GitHubLogo,
    external: true,
    href: contactHrefByLabel.get('Github'),
    label: 'GitHub',
  },
  {
    Icon: Mail,
    external: true,
    href: contactHrefByLabel.get('Email'),
    label: '이메일 보내기',
  },
]

export function ChromeHeader() {
  const [open, setOpen] = useState(false)
  const [copyToastStatus, setCopyToastStatus] = useState<CopyToastStatus>('idle')
  const [showHeaderActions, setShowHeaderActions] = useState(false)
  const copyToastTimerRef = useRef<number | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => () => {
    if (copyToastTimerRef.current !== null) {
      window.clearTimeout(copyToastTimerRef.current)
    }
  }, [])

  useEffect(() => {
    const aboutSection = document.getElementById('about')

    if (!aboutSection) {
      setShowHeaderActions(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeaderActions(entry.intersectionRatio < 0.18)
      },
      {
        threshold: [0, 0.18, 0.5, 0.75],
      },
    )

    observer.observe(aboutSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        headerRef.current?.contains(event.target)
      ) {
        return
      }

      setOpen(false)
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function showCopyToast(status: Exclude<CopyToastStatus, 'idle'>) {
    if (copyToastTimerRef.current !== null) {
      window.clearTimeout(copyToastTimerRef.current)
    }

    setCopyToastStatus(status)
    copyToastTimerRef.current = window.setTimeout(() => {
      setCopyToastStatus('idle')
      copyToastTimerRef.current = null
    }, 1400)
  }

  async function handleMenuItemSelect(item: MenuItem) {
    if (item.onSelect === 'copyEmail') {
      try {
        if (!emailAddress) {
          setOpen(false)
          return
        }

        await copyTextToClipboard(emailAddress)
        showCopyToast('copied')
      } catch {
        showCopyToast('failed')
      } finally {
        setOpen(false)
      }
      return
    }

    setOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className={`site-header ${open ? 'site-header-menu-open' : ''}`}
    >
      <HeaderContent showActions={showHeaderActions} />
      <div className={`header-menu ${open ? 'header-menu-open' : ''}`}>
        <button
          aria-expanded={open}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          className="menu-trigger"
          type="button"
          onClick={() => setOpen((current) => !current)}
        >
          <MoreDotsIcon />
        </button>

        <div
          aria-hidden={!open}
          className={`menu-panel ${open ? 'menu-panel-open' : ''}`}
          inert={!open}
        >
          <nav className="menu-content" aria-label="빠른 메뉴">
            <MenuSection>
              {menuItems.map((item) => (
                <MenuRow
                  key={item.label}
                  item={item}
                  onSelect={() => void handleMenuItemSelect(item)}
                />
              ))}
            </MenuSection>
          </nav>
        </div>
      </div>
      {copyToastStatus !== 'idle' ? (
        <div className={`copy-toast copy-toast-${copyToastStatus}`} role="status">
          {copyToastStatus === 'copied' ? (
            <Check className="copy-toast-icon" strokeWidth={2.1} aria-hidden="true" />
          ) : (
            <Copy className="copy-toast-icon" strokeWidth={1.9} aria-hidden="true" />
          )}
          <span>{copyToastStatus === 'copied' ? '이메일이 복사되었습니다' : '복사에 실패했습니다'}</span>
        </div>
      ) : null}
    </header>
  )
}

function MenuSection({
  children,
  separated,
}: {
  children: ReactNode
  separated?: boolean
}) {
  return (
    <>
      {separated ? <div className="menu-divider" /> : null}
      <div className="menu-section">{children}</div>
    </>
  )
}

function MenuRow({
  item,
  onSelect,
}: {
  item: MenuItem
  onSelect: () => void
}) {
  const shouldOpenNewTab = item.external && !item.href?.startsWith('mailto:')
  const isEmailCopyItem = item.onSelect === 'copyEmail'
  const content = (
    <>
      <item.Icon
        className="menu-icon"
        strokeWidth={isEmailCopyItem ? 1.9 : 1.8}
        aria-hidden="true"
      />
      <span>{item.label}</span>
      {item.shortcut ? <kbd>{item.shortcut}</kbd> : null}
      {item.external ? (
        <ExternalLink className="menu-action-icon" strokeWidth={1.7} aria-hidden="true" />
      ) : null}
    </>
  )

  if (item.href) {
    return (
      <a
        className="menu-row"
        href={item.href}
        onClick={onSelect}
        rel={shouldOpenNewTab ? 'noreferrer' : undefined}
        target={shouldOpenNewTab ? '_blank' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button className="menu-row" type="button" onClick={onSelect}>
      {content}
    </button>
  )
}

async function copyTextToClipboard(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return
    }
  } catch {
    // Fall back to the textarea copy path below.
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '-999px'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    document.execCommand('copy')
  } finally {
    document.body.removeChild(textarea)
  }
}
