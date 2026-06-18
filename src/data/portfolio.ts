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
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
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
      { text: '아이디어에 머무르지 않고 직접 구현하며, 개인 프로젝트를 통해 문제를 제품으로 검증합니다.' },
    ],
  },
]

export const contactLinks: LinkItem[] = [
  { label: 'Email', href: 'mailto:meleeisdeveloping@gmail.com' },
  { label: 'Github', href: 'https://github.com/postmelee' },
  { label: 'Blog', href: 'https://postmelee.github.io/' },
]

export const skills = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3(SCSS)', 'JS(ES6)', 'React', 'Next.js', 'Typescript', 'Redux(React-redux)', 'Styled Component', 'Tailwind'],
  },
  {
    title: 'Cross-Platform',
    items: ['React-native', 'Expo', 'React-navigation', 'React-native-reanimated', 'React-native-shared-element'],
  },
  {
    title: 'Tools',
    items: ['Slack', 'Notion', 'Figma', 'Git', 'GitBook'],
  },
  {
    title: 'Others',
    items: ['AWS EC2', 'S3', 'CloudFront', 'Firebase(Cloud Messaging)'],
  },
]

export const workExperience: TimelineEntry[] = [
  {
    id: 'chika-chika',
    title: '치카치카',
    role: 'Frontend Developer',
    period: '2020.11.23 - 2021.06.30',
    stacks: [
      'React Native',
      'TypeScript',
      'Redux',
      'React Navigation',
      'Reanimated',
      'Firebase Cloud Messaging',
      'Naver Map',
      'Swift',
      'Objective-C',
      'AWS S3',
    ],
    description: '우리동네 치과정보 플랫폼 서비스와 치아 이미지 기반 AI 치아 상태 수치화 및 관리 서비스를 개발했습니다.',
    bullets: [
      {
        segments: [{ text: 'React Native 기반 치과 정보/커뮤니티 모바일 앱 주요 기능 개발' }],
        children: [
          { segments: [{ text: 'Bottom Tab, Stack, Top Tab, Shared Element Navigation을 조합해 홈, 지도, 리뷰, 커뮤니티, 프로필, 알림 화면 흐름 구현' }] },
          { segments: [{ text: 'Redux + Axios 기반으로 사용자, 치과, 지도, 커뮤니티, 리뷰 도메인의 상태 및 API 연동 처리' }] },
        ],
      },
      {
        segments: [{ text: '네이버지도 기반 위치 기반 치과 검색 및 필터링 구현' }],
        children: [
          { segments: [{ text: 'Geolocation + NaverMapView + Marker 기반 주변 치과 지도, 마커 포커싱, 리스트/캐러셀 동기화 UX 구현' }] },
          { segments: [{ text: '영업시간, 요일, 휴일, 주차, 전문의, 야간진료 등 다중 필터와 지도 중심 좌표 기반 주변 치과 조회 API 연동' }] },
          {
            segments: [
              { text: 'QuadFlask/react-native-naver-map', href: 'https://github.com/QuadFlask/react-native-naver-map' },
              { text: ' 사용 및 ' },
              { text: 'iOS Marker property 확장 PR #70', href: 'https://github.com/QuadFlask/react-native-naver-map/pull/70' },
              { text: ' 기여' },
            ],
          },
        ],
      },
      {
        segments: [{ text: '프로필 및 활동 이력 화면 구현' }],
        children: [
          { segments: [{ text: '내 정보 수정, 찜한 병원, 예약피드, 작성한 글, 스크랩/좋아요/댓글단 글 화면 구현' }] },
          { segments: [{ text: '작성/스크랩/좋아요/댓글 글을 후기글·수다글 Top Tab으로 분리' }] },
          { segments: [{ text: '타 사용자 프로필에서 react-native-reanimated, react-native-tab-view, gesture-handler 기반 collapsible profile header 및 탭별 FlatList scroll offset 동기화 구현' }] },
        ],
      },
      {
        segments: [{ text: '커뮤니티 게시글 CRUD, 댓글, 소셜 인터랙션 구현' }],
        children: [
          { segments: [{ text: '게시글 작성/수정/삭제, 상세, 댓글, 좋아요, 스크랩 API 연동' }] },
          { segments: [{ text: '여러 목록에 중복 노출되는 게시글의 edit/delete/like/scrap/comment 상태를 Redux reducer에서 일관되게 동기화' }] },
          { segments: [{ text: '글 작성 중 커서 위치 기반 해시태그 추천/삽입 UX 및 해시태그 렌더링 구현' }] },
        ],
      },
      {
        segments: [{ text: 'Firebase Cloud Messaging 기반 푸시 알림 및 라우팅 구현' }],
        children: [
          { segments: [{ text: '로그인/회원가입 flow에 FCM token 연동' }] },
          { segments: [{ text: 'foreground notification 수신 애니메이션 처리' }] },
          { segments: [{ text: 'community/review 알림 클릭 시 관련 게시글·리뷰 상세 화면으로 deep link 라우팅' }] },
        ],
      },
      {
        segments: [{ text: '이미지 선택, 업로드, 고급 이미지 인터랙션 구현' }],
        children: [
          { segments: [{ text: 'CameraRoll/ImagePicker 기반 이미지 선택과 AWS S3 업로드 flow 구현' }] },
          { segments: [{ text: '프로필, 커뮤니티, 리뷰, 제보 이미지 업로드 처리' }] },
          { segments: [{ text: 'react-native-gesture-handler + Reanimated 기반 이미지 Pinch Zoom & Pan 컴포넌트 구현' }] },
        ],
      },
      {
        segments: [{ text: 'iOS 네이티브 사진 선택 모듈 개발 및 성능 개선' }],
        children: [
          { segments: [{ text: 'Swift + Objective-C 브리지 기반 iOS 네이티브 앨범 UI를 React Native에 연결' }] },
          { segments: [{ text: 'Hybrid app framework의 느린 사진 로딩 문제를 네이티브 thumbnail caching 방식으로 약 3초에서 약 0.1초 수준으로 개선' }] },
          {
            segments: [
              { text: '성능 개선 경험을 ' },
              { text: 'react-native-kakao-album', href: 'https://github.com/postmelee/react-native-kakao-album' },
              { text: '으로 모듈화해 공개' },
            ],
          },
        ],
      },
      {
        segments: [{ text: 'React Native UI 컴포넌트 오픈소스화' }],
        children: [
          {
            segments: [
              { text: '인스타그램 프로필 설정과 유사한 bottom sheet UI를 ' },
              { text: 'react-native-animated-bottom-sheet', href: 'https://github.com/postmelee/react-native-animated-bottom-sheet' },
              { text: '로 모듈화해 공개' },
            ],
          },
        ],
      },
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/kr/app/%EC%B9%98%EC%B9%B4%EC%B9%98%EC%B9%B4-%EA%B5%90%EC%A0%95-%EB%A6%AC%EB%B7%B0-%EC%B9%98%EA%B3%BC-%EC%B6%94%EC%B2%9C/id1546445561?l=en',
      },
      { label: '상세정보(치카치카)', href: 'https://app.notion.com/p/melee/9a0cfbfcc515474da712edb37ba8c3c7?pvs=25' },
      { label: '원본 소스코드', href: 'https://github.com/chikachikaApp/chika-chika-app' },
      { label: '사진 로딩 성능 개선 기록', href: 'https://app.notion.com/p/8c3f10e36f1540cd93babce01a5d3a8e' },
    ],
    awards: [
      { label: '[서울대학교 + 경기도 + 차세대융합기술연구원] 2021 경기도 대학생 융합기술 창업지원', href: 'https://app.notion.com/p/melee/2021-60a27806147e4707a2905afb00de67ad?pvs=25' },
      { label: 'KVP 5기 장려상', href: 'https://app.notion.com/p/melee/KVP-5-8c0a807a23f147c499f17a946a1d6806?pvs=25' },
      { label: '2021 북부 경기문화창조허브 융합콘텐츠 창업지원', href: 'https://app.notion.com/p/melee/2021-55c9ee74dc1a484dbd1499ce76ffd2b7?pvs=25' },
    ],
  },
  {
    id: 'turtle-school',
    title: '거북스쿨',
    role: 'Frontend Developer',
    period: '2021.07.20 - 2021.12.31',
    url: 'https://www.turtleschool.kr/',
    description: '입시 컨설팅, 내신/모의고사 성적 분석을 제공하는 Next.js 기반 학원 운영 플랫폼의 프론트엔드 화면과 데이터 연동을 개발·유지보수했습니다.',
    stacks: [
      'React',
      'Next.js',
      'JavaScript',
      'Axios',
      'Material UI',
      'Styled Components',
      'Highcharts',
      'Chart.js',
    ],
    bullets: [
      {
        segments: [{ text: 'Next.js 기반 입시/학원 운영 서비스 프론트엔드 구조 개발' }],
        children: [
          { segments: [{ text: 'pages 라우팅 기반으로 수시, 정시, 내신, 모의고사, 논술, 마이클래스, 설정, 관리자 도메인 화면 구성' }] },
          { segments: [{ text: 'UserAgent 기반으로 데스크톱/모바일 화면을 분기하고, 도메인별 UX를 독립 컴포넌트로 관리' }] },
          { segments: [{ text: '로그인 상태와 회원정보 입력 여부에 따라 Layout, 라우팅, 접근 흐름을 제어하는 전역 앱 구조 구현' }] },
        ],
      },
      {
        segments: [{ text: '내신/입시 성적 입력 및 분석 UI 구현' }],
        children: [
          { segments: [{ text: '내신 성적 입력, 수정/삭제 flow를 백엔드 API와 연동하고 입력 상태와 서버 응답을 화면에 반영' }] },
          { segments: [{ text: 'Highcharts, Chart.js 기반으로 내신 등급, Z점수, 성적 변화 추이, 합격 진단 데이터를 시각화' }] },
          { segments: [{ text: '과목, 학기, 조합 필터와 차트 series 토글을 구현해 복잡한 입시 데이터를 비교 가능한 형태로 구성' }] },
        ],
      },
      {
        segments: [{ text: '논술 컨설팅 wizard 및 대학 선택 상태 관리 구현' }],
        children: [
          { segments: [{ text: '문과/이과/의치대 논술 컨설팅을 점수 입력, 최저 등급 확인, 교차지원, 내신 유리 대학, 전형일/학과 선택, 최종 결정 단계로 구성' }] },
          { segments: [{ text: '대학 선택 상태를 객체 map으로 관리하고 useMemo로 선택 코드와 최종 대학 데이터를 파생해 단계별 컴포넌트에 전달' }] },
          { segments: [{ text: '단계 이동 전 필수 선택값을 검증하고 추천/제외 대학 결과를 차트와 리스트로 제공' }] },
        ],
      },
      {
        segments: [{ text: '백엔드 API 기반 데이터 연동 및 유지보수 대응' }],
        children: [
          { segments: [{ text: '백엔드 개발자가 구현한 members, gpa, exams 도메인 API를 화면 요구사항에 맞춰 연동' }] },
          { segments: [{ text: '사용자 auth header 기반 조회/저장 요청과 도메인별 API 응답을 프론트 상태와 결합해 운영 중 요청사항에 대응' }] },
        ],
      },
    ],
  },
]

export const personalProjects: TimelineEntry[] = [
  {
    id: 'animated-bottom-sheet',
    title: 'react-native-animated-bottom-sheet',
    url: 'https://github.com/postmelee/react-native-animated-bottom-sheet',
    bullets: [
      {
        segments: [{ text: '인스타그램 프로필 설정과 같은 모달 창' }],
        children: [
          { segments: [{ text: 'Issue 해결 경험' }] },
          { segments: [{ text: 'npm module 배포 경험' }] },
          { segments: [{ text: '다운로드 400/month 기록' }] },
        ],
      },
    ],
  },
  {
    id: 'guess-what',
    title: 'GuessWHAT',
    url: 'https://dlxorb1012.github.io/',
    bullets: [
      {
        segments: [{ text: '인공지능이 어떤 그림을 그린 건지 알아 맞추는 프로젝트' }],
        children: [
          { segments: [{ text: '고등학교 동아리 전시회 전시작입니다.' }] },
          {
            segments: [
              { text: '모델은 ' },
              { text: 'https://github.com/zaidalyafeai/zaidalyafeai.github.io/tree/master/sketcher', href: 'https://github.com/zaidalyafeai/zaidalyafeai.github.io/tree/master/sketcher' },
              { text: ' 을 참고하였고 구글의 Quick draw dataset을 이용해 학습하였습니다.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'changing-sit',
    title: 'Changing_sit',
    url: 'https://github.com/dlxorb1012/Changing_sit',
    bullets: [
      {
        segments: [{ text: '학급 명단을 엑셀 파일로 입력받아 자동으로 자리배치를 생성해주는 window/mac 데스크톱 앱' }],
        children: [
          { segments: [{ text: 'Electron(window/mac) program 개발 경험' }] },
          { segments: [{ text: '엑셀파일 파싱 ⇒ JSON 경험' }] },
        ],
      },
    ],
  },
]

export const awards: SimpleEntry[] = [
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
      { label: '강냉톤 홈페이지', href: 'https://kangnengthon.site' },
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
      { label: '차세대융합기술연구원', href: 'https://aict.snu.ac.kr/?p=81_view&idx=70&page=1#open' },
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
