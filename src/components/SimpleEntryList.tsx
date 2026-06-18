import type { SimpleEntry } from '../data/portfolio'
import { BulletList } from './BulletList'
import { ExternalResourceLink } from './ExternalResourceLink'
import { Text } from './Text'

export function SimpleEntryList({ entries }: { entries: SimpleEntry[] }) {
  return (
    <div className="simple-entry-list">
      {entries.map((entry) => (
        <article className="simple-entry" key={entry.id}>
          <div>
            <Text as="h3" variant="projectTitle">{entry.title}</Text>
            {entry.period ? (
              <div className="simple-entry-meta">
                <Text as="div" variant="meta">{entry.period}</Text>
              </div>
            ) : null}
            {entry.links ? (
              <div className="simple-entry-links">
                {entry.links.map((link) => (
                  <ExternalResourceLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
            ) : null}
          </div>
          <BulletList items={entry.bullets} />
        </article>
      ))}
    </div>
  )
}
