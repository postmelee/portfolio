import { getTechnologyLink } from '../data/technologyLinks'

type TechChipProps = {
  highlighted?: boolean
  label: string
  linkHref?: string
  tooltip?: string
}

export function TechChip({
  highlighted = false,
  label,
  linkHref,
  tooltip,
}: TechChipProps) {
  const classes = [
    'tech-chip',
    highlighted ? 'tech-chip-highlighted' : null,
    linkHref ? 'tech-chip-link' : null,
    tooltip ? 'tech-chip-with-tooltip' : null,
  ].filter(Boolean).join(' ')
  const content = (
    <>
      <span>{label}</span>
      {tooltip ? (
        <span className="tech-chip-tooltip" role="tooltip">
          {tooltip}
        </span>
      ) : null}
    </>
  )

  if (linkHref) {
    return (
      <a
        aria-label={tooltip ? `${label}: ${tooltip}` : undefined}
        className={classes}
        href={linkHref}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    )
  }

  return (
    <span
      aria-label={tooltip ? `${label}: ${tooltip}` : undefined}
      className={classes}
      tabIndex={tooltip ? 0 : undefined}
    >
      {content}
    </span>
  )
}

type TechChipListProps = {
  ariaLabel?: string
  className?: string
  highlightedItems?: readonly string[]
  highlightedTooltip?: string
  items: readonly string[]
}

export function TechChipList({
  ariaLabel = '기술 스택',
  className,
  highlightedItems,
  highlightedTooltip,
  items,
}: TechChipListProps) {
  const highlightedSet = new Set(highlightedItems ?? [])

  return (
    <div className={className ? `tech-chip-list ${className}` : 'tech-chip-list'} aria-label={ariaLabel}>
      {items.map((item) => (
        <TechChip
          highlighted={highlightedSet.has(item)}
          key={item}
          label={item}
          linkHref={getTechnologyLink(item)}
          tooltip={highlightedSet.has(item) ? highlightedTooltip : undefined}
        />
      ))}
    </div>
  )
}
