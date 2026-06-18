type TechnologyLinkRule = {
  href: string
  keywords: readonly string[]
}

const technologyLinkRules = [
  {
    href: 'https://github.com/react/react',
    keywords: ['react'],
  },
  {
    href: 'https://github.com/vercel/next.js',
    keywords: ['next js', 'nextjs'],
  },
  {
    href: 'https://github.com/react/react-native',
    keywords: ['react native', 'react-native'],
  },
  {
    href: 'https://github.com/necolas/react-native-web',
    keywords: ['react native web'],
  },
  {
    href: 'https://github.com/expo/expo',
    keywords: ['expo'],
  },
  {
    href: 'https://github.com/expo/expo/tree/main/packages/expo-router',
    keywords: ['expo router'],
  },
  {
    href: 'https://github.com/expo/expo/tree/main/packages/expo-image',
    keywords: ['expo image'],
  },
  {
    href: 'https://github.com/expo/expo/tree/main/packages/expo-secure-store',
    keywords: ['securestore', 'secure store'],
  },
  {
    href: 'https://github.com/react-navigation/react-navigation',
    keywords: ['react navigation', 'react-navigation'],
  },
  {
    href: 'https://github.com/software-mansion/react-native-reanimated',
    keywords: ['react native reanimated', 'react-native-reanimated', 'reanimated'],
  },
  {
    href: 'https://github.com/software-mansion/react-native-gesture-handler',
    keywords: ['gesture handler', 'react native gesture handler'],
  },
  {
    href: 'https://github.com/IjzerenHein/react-native-shared-element',
    keywords: ['react native shared element', 'react-native-shared-element', 'shared element'],
  },
  {
    href: 'https://github.com/reduxjs/react-redux',
    keywords: ['react redux', 'react-redux', 'redux react redux'],
  },
  {
    href: 'https://github.com/reduxjs/redux',
    keywords: ['redux'],
  },
  {
    href: 'https://github.com/TanStack/query',
    keywords: ['react query', 'tanstack query'],
  },
  {
    href: 'https://github.com/axios/axios',
    keywords: ['axios'],
  },
  {
    href: 'https://github.com/cheeriojs/cheerio',
    keywords: ['cheerio'],
  },
  {
    href: 'https://github.com/fastapi/fastapi',
    keywords: ['fastapi', 'fast api'],
  },
  {
    href: 'https://github.com/langchain-ai/langchain',
    keywords: ['langchain', 'lang chain'],
  },
  {
    href: 'https://github.com/facebookresearch/faiss',
    keywords: ['faiss'],
  },
  {
    href: 'https://github.com/chartjs/Chart.js',
    keywords: ['chart js', 'chartjs', 'chart.js'],
  },
  {
    href: 'https://github.com/highcharts/highcharts',
    keywords: ['highcharts', 'high charts'],
  },
  {
    href: 'https://github.com/mui/material-ui',
    keywords: ['material ui', 'mui'],
  },
  {
    href: 'https://github.com/styled-components/styled-components',
    keywords: ['styled components', 'styled component'],
  },
  {
    href: 'https://github.com/tailwindlabs/tailwindcss',
    keywords: ['tailwind css', 'tailwind'],
  },
  {
    href: 'https://github.com/mrdoob/three.js',
    keywords: ['three js', 'three.js', 'threejs'],
  },
  {
    href: 'https://github.com/pmndrs/react-three-fiber',
    keywords: ['react three fiber', 'react-three-fiber'],
  },
  {
    href: 'https://github.com/pmndrs/drei',
    keywords: ['drei'],
  },
  {
    href: 'https://github.com/pmndrs/react-spring',
    keywords: ['react spring', 'react-spring'],
  },
  {
    href: 'https://github.com/vitejs/vite',
    keywords: ['vite'],
  },
  {
    href: 'https://github.com/AndrewPrifer/liquid-dom',
    keywords: ['liquid dom', '@liquid-dom/react'],
  },
  {
    href: 'https://github.com/pmndrs/use-gesture',
    keywords: ['use gesture', '@use-gesture/react'],
  },
  {
    href: 'https://github.com/vitest-dev/vitest',
    keywords: ['vitest'],
  },
  {
    href: 'https://github.com/microsoft/TypeScript',
    keywords: ['typescript', 'type script'],
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    keywords: ['javascript', 'java script', 'js es6', 'es6'],
  },
  {
    href: 'https://github.com/nodejs/node',
    keywords: ['node js', 'node.js', 'nodejs'],
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    keywords: ['html5', 'html'],
  },
  {
    href: 'https://sass-lang.com/',
    keywords: ['css3 scss', 'scss', 'sass'],
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    keywords: ['css3', 'css'],
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
    keywords: ['dom api', 'dom'],
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    keywords: ['canvas'],
  },
  {
    href: 'https://github.com/WebAssembly/spec',
    keywords: ['webassembly', 'wasm'],
  },
  {
    href: 'https://github.com/commonmark/commonmark-spec',
    keywords: ['markdown', 'commonmark'],
  },
  {
    href: 'https://github.com/swiftlang/swift',
    keywords: ['swift'],
  },
  {
    href: 'https://developer.apple.com/documentation/swiftui',
    keywords: ['swiftui', 'swift ui'],
  },
  {
    href: 'https://developer.apple.com/documentation/appkit',
    keywords: ['appkit'],
  },
  {
    href: 'https://developer.apple.com/documentation/uikit',
    keywords: ['uikit'],
  },
  {
    href: 'https://developer.apple.com/documentation/webkit/wkwebview',
    keywords: ['wkwebview', 'wk web view'],
  },
  {
    href: 'https://developer.apple.com/documentation/quicklook',
    keywords: ['quick look', 'quicklook'],
  },
  {
    href: 'https://developer.apple.com/documentation/quicklookthumbnailing',
    keywords: ['finder thumbnail', 'quick look thumbnailing'],
  },
  {
    href: 'https://doc.rust-lang.org/nomicon/ffi.html',
    keywords: ['rust ffi'],
  },
  {
    href: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html',
    keywords: ['objective c', 'objective-c', 'objc'],
  },
  {
    href: 'https://github.com/SnapKit/SnapKit',
    keywords: ['snapkit', 'snap kit'],
  },
  {
    href: 'https://github.com/devxoul/Then',
    keywords: ['then'],
  },
  {
    href: 'https://github.com/uias/Tabman',
    keywords: ['tabman'],
  },
  {
    href: 'https://github.com/uias/Pageboy',
    keywords: ['pageboy'],
  },
  {
    href: 'https://github.com/sparkle-project/Sparkle',
    keywords: ['sparkle'],
  },
  {
    href: 'https://github.com/rust-lang/rust',
    keywords: ['rust'],
  },
  {
    href: 'https://github.com/postmelee/rhwp',
    keywords: ['rhwp'],
  },
  {
    href: 'https://www.hancom.com/',
    keywords: ['hwp', 'hwpx'],
  },
  {
    href: 'https://aws.amazon.com/ec2/',
    keywords: ['aws ec2', 'ec2'],
  },
  {
    href: 'https://aws.amazon.com/s3/',
    keywords: ['aws s3', 's3'],
  },
  {
    href: 'https://aws.amazon.com/cloudfront/',
    keywords: ['cloudfront', 'cloud front'],
  },
  {
    href: 'https://firebase.google.com/docs/cloud-messaging',
    keywords: ['firebase cloud messaging', 'cloud messaging', 'fcm'],
  },
  {
    href: 'https://github.com/firebase/firebase-js-sdk',
    keywords: ['firebase'],
  },
  {
    href: 'https://www.ncloud.com/product/applicationService/maps',
    keywords: ['naver map', 'naver maps'],
  },
  {
    href: 'https://www.netlify.com/',
    keywords: ['netlify'],
  },
  {
    href: 'https://github.com/git/git',
    keywords: ['git'],
  },
  {
    href: 'https://docs.github.com/en/actions',
    keywords: ['github actions', 'github action'],
  },
  {
    href: 'https://docs.github.com/en/issues',
    keywords: ['github issues', 'github issue'],
  },
  {
    href: 'https://www.gitbook.com/',
    keywords: ['gitbook', 'git book'],
  },
  {
    href: 'https://slack.com/',
    keywords: ['slack'],
  },
  {
    href: 'https://www.notion.com/',
    keywords: ['notion'],
  },
  {
    href: 'https://www.figma.com/',
    keywords: ['figma'],
  },
  {
    href: 'https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3',
    keywords: ['chrome mv3', 'manifest v3', 'mv3'],
  },
  {
    href: 'https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution',
    keywords: ['dmg notarization', 'notarization'],
  },
] as const satisfies readonly TechnologyLinkRule[]

function normalizeTechnologyName(value: string) {
  return value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\+/g, ' plus ')
    .replace(/#/g, ' sharp ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
}

const normalizedTechnologyLinkRules = technologyLinkRules
  .flatMap((rule, ruleIndex) => (
    rule.keywords.map((keyword) => {
      const normalizedKeyword = normalizeTechnologyName(keyword)

      return {
        href: rule.href,
        keyword: normalizedKeyword,
        keywordLength: normalizedKeyword.length,
        ruleIndex,
        wordCount: normalizedKeyword.split(' ').length,
      }
    })
  ))
  .filter((rule) => rule.keyword.length > 0)
  .sort((left, right) => (
    right.wordCount - left.wordCount
    || right.keywordLength - left.keywordLength
    || left.ruleIndex - right.ruleIndex
  ))

function containsKeyword(label: string, keyword: string) {
  return ` ${label} `.includes(` ${keyword} `)
}

export function getTechnologyLink(label: string) {
  const normalizedLabel = normalizeTechnologyName(label)

  return normalizedTechnologyLinkRules.find((rule) => containsKeyword(normalizedLabel, rule.keyword))?.href
}
