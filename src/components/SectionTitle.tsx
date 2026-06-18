import { Text } from './Text'

type SectionTitleProps = {
  eyebrow?: string
  title: string
}

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="section-title">
      {eyebrow ? <Text as="p" variant="eyebrow">{eyebrow}</Text> : null}
      <Text as="h2" variant="sectionTitle">{title}</Text>
    </div>
  )
}
