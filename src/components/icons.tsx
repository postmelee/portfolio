import { useId, type ComponentType, type SVGProps } from 'react'
import liquidPortfolioIconUrl from '../assets/liquid-portfolio-icon.png'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>

export function GitHubLogo({
  strokeWidth: _strokeWidth,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.5 7.5 0 0 1 8 3.86c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

export function NotionLogo({
  strokeWidth: _strokeWidth,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447Zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.047.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887L5.999 6.354c-.56.047-.747.327-.747.933Zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.841-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.438l-1.214-.14c-.093-.514.28-.887.747-.933l3.221-.19ZM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.727l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632Z" />
    </svg>
  )
}

export function LiquidPortfolioIcon({
  strokeWidth: _strokeWidth,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  const clipPathId = `${useId().replace(/:/g, '')}-liquid-portfolio-icon-clip`

  return (
    <svg
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <clipPath id={clipPathId}>
          <circle cx="8" cy="8" r="7.35" />
        </clipPath>
      </defs>
      <image
        clipPath={`url(#${clipPathId})`}
        height="16"
        href={liquidPortfolioIconUrl}
        preserveAspectRatio="xMidYMid slice"
        width="16"
      />
      <circle
        cx="8"
        cy="8"
        r="7.36"
        stroke="#FFFFFF"
        strokeOpacity="0.72"
        strokeWidth="0.52"
      />
      <circle
        cx="8"
        cy="8"
        r="7.58"
        stroke="#7EA9C5"
        strokeOpacity="0.24"
        strokeWidth="0.38"
      />
    </svg>
  )
}
