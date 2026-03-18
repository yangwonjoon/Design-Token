# Design Token — 프로젝트 구조

## 기술 스택

| 역할 | 라이브러리 | 버전 |
|---|---|---|
| 프레임워크 | Next.js (App Router) | ^16 |
| 스타일 | Tailwind CSS | ^4 |
| 컴포넌트 문서화 | Storybook (nextjs-vite) | ^10 |
| 디자인 토큰 빌드 | Style Dictionary | ^5 |
| 언어 | TypeScript | ^5 |

---

## 디렉토리 구조

```
Design-Token/
│
├── tokens/
│   └── tokens.json                 # 토큰 원본 정의 (유일한 진실의 원천)
│
├── src/
│   ├── styles/
│   │   └── variables.css           # ⚡ 자동 생성 — 직접 편집 금지
│   │
│   ├── app/                        # Next.js App Router
│   │   ├── globals.css             # variables.css + Tailwind import
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/                 # 공유 컴포넌트
│   │
│   └── stories/                    # Storybook 스토리
│       ├── Button.tsx / Button.stories.ts
│       ├── Header.tsx / Header.stories.ts
│       └── Page.tsx   / Page.stories.ts
│
├── .storybook/
│   ├── main.ts                     # Storybook 빌더·애드온 설정
│   └── preview.ts                  # 글로벌 CSS import (variables.css 포함)
│
├── style-dictionary.config.mjs     # 토큰 빌드 파이프라인 설정
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 빌드 파이프라인

```
tokens/tokens.json
       │
       │  npm run tokens
       │  (style-dictionary build)
       ▼
src/styles/variables.css            # CSS 커스텀 프로퍼티 56개 자동 생성
       │
       │  @import in globals.css
       ▼
Next.js 앱 + Storybook              # var(--token-name) 으로 사용
```

---

## 토큰 카테고리

| 카테고리 | CSS 변수 prefix | 항목 수 | 예시 |
|---|---|---|---|
| Color | `--color-` | 22 | `--color-primary`, `--color-text-secondary` |
| Spacing | `--spacing-` | 10 | `--spacing-4` (= 16px) |
| Font Size | `--font-size-` | 8 | `--font-size-base` (= 16px) |
| Font Weight | `--font-weight-` | 4 | `--font-weight-bold` (= 700) |
| Border Radius | `--border-radius-` | 7 | `--border-radius-lg` (= 8px) |
| Shadow | `--shadow-` | 5 | `--shadow-md` |

> 전체 56개 CSS 변수 → `src/styles/variables.css` 참고

---

## 스크립트

| 명령어 | 설명 |
|---|---|
| `npm run tokens` | `tokens.json` → `variables.css` 생성 |
| `npm run dev` | 토큰 빌드 후 Next.js 개발 서버 실행 |
| `npm run build` | 토큰 빌드 후 Next.js 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run storybook` | Storybook 개발 서버 실행 (port 6006) |
| `npm run build-storybook` | Storybook 정적 빌드 |
| `npm run lint` | ESLint 검사 |

---

## 토큰 수정 워크플로우

```
1. tokens/tokens.json 편집
2. npm run tokens 실행
3. src/styles/variables.css 자동 갱신 (커밋 불필요 — .gitignore 처리됨)
4. Next.js / Storybook에 즉시 반영
```

> `src/styles/variables.css`는 `.gitignore`에 포함되어 있어 빌드 산출물로 관리됩니다.
> 토큰 변경은 항상 `tokens/tokens.json`에서만 수행하세요.
