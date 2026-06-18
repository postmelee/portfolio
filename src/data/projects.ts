import projectsData from './projects.json'
import type { TimelineEntry } from './portfolio'

export type ProjectSectionData = {
  id: string
  title: string
  entries: TimelineEntry[]
}

type ProjectsData = {
  sections: ProjectSectionData[]
}

export const projectSections = (projectsData as ProjectsData).sections
export const projectEntries = projectSections.flatMap((section) => section.entries)
