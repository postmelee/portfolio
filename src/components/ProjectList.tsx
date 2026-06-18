import type { TimelineEntry } from '../data/portfolio'
import { ProjectSection } from './ProjectSection'

type ProjectListProps = {
  entries: TimelineEntry[]
  omitIds?: boolean
}

export function ProjectList({ entries, omitIds = false }: ProjectListProps) {
  return (
    <div className="project-list">
      {entries.map((entry) => (
        <ProjectSection key={entry.id} entry={entry} omitId={omitIds} />
      ))}
    </div>
  )
}
