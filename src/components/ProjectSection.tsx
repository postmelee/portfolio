import type { LinkItem, TimelineEntry } from '../data/portfolio'
import type { ReactNode } from 'react'
import { BulletList } from './BulletList'
import { ExternalResourceLink } from './ExternalResourceLink'
import { TechChipList } from './TechChip'
import { Text } from './Text'

type ProjectSectionProps = {
  entry: TimelineEntry
  omitId?: boolean
}

function LinkRail({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div className="link-rail">
      <Text as="span" variant="caption">{title}</Text>
      <div>
        {links.map((link) => (
          <ExternalResourceLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>
    </div>
  )
}

function ProjectResources({
  className,
  entry,
}: {
  className?: string
  entry: TimelineEntry
}) {
  if (!entry.url && !entry.links && !entry.awards) {
    return null
  }

  return (
    <div className={className ? `project-resources ${className}` : 'project-resources'}>
      {entry.url ? (
        <ExternalResourceLink className="project-url" href={entry.url} variant="primary" />
      ) : null}
      {entry.links ? <LinkRail title="Links" links={entry.links} /> : null}
      {entry.awards ? <LinkRail title="Awards" links={entry.awards} /> : null}
    </div>
  )
}

function ProjectMeta({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="project-meta">
      <Text as="h3" variant="projectTitle">{entry.title}</Text>
      {entry.role || entry.period ? (
        <div className="project-role">
          {entry.role ? (
            <Text as="div" variant="meta" className="project-role-line">
              <span>{entry.role}</span>
              {entry.status === 'maintaining' ? (
                <span className="project-status project-status-maintaining">
                  <span aria-hidden="true" />
                  Maintaining
                </span>
              ) : null}
            </Text>
          ) : null}
          {entry.period ? <Text as="div" variant="meta">{entry.period}</Text> : null}
        </div>
      ) : null}
      <ProjectResources className="project-resources-desktop" entry={entry} />
    </div>
  )
}

function ProjectDetailSection({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <section className="project-detail-section">
      <Text as="h4" variant="markdownH3" className="project-detail-title">
        {title}
      </Text>
      {children}
    </section>
  )
}

function ProjectSummary({ description }: { description: string }) {
  return (
    <div className="project-summary">
      <Text variant="body" className="project-description">{description}</Text>
    </div>
  )
}

function ProjectStackSection({ entry }: { entry: TimelineEntry }) {
  if (!entry.stacks) {
    return null
  }

  const highlightedStacks = entry.highlightedStacks ?? []
  const highlightedTooltip = '내가 구현 및 사용한 기술'

  return (
    <ProjectDetailSection title="사용 기술">
      <div className="project-stack-strip">
        <TechChipList
          className="project-stack-list"
          highlightedItems={highlightedStacks}
          highlightedTooltip={highlightedTooltip}
          items={entry.stacks}
        />
      </div>
    </ProjectDetailSection>
  )
}

function ProjectBody({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="project-body">
      {entry.description ? <ProjectSummary description={entry.description} /> : null}
      <ProjectStackSection entry={entry} />
      {entry.bullets.length > 0 ? (
        <ProjectDetailSection title="구현 내용">
          <BulletList items={entry.bullets} />
        </ProjectDetailSection>
      ) : null}
      <ProjectResources className="project-resources-mobile" entry={entry} />
    </div>
  )
}

export function ProjectSection({ entry, omitId = false }: ProjectSectionProps) {
  return (
    <article className="project-section" id={omitId ? undefined : entry.id}>
      <ProjectMeta entry={entry} />
      <ProjectBody entry={entry} />
    </article>
  )
}
