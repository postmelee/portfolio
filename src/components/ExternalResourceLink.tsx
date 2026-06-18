import { useState } from 'react'
import {
  Apple,
  ExternalLink,
  Globe,
  Video,
} from 'lucide-react'
import { GitHubLogo, NotionLogo, type IconComponent } from './icons'

type ExternalResourceLinkProps = {
  className?: string
  href: string
  label?: string
  variant?: 'primary' | 'secondary'
}

type ResourceMeta = {
  Icon: IconComponent
  label: string
  useFavicon: boolean
}

const providerRules: Array<{
  Icon: IconComponent
  label: string
  pattern: RegExp
  preferProviderLabel?: boolean
  useFavicon?: boolean
}> = [
  { Icon: GitHubLogo, label: 'GitHub', pattern: /(^|\.)github\.com$/, preferProviderLabel: true, useFavicon: false },
  { Icon: Globe, label: 'Website', pattern: /(^|\.)github\.io$/ },
  { Icon: Video, label: 'YouTube', pattern: /(^|\.)youtube\.com$|(^|\.)youtu\.be$/ },
  { Icon: NotionLogo, label: 'Notion', pattern: /(^|\.)notion\.site$|(^|\.)notion\.com$/, useFavicon: false },
  { Icon: Apple, label: 'App Store', pattern: /(^|\.)apps\.apple\.com$/ },
]

function getUrl(href: string) {
  try {
    return new URL(href)
  } catch {
    return null
  }
}

function getReadableHost(hostname: string) {
  return hostname.replace(/^www\./, '')
}

function getFaviconUrl(hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=32`
}

function getResourceMeta(href: string, label?: string): ResourceMeta & { faviconUrl?: string } {
  const url = getUrl(href)

  if (!url) {
    return {
      Icon: ExternalLink,
      label: label ?? href,
      useFavicon: false,
    }
  }

  const hostname = getReadableHost(url.hostname)
  const provider = providerRules.find((rule) => rule.pattern.test(hostname))

  if (provider) {
    return {
      Icon: provider.Icon,
      faviconUrl: getFaviconUrl(hostname),
      label: provider.preferProviderLabel ? provider.label : label ?? provider.label,
      useFavicon: provider.useFavicon ?? true,
    }
  }

  return {
    Icon: Globe,
    faviconUrl: getFaviconUrl(hostname),
    label: label ?? hostname,
    useFavicon: true,
  }
}

export function ExternalResourceLink({
  className,
  href,
  label,
  variant = 'secondary',
}: ExternalResourceLinkProps) {
  const [faviconFailed, setFaviconFailed] = useState(false)
  const meta = getResourceMeta(href, label)
  const isExternal = /^https?:\/\//.test(href)
  const shouldShowFavicon = meta.useFavicon && meta.faviconUrl && !faviconFailed
  const classes = [
    'resource-link',
    `resource-link-${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <a
      className={classes}
      href={href}
      rel={isExternal ? 'noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      title={label && label !== meta.label ? label : undefined}
    >
      <span className="resource-link-icon" aria-hidden="true">
        {shouldShowFavicon ? (
          <img
            alt=""
            className="resource-link-favicon"
            loading="lazy"
            onError={() => setFaviconFailed(true)}
            referrerPolicy="no-referrer"
            src={meta.faviconUrl}
          />
        ) : (
          <meta.Icon strokeWidth={1.8} />
        )}
      </span>
      <span>{meta.label}</span>
      <ExternalLink className="resource-link-external" strokeWidth={1.8} aria-hidden="true" />
    </a>
  )
}
