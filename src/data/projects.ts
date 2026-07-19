import projectsData from './projects.json'
import type { TimelineEntry } from './portfolio'

export type ProjectSectionData = {
  id: string
  title: string
  websiteOrder?: number
  entries: TimelineEntry[]
}

type ProjectsData = {
  sections: ProjectSectionData[]
}

export const projectSections = (projectsData as ProjectsData).sections
  .map((section) => ({
    ...section,
    entries: section.entries
      .filter((entry) => entry.websiteVisible !== false)
      .sort((first, second) => (first.websiteOrder ?? Number.MAX_SAFE_INTEGER) - (second.websiteOrder ?? Number.MAX_SAFE_INTEGER)),
  }))
  .sort((first, second) => (first.websiteOrder ?? Number.MAX_SAFE_INTEGER) - (second.websiteOrder ?? Number.MAX_SAFE_INTEGER))
export const projectEntries = projectSections.flatMap((section) => section.entries)
