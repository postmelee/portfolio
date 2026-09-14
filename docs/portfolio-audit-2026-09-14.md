# 포트폴리오 최신화 조사 — 2026.09.14

조사 기준일은 한국 시간 2026.09.14이며, 다운로드 수처럼 계속 변하는 값은 조사 시점의 스냅샷이다. 아래 조사 기록의 주요 보정 후보는 후속 요청에 따라 본문에 반영했다.

## 후속 요청 반영 결과

- Contributing 분류·목차를 제거하고 rhwp를 Open Source 첫 항목으로 통합했다. Open Source에 독립 `#open-source` 앵커를 부여했다.
- rhwp의 입력·스크롤·줌 성능, 하이퍼링크 저장·PDF 보존, 혼합 서식·브라우저 확장 오류 대응과 CI 영향 검증 성과를 추가했다. 각 수치의 측정 조건과 기존 역사적 성과를 구분했다.
- alhangeul-macos의 DMG 다운로드 8,355회, Spotlight 본문 검색, v0.2.2 저장·재설치 보정 및 실제 PDF/Quick Look 렌더링 경로를 반영했다.
- MuleReels의 라우팅·이미지 처리 설명을 실제 컴포넌트 구현에 맞췄고, hyper-waterfall의 npm 0.3.0과 Homebrew 0.2.0 제공 범위를 구분했다.
- 치카치카 App Store·소스, 거북스쿨 웹사이트, knu_lib 비공개 저장소로 연결되는 버튼과 본문 링크를 제거했다. 경력·프로젝트 설명 자체는 유지했다.
- 차세대융합기술연구원의 기존 수상 근거 URL은 HTTP 조회가 차단되고 실제 브라우저에서도 수상 상세 대신 홈페이지로 이동하므로 제거했다.
- NotiFYI와 수상 영역의 강냉톤 링크를 사용자가 지정한 [GDG 공식 행사 안내](https://gdg.community.dev/events/details/google-gdg-on-campus-kangnam-university-yongin-south-korea-presents-2025-kangnam-univ-hackathon-gangnaengton/)로 교체했다.
- npm 패키지 두 페이지는 실제 브라우저에서 공개 내용을 확인했고, Medium 프로필은 웹 조회에서 확인해 유지했다. LinkedIn도 기존 브라우저 세션에서 본인 프로필이 열려 유지했다. 이는 LinkedIn 비로그인 공개 범위까지 검증했다는 뜻은 아니다.
- 치카치카 Notion 상세 페이지의 본문 접근을 확인했다. HTTP 200만으로 내용 접근을 단정하지 않았다.
- 사용하지 않는 workExperience/personalProjects 중복 데이터를 제거해 숨은 오래된 링크도 정리했다.
- 1400px 미만에서는 상단 목차를 사용하도록 조정해 좁은 데스크톱에서 본문과 겹치지 않게 했고, 링크가 없는 항목에 빈 링크 영역이 나타나지 않도록 처리했다.
- 후속 검증: TypeScript/Vite build와 `git diff --check` 통과. 1440px 데스크톱·390px 모바일 화면 확인, 1265px 상단 목차 배치 확인. 프로젝트 14개(숨김 1개 포함) 보존, rhwp 첫 배치, 제거 URL 잔존 0, 누락·중복 앵커 0, 빈 링크 영역 0, Projects/Open Source/Personal/Work 활성 표시와 이동을 확인했다.

이하 표와 링크 점검 원시는 수정 전 조사 근거다. 재학 상태·개별 프로젝트 종료일 등 별도 사실 확인이 필요한 정보는 추정으로 바꾸지 않았다.

## 반영 완료

- 본문과 목차를 `About → Skills → Projects → Work → Awards → Education → Contact` 순서로 변경.
- rhwp의 stars/forks 및 clone 100k+ 문구를 Chrome 확장 주간 활성 사용자 **183,541명(2026.09.08 기준)**과 GitHub clone **250k+**로 교체.
- alhangeul-macos의 `226 stars·19 forks` 하위 불릿 제거.
- hyper-waterfall의 `공개 배포 후 외부 반응과 fork 기반 adoption 확인` 및 하위 불릿 전체 제거.

rhwp의 WAU는 메인테이너가 Chrome Web Store 개발자 대시보드에서 집계해 공개한 [22주차 보고서](https://github.com/edwardkim/rhwp/discussions/6975)를 GitHub API로 직접 확인했다. 집계 기간은 2026.09.02–09.08이며 **Chrome 확장 지표**다. 프로젝트 전체 제품군의 합산 사용자 수로 표현하지 않았다. clone 250k+는 이번 요청에서 제공한 값을 반영했다. 해당 누적 수치의 공개 원문과 집계 기준일은 별도로 확인하지 못했으므로, 이전의 2026.07.19를 붙이거나 WAU 기준일과 같다고 표시하지 않았다.

## 우선 보정할 항목

| 우선순위 | 항목 | 확인 결과와 권장 조치 |
| --- | --- | --- |
| 높음 | alhangeul-macos 다운로드 | 기존 7,549회(09.01)에서 **8,355회**로 증가. 공개 정식 릴리스 14개의 `.dmg` asset `download_count` 합계다. 기준일을 2026.09.14로 바꾸는 것을 권장. 사람 수·설치 수와는 구분. [공개 Releases](https://github.com/postmelee/alhangeul-macos/releases) |
| 높음 | alhangeul-macos 최신 제품 기능 | **v0.2.0**에 평문 HWP3/HWP5/HWPX의 Spotlight 본문 검색이 추가됐고, **v0.2.2**가 09.14 공개됨. v0.2.2는 새 문서 저장 후 종료가 막히는 문제와 동일 버전 재설치 시 기존 문서 색인 요청 누락을 보완. bundled core/Studio는 rhwp v0.8.6. [v0.2.0](https://github.com/postmelee/alhangeul-macos/releases/tag/v0.2.0), [v0.2.2](https://github.com/postmelee/alhangeul-macos/releases/tag/v0.2.2) |
| 높음 | alhangeul-macos PDF 구현 설명 | 현재 문구는 Quick Look/Thumbnail/PDF를 모두 Swift/Rust bridge 경로로 묶는다. 최신 릴리스에서는 **Quick Look/Thumbnail은 Rust bridge + Swift native renderer**, **PDF/인쇄는 editor page SVG + 별도 script-disabled WKWebView/PDFKit/AppKit**로 구분한다. 이 문장은 실제 경로에 맞게 수정 권장. [v0.2.2 제한 사항](https://github.com/postmelee/alhangeul-macos/releases/tag/v0.2.2) |
| 높음 | rhwp 최근 성과 누락 | 기존 설명은 7월 #2397/#2401 사례 중심이다. 8–9월의 입력 최적화, 페이지 가상화, 줌 안정화, 하이퍼링크 저장·출력 보존, CI 영향 분석을 추가할 근거가 있다. 아래 별도 표 참고. |
| 높음 | knu_lib GitHub 링크 | 인증된 저장소 메타데이터에서 `private: true`이며 비로그인 접근은 404. 공개 포트폴리오의 GitHub 버튼은 방문자에게 열리지 않는다. 이미 연결된 발표자료·시연영상 등 공개 증거를 대표 링크로 사용하는 것을 권장. 저장소 공개 전환은 제안하지 않음. |
| 높음 | 치카치카 링크 | App Store의 기존 앱 URL과 `chikachikaApp/chika-chika-app` 소스 URL 모두 비로그인 HTTP 404. 과거 출시 경험은 유지하고, 클릭 가능한 증거는 공개 회고·화면·수상 자료로 교체 권장. 이 응답만으로 서비스 종료나 저장소 삭제를 단정하지 않음. |
| 높음 | 거북스쿨·강냉톤 링크 | `www.turtleschool.kr`, `kangnengthon.site`가 조사 환경에서 DNS 해석 실패. 거북스쿨 경력 및 NotiFYI·수상 항목의 강냉톤 링크에 영향. 보관 자료나 접근 가능한 공식 근거 링크로 교체 권장. |
| 중간 | MuleReels 구현 설명 | 현재 `app/`에는 `_layout.tsx`, `index.tsx`가 있고 상세 데이터 파싱·표시는 `FeedRow` 내부에서 처리한다. **“Expo Router 기반으로 목록, 상세, 공유 흐름을 분리”**는 실제 라우트 구조보다 넓은 표현이다. “목록·상세 HTML 파싱과 피드 렌더링을 컴포넌트로 분리하고 원문 열기·링크 복사·햅틱 연결”로 보정 권장. 주 피드 이미지는 React Native `Image`를 사용하므로 Expo Image 중심의 설명도 축소 권장. [app](https://github.com/postmelee/MuleReels/tree/main/app), [FeedRow](https://github.com/postmelee/MuleReels/blob/main/components/FeedRow.tsx), [ReelComponent](https://github.com/postmelee/MuleReels/blob/main/components/ReelComponent.tsx) |
| 중간 | hyper-waterfall 배포 채널 설명 | npm/공식 릴리스는 0.3.0, Homebrew formula는 **0.2.0**을 가리킨다. Homebrew와 다국어 locale 기능이 같은 범위로 제공되는 것처럼 읽히지 않도록 분리 권장. [0.3.0 릴리스 기록](https://github.com/postmelee/hyper-waterfall/blob/main/docs/releases/v0.3.0.md), [Homebrew formula](https://github.com/postmelee/homebrew-tap/blob/main/Formula/hyper-waterfall.rb) |
| 중간 | Open Source 하위 목차 | 기존 구조에서 Projects 부모와 Open Source 항목이 모두 `#projects`를 사용한다. rhwp/Contributing 위치에서도 Open Source가 활성화되고, Open Source 클릭은 해당 분류 대신 Projects 시작점으로 이동한다. 별도 `open-source` 앵커를 부여하는 후속 수정 권장. 이번 순서 변경 이전부터 있던 문제이며 추가 요청 범위로 보고만 함. |

### alhangeul-macos 제안 문구

> GitHub Releases의 공개 DMG 누적 다운로드 8,355회 기록(2026.09.14 기준).

> Spotlight importer와 UTF-8 본문 추출 C ABI를 통합해 평문 HWP3/HWP5/HWPX 문서를 macOS 검색으로 연결하고, 최초 설치·재설치 후 기존 문서 색인 흐름까지 검증.

> 앱 편집기는 rhwp-studio를 WKWebView에 통합하고, Quick Look·Finder thumbnail은 Rust bridge와 Swift native renderer, PDF·인쇄는 editor SVG 기반 WKWebView/PDFKit 출력으로 구성.

기존 v0.1.10의 custom-scheme 회귀 발견·upstream 수정 사례는 과거 성과이므로 남길 수 있다. 버전 문자열만 v0.2.2로 바꾸면 서로 다른 사건을 섞게 된다. 최신 릴리스 운영 사례를 별도 추가하는 편이 정확하다. 기존 #305/#307도 2026.05.31 종료된 이슈로, 진행 중인 장애가 아니라 과거 대응 사례로 표현하면 된다.

## rhwp: 추가 가능한 성과와 수치

기존 성과 이후 작성자 `postmelee`의 병합 PR을 2026.07.19–08.31(48건), 09.01–09.14(10건) 범위로 조사했다. 앞 구간에는 이미 기재된 #2397/#2398/#2401 및 문서 PR도 포함되므로 이를 모두 신규 기능 개수로 환산하지 않았다. 아래는 포트폴리오에 우선 반영할 후보다. 병합 여부와 대중 배포 버전 포함 여부는 구분한다.

| 분야 | 새로 추가할 내용 | 근거와 수치 해석 |
| --- | --- | --- |
| 거대 표 셀 입력 | 115쪽 거대 셀의 검증된 줄 끝 입력에서 cursor geometry와 page-tree를 재사용하고 dirty region만 다시 그림. 최종 production WASM 제한 검증에서 **stable operation p95 0.5–3.5ms**, **입력→2-rAF p95 8.6–16.4ms**, exact cursor query/full repaint/long task/flush 0. | [PR #3745](https://github.com/edwardkim/rhwp/pull/3745). HWP/HWPX·영문/숫자/IME의 24개 조합 대상. 자동 줄바꿈·Enter·복잡한 서식까지 같은 성능이라고 확대하지 않는다. |
| 긴 문서 스크롤 | 가시 영역 인덱스, 페이지 단위 스케줄링, 완성 page bundle LRU를 연결. **178쪽·34%·4열 cold jump 첫 visible p95 278.9→59.0ms(78.8% 감소)**, 해당 A/B 표본 long task 40→0. | [PR #6637](https://github.com/edwardkim/rhwp/pull/6637). Chromium 151, 1280×720, DPR 2, Canvas2D, 20쌍. 전체 렌더 완료나 모든 장치의 FPS 개선율로 표현하지 않는다. |
| 연속 줌 | 오래된 배율의 대기 작업 취소, 기존 화면을 유지한 visible 페이지 교체, 비편집 페이지의 읽기 화질 복원. 최종 후보 34% 시나리오의 **소유 surface 픽셀 32.14% 감소**. | [PR #6987](https://github.com/edwardkim/rhwp/pull/6987). 전체 RSS/GPU 메모리 감소율과 다르다. 200% 읽기에서는 화질 복원 비용으로 픽셀이 증가했다. 개발 중 rAF 간격 80.5% 감소는 소표본·이전 후보 측정이라 대표 수치로는 후순위. |
| 링크 편집·문서 호환 | HTTP/HTTPS 링크 삽입·수정·해제, 경계 입력과 삭제 확인·Undo, 본문/표/글상자의 HWP/HWPX 저장·재열기 및 PDF 링크 보존 구현. | [PR #6984](https://github.com/edwardkim/rhwp/pull/6984). PDF 5개·34쪽·81주석, 클릭 영역 오차 0.381pt 미만 검증. 파일·메일·북마크 링크와 모든 clipping/PDF viewer의 완전 호환은 범위 밖. |
| CI 품질·비용 | 변경 영향축에 따라 frontend/Rust/Skia/CodeQL/render 검사를 선택하고, 신뢰 가능한 기본 브랜치의 별도 controller가 필요한 검사 누락·잘못된 skip을 검증. | [PR #3943](https://github.com/edwardkim/rhwp/pull/3943), [#4032](https://github.com/edwardkim/rhwp/pull/4032), [#4519](https://github.com/edwardkim/rhwp/pull/4519), [#4682](https://github.com/edwardkim/rhwp/pull/4682). 현재 문구의 frontend gate 이후 발전한 사례로 추가 가능. 근거 없는 비용 절감 퍼센트는 붙이지 않는다. |
| 편집 정확성과 확장 운영 | 형광펜 적용/Undo 시 혼합 서식 보존, Firefox 다운로드 중복 탭·저장본 자동 재오픈 방지, 자동 열기 파일명 정리. | [PR #6814](https://github.com/edwardkim/rhwp/pull/6814), [#6966](https://github.com/edwardkim/rhwp/pull/6966), [#6965](https://github.com/edwardkim/rhwp/pull/6965). 성능 외에 실사용 오류 대응을 보강할 후보. |

그 밖에 표 페이지 배치(#2512/#5264), HWP5 저장 호환(#3519), 문서 구조 추출 정책(#3715/#3749/#3933), 반응형 도구 상자(#6176), 맞춤 배율·쪽 배치(#6289/#6290/#6458), 머리말·꼬리말 선택/캐시/API(#6394/#6460/#6461), CLI 경계 분리·검증(#6276/#6391), 외부 기여 통합(#6142), Native Skia·cache·toolchain CI 보완도 병합 목록에서 확인했다. 모두 길게 나열하기보다 위 대표 사례에 묶는 편이 읽기 좋다. 이 보조 목록은 제목·병합 상태 중심 확인이며 각 PR의 모든 구현·실측을 재검증한 것은 아니다.

기존 #2397의 `CC 348→2`, `Studio 390개 test`와 #2401의 `p95 최대 3.4ms`는 **그 변경 당시의 성과**다. 현재 전체 테스트 수로 덮어쓰면 근거가 바뀐다. [#2022](https://github.com/edwardkim/rhwp/issues/2022)는 07.19 종료된 umbrella 이슈이므로 “주도”라는 과거 성과는 유지하되 현재 진행 트랙처럼 표현하지 않는 편이 좋다.

## 나머지 항목별 확인

| 대상 | 조사 결과 | 제안 |
| --- | --- | --- |
| About·연락처 | 소개는 개인의 지향을 설명하는 내용이며 날짜 의존 수치 없음. GitHub·Liquid Portfolio 정상 응답. LinkedIn/Medium은 자동 조회 제한. | 소개는 유지. 연락처 변경 여부는 외부 정보로 추정하지 않음. |
| Skills | 현재 기재된 주요 기술은 프로젝트 설명과 일치. 기술 링크 추가 77개 점검에서 npm 홈페이지 외 모두 200. | 최신 라이브러리 출시만을 이유로 과거 사용 기술을 교체할 필요 없음. Spotlight를 성과에 추가하면 관련 기술을 함께 보강할 수 있음. |
| Codex Usage Profile | 기본 비공개, GitHub OAuth, 고정 README PNG URL, revision 공유 URL, CLI browser approval이 최신 README와 일치. 기본 브랜치의 최근 09.01 변경은 라이트 카드 Border Beam 대비 보정. | 현재 핵심 설명 유지 가능. 시각 보정은 대표 성과에 꼭 추가할 정도의 변화는 아님. [README](https://github.com/postmelee/codex-usage-profile), [최근 변경](https://github.com/postmelee/codex-usage-profile/commit/6d3e600d2d33bb7a50147075d013ddd9b945d0b1) |
| hyper-waterfall | 공식 0.3.0의 dry-run/lifecycle와 en/ko/zh-CN 구조가 현재 설명을 뒷받침. 저장소 최근 push 07.12. | 삭제 요청 반영 외에는 Homebrew 버전 차이만 우선 보정. |
| crop | Chrome Web Store v0.1.1, 업데이트 06.15. 요소·영역·전체 페이지 캡처, 로컬 처리, iframe/Shadow DOM/대형 캡처 한계가 현재 내용과 일치. | 유지 가능. 스토어의 188 users는 별도 지표이며 WAU로 간주하지 않는다. 수치 추가가 꼭 필요하지 않음. [스토어](https://chromewebstore.google.com/detail/crop/pdmniipgbjdcpnhbkkppodechbehagki) |
| heartrace | 배포 URL HTTP 200, LinkedIn 단축 링크는 해당 심장달리기 게시물로 연결. | 공개 링크 접근은 확인했지만 카메라·PPG 정확도, 실제 행사 운영·앱 기능은 이번 조사에서 재현하지 않음. 2026.08 표기를 다른 날짜로 바꿀 근거 없음. |
| Liquid Portfolio | 공개 페이지와 저장소 정상. package.json에서 Liquid DOM·use-gesture 의존성 확인. 프로필 안내에도 WebGPU·실험적 HTML-in-Canvas 요구가 남아 있음. | 현재 기능·호환성 설명 유지. 지원 환경이 넓어졌다고 추정해 제한을 제거하지 않음. [저장소](https://github.com/postmelee/liquid-portfolio) |
| knu_lib | 09.02 최근 commit은 privacy/repository hygiene 정리. 공개 링크는 비공개로 접근 불가. | 실제 제품 확장 근거로 삼지 않음. 발표/시연 증거 중심으로 링크 보정. “재구축 중” 및 유지보수 상태는 소유자의 현재 의도 확인이 필요한 정보. |
| MuleReels | 2026.01.15 gallery 파싱 변경 확인. 피드 상세 파싱, 원문 열기·복사·햅틱 구현 확인. Expo Router 상세/공유 전용 라우트는 확인되지 않음. | 앞서 제안한 구현 문구 보정. `2025.10.09`가 시작일인지 하루 작업 기간인지 모호하므로 확인 후 기간 형식을 바꾸는 편이 좋음. 최근 commit 날짜를 곧바로 종료일로 쓰지 않음. |
| Swanwoo Pedals | package.json은 Next 15.5.3·React 19.1·Three/R3F/Drei/React Spring/Tailwind 조합. 공개 사이트 200. 최근 push 2025.10.25. | 기술 설명 유지. `2025.10.02`도 시작일/작업 기간 의미 확인 후보. [package.json](https://github.com/postmelee/swanwoo_pedal/blob/main/package.json) |
| NotiFYI | iOS/Web 저장소 공개, 최근 push는 2025.01.11/01.10으로 행사 시기와 부합. | 과거 해커톤 구현 설명은 유지. 강냉톤 홈페이지 링크는 보정 대상. 네이티브와 웹 기여 범위를 합쳐 단독 전체 개발로 표현하지 않음. |
| Work | 2020–2021 과거 경력·기술을 현재 버전 기준으로 다시 쓰는 것은 불필요. Naver Map PR #70과 공개 모듈 링크 접근 가능. | 죽은 링크 교체. 재직 기간·내부 성능 3초→0.1초는 공개 증거만으로 새로 재검증하지 못했으므로 기존 기록 유지. |
| OpenAI 선정 | 공개 GitHub 프로필에 Selected Maintainer 표기와 별도 redacted selection confirmation 이미지 링크 존재. | 현재 내용 유지. 프로그램 안내만 연결하기보다 공개 선정 증빙을 직접 연결하면 증거 탐색이 쉬워짐. 선정 월은 이미지 내용을 별도 검증하지 않았으므로 변경하지 않음. [프로필](https://github.com/postmelee) |
| 기타 수상 | 학교 공지·발표자료·수상 Notion·경기콘텐츠진흥원 링크 200. AICT는 403, 강냉톤은 DNS 실패. | 상금·지원금·순위·행사 일시 등 과거 사실은 그대로 유지. 200은 내용·공유 권한까지 검증했다는 뜻이 아니므로 공개 증빙 접근을 별도로 확인할 필요가 있음. |
| Education | 현재는 소프트웨어공학부 재학, 2027.02 졸업예정. 수상에는 컴퓨터공학부 명칭 사용. | 조사일에는 졸업 예정일이 아직 미래. 졸업 완료로 바꾸지 않음. 학적상 공식 학부 명칭과 현재 재학 상태는 외부 정보만으로 확정하지 않음. |
| SEO·공유 이미지 | canonical과 og URL이 실제 `/portfolio/` 배포 경로와 일치. 현재 OG 이미지에는 이름·직무·소프트웨어공학부·이메일과 구직 배지가 있고 제거 요청 지표는 없음. | 이번 문구 변경 때문에 이미지 재생성은 불필요. 학부 명칭/구직 상태 변경 시 본문과 이미지 동시 보정. |

## 소스·표시 구조에서 발견한 보정 후보

- 실제 경력·프로젝트 본문은 `src/data/projects.json`에서 읽는다. `src/data/portfolio.ts`에는 현재 사용하지 않는 `workExperience`/`personalProjects` 과거 데이터가 남아 있다. 중복 데이터 정리는 향후 수정 누락을 줄인다.
- 숨김 프로젝트 `codex-usage-analyzer`는 `websiteVisible: false`. 저장소 package.json의 버전은 여전히 0.4.1로 일치한다. 178 tests/28 files는 릴리스 당시 검증 수치로 유지하고, 재노출 시 실제 패키지와 호환성을 다시 확인하는 편이 좋다.
- 사용하지 않는 `GuessWHAT` 데이터의 sketcher 참고 링크가 404다. 현재 화면에는 노출되지 않는다.
- 기본 브라우저 뷰포트(약 1265px)에서 Projects 하위 목차의 Open Source 문자가 본문 왼쪽 여백에 가까워지는 배치를 관찰했다. 하위 앵커 수정 시 목차 폭/본문 간격도 함께 확인하는 편이 좋다. 화면 전체의 모바일 회귀 검증을 완료했다고 주장하지 않는다.

## 검증 범위와 한계

- `npm run build` 성공: TypeScript 검사와 Vite production build 통과.
- 브라우저에서 Projects가 Work보다 앞에 렌더링되고 두 상위 목차 이동·활성 표시가 정상임을 확인.
- 새 WAU/clone 문구와 지정한 기존 지표 제거를 DOM에서 확인하고 실제 배치를 확인.
- 브라우저 warning/error 로그 없음.
- 내용·메타데이터 URL 80개와 추가 기술 URL 77개, 합계 **157개**를 비로그인 HTTP GET으로 점검. 결과는 **200: 145개 / 403: 5개 / 404: 4개 / DNS 실패: 2개 / 999: 1개**.
- 링크별 결과와 공개 릴리스별 DMG 다운로드 합산 원시는 [조사 증거 JSON](portfolio-audit-2026-09-14-evidence.json)에 보관했다.
- 403/999는 자동 요청 차단일 수 있으므로 죽은 링크로 단정하지 않았다. Notion·Drive 같은 SPA의 200도 공개 내용이나 파일 권한을 보장하지 않는다.
- 원 프로젝트 전체 테스트, 서비스 로그인, 카메라·네이티브 앱 실행, 개인정보·재직/학적 증빙 확인은 하지 않았다. “변경 없음” 대신 확인한 범위 안에서 “기존 설명 유지 가능”으로 구분했다.
- 로컬 수정만 수행했으며 커밋·push·배포는 하지 않았다.
