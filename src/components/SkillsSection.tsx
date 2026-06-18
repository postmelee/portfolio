import { TechChipList } from './TechChip'

type SkillGroup = {
  title: string
  items: readonly string[]
}

type SkillsSectionProps = {
  groups: readonly SkillGroup[]
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <div className="skill-grid">
      {groups.map((group) => (
        <article key={group.title} className="skill-group">
          <h3>{group.title}</h3>
          <TechChipList items={group.items} />
        </article>
      ))}
    </div>
  )
}
