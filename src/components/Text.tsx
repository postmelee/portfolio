import type { ElementType, ReactNode } from 'react'

type TextVariant =
  | 'display'
  | 'sectionTitle'
  | 'markdownH1'
  | 'markdownH2'
  | 'markdownH3'
  | 'markdownH4'
  | 'markdownH5'
  | 'markdownH6'
  | 'eyebrow'
  | 'projectTitle'
  | 'body'
  | 'bodySmall'
  | 'meta'
  | 'caption'

type TextProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  id?: string
  variant?: TextVariant
}

export function Text({
  as: Component = 'p',
  children,
  className,
  id,
  variant = 'body',
}: TextProps) {
  const classes = className
    ? `text text-${variant} ${className}`
    : `text text-${variant}`

  return <Component className={classes} id={id}>{children}</Component>
}
