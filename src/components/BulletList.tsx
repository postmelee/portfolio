import type { BulletItem, TextSegment } from '../data/portfolio'
import { Text } from './Text'

type BulletListProps = {
  items: BulletItem[]
  depth?: number
}

function RichText({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.href ? (
          <a key={`${segment.href}-${index}`} href={segment.href} target="_blank" rel="noreferrer">
            {segment.text}
          </a>
        ) : (
          <span key={`${segment.text}-${index}`}>{segment.text}</span>
        ),
      )}
    </>
  )
}

export function BulletList({ items, depth = 0 }: BulletListProps) {
  return (
    <ul className={depth > 0 ? 'bullet-list bullet-list-nested' : 'bullet-list'}>
      {items.map((item, index) => (
        <li key={`${item.segments.map((segment) => segment.text).join('')}-${index}`}>
          <Text as="p" variant={depth > 0 ? 'bodySmall' : 'body'}>
            <RichText segments={item.segments} />
          </Text>
          {item.children ? <BulletList items={item.children} depth={depth + 1} /> : null}
        </li>
      ))}
    </ul>
  )
}
