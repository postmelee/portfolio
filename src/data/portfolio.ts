export type TextSegment = {
  text: string
  href?: string
}

export type BulletItem = {
  segments: TextSegment[]
  children?: BulletItem[]
}

export type LinkItem = {
  label: string
  href: string
}

export type TimelineEntry = {
  id: string
  title: string
  websiteVisible?: boolean
  websiteOrder?: number
  role?: string
  period?: string
  status?: 'maintaining'
  description?: string
  url?: string
  stacks?: string[]
  highlightedStacks?: string[]
  bullets: BulletItem[]
  links?: LinkItem[]
  awards?: LinkItem[]
}

export type SimpleEntry = {
  id: string
  title: string
  period?: string
  links?: LinkItem[]
  bullets: BulletItem[]
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Work' },
  { id: 'awards', label: 'Awards' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

export const heroStatement = '개인의 경험을 모두의 공감으로 확장하고, 소프트웨어로 문제를 해결합니다.'

export const aboutBullets: BulletItem[] = [
  {
    segments: [
      { text: '사용자 경험을 증진하기 위하여 끊임없이 의심하며, 서비스가 살아있다고 느낄 수 있도록 노력합니다.' },
    ],
  },
  {
    segments: [
      { text: '사용자의 환경과 제약이 달라도 누구나 접근할 수 있고, 동등하게 사용할 수 있는 제품을 지향합니다.' },
    ],
  },
  {
    segments: [
      { text: '아이디어를 제품으로 직접 검증하고, AI 협업 과정은 문서·검증·승인 가능한 프로젝트 기억으로 남깁니다.' },
    ],
  },
]

export const contactLinks: LinkItem[] = [
  { label: 'Email', href: 'mailto:meleeisdeveloping@gmail.com' },
  { label: 'Liquid Portfolio', href: 'https://postmelee.github.io/liquid-portfolio/' },
  { label: 'Github', href: 'https://github.com/postmelee' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/postmelee/' },
  { label: 'Blog', href: 'https://medium.com/@meleeisdeveloping' },
]

export const skills = [
  {
    title: 'Frontend',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Vite', 'Redux', 'TanStack Query', 'Tailwind'],
  },
  {
    title: 'Cross-Platform & macOS',
    items: ['React Native', 'Expo', 'Swift', 'SwiftUI', 'AppKit', 'WKWebView'],
  },
  {
    title: 'Systems & Backend',
    items: ['Rust', 'WebAssembly', 'Node.js', 'PostgreSQL', 'Socket.IO', 'AWS S3'],
  },
  {
    title: 'Quality & Delivery',
    items: ['Vitest', 'Playwright', 'Visual Diff', 'GitHub Actions', 'Sparkle', 'DMG Notarization'],
  },
]

export const awards: SimpleEntry[] = [
  {
    id: 'openai-codex-for-open-source-2026',
    title: 'OpenAI Codex for Open Source — Selected Maintainer',
    period: '2026.07',
    links: [
      { label: '프로그램 안내', href: 'https://developers.openai.com/community/codex-for-oss' },
      { label: 'GitHub 프로필', href: 'https://github.com/postmelee' },
    ],
    bullets: [
      {
        segments: [{ text: '공개 오픈소스 유지보수 활동을 기반으로 OpenAI Codex for Open Source 프로그램의 Selected Maintainer로 선정' }],
        children: [
          { segments: [{ text: 'Codex를 활용한 오픈소스 triage, 구현, 코드 리뷰, 보안 검토와 릴리스 workflow를 실제 프로젝트에서 지속적으로 운영' }] },
          { segments: [{ text: '지원은 maintainer 활동을 위한 프로그램 참여이며 OpenAI의 개별 프로젝트 보증·승인을 의미하지 않음' }] },
        ],
      },
    ],
  },
  {
    id: 'computer-engineering-academic-festival-2026-grand-prize',
    title: '2026-1학기 컴퓨터공학부 학술제 최우수상',
    period: '2026.05',
    links: [
      { label: '학교 공지사항', href: 'https://sae.kangnam.ac.kr/menu/board/info/e38fb5074d558dd5c570c62c9f36fdce.do?scrtWrtiYn=false&encMenuSeq=48dc6102478453cce8f11c85f0b65427&encMenuBoardSeq=fd8377a25894712a5f67b2c2c641d190' },
      { label: '발표자료(ppt)', href: 'https://drive.google.com/file/d/1z0bTvOHb60WvC7uWWzvNGVFeYg-2P4OF/view?usp=sharing' },
      { label: '발표자료(pptx)', href: 'https://drive.google.com/file/d/1iBG6Jp-WzRagScLLcpjCrtKvhEtJ5mSd/view' },
      { label: '작품보고서(docx)', href: 'https://docs.google.com/document/d/1ngldWT3O5-dTSYh5pDkwM5MOJ4kjkcS8/edit?usp=sharing&ouid=112350065540225109373&rtpof=true&sd=true' },
      { label: '시연영상', href: 'https://drive.google.com/file/d/1DkCBhzSbrIftEzOoq-d_8RH60zzHxuKh/view' },
      { label: '수상내역', href: 'https://melee.notion.site/2026-1-3a650c6ce95645f39e43c3fb3c928f96?source=copy_link' },
    ],
    bullets: [
      {
        segments: [{ text: '강남대학교 컴퓨터공학부 2026-1학기 학술제' }],
        children: [
          { segments: [{ text: '수상 내용: 최우수상(이태규팀)' }] },
          { segments: [{ text: '행사 일시/장소: 2026.05.21, 강남대학교 교육관' }] },
          { segments: [{ text: '진행 방식: 총 12팀 참여, 학술제 발표팀 8분 발표 후 질의응답 및 VR·SW 전공 교수진 심사' }] },
        ],
      },
    ],
  },
  {
    id: 'kangnengthon-1st-excellence',
    title: '제1회 강냉톤 우수상',
    period: '2025.01',
    links: [
      { label: '강냉톤 행사 안내', href: 'https://gdg.community.dev/events/details/google-gdg-on-campus-kangnam-university-yongin-south-korea-presents-2025-kangnam-univ-hackathon-gangnaengton/' },
      { label: '프로젝트 GitHub', href: 'https://github.com/KangnengThonOilAndStone' },
      { label: '수상 내역', href: 'https://melee.notion.site/1-3829a1d61567801d88cee4da8e5fb1db' },
    ],
    bullets: [
      {
        segments: [{ text: 'Google Developer Group on Campus: Kangnam University X 강남대학교 대학일자리플러스센터 교내 해커톤' }],
        children: [
          { segments: [{ text: '수상 내용: 우수상' }] },
          { segments: [{ text: '상금 60만원' }] },
          { segments: [{ text: '후원 및 도움: 강창모(강남대학교 창업생태계 모임), KNU IT 커뮤니티' }] },
        ],
      },
    ],
  },
  {
    id: 'aict-startup',
    title: '2021 경기도 대학생 융합기술 창업지원',
    period: '2021.05',
    links: [
      { label: 'YouTube', href: 'https://www.youtube.com/watch?v=xYOGsHthFtE' },
    ],
    bullets: [
      {
        segments: [{ text: '2021 차세대융합기술연구원 X 서울대학교 X 경기도 대학생 창업 지원사업' }],
        children: [
          { segments: [{ text: '지원금 5천만원' }] },
          { segments: [{ text: '서울대학교 융합과학기술대학원 업무 공간 지원' }] },
        ],
      },
    ],
  },
  {
    id: 'gcon-support',
    title: '2021 북부 경기문화창조허브 융합콘텐츠지원사업',
    period: '2021',
    links: [
      { label: '경기콘텐츠진흥원', href: 'https://www.gcon.or.kr/board/view?menuId=MENU02147&linkId=11788' },
    ],
    bullets: [
      {
        segments: [{ text: '2021 북부 경기문화창조허브 융합콘텐츠지원사업' }],
        children: [
          { segments: [{ text: '지원금 2천만원' }] },
          { segments: [{ text: '업무 공간 지원' }] },
        ],
      },
    ],
  },
]

export const education: SimpleEntry[] = [
  {
    id: 'kangnam-university',
    title: '강남대학교 소프트웨어공학부',
    period: '2020.03 ~',
    bullets: [
      { segments: [{ text: '강남대학교 소프트웨어공학부 재학중' }],
      children: [
          { segments: [{ text: '2027. 02 졸업예정' }] },
      ],}
    ],
  },
]
