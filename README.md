# jung_portfolio

정유빈(Jung Yubin) — Product Designer 포트폴리오. 정적 HTML 시안을 **Next.js (App Router + TypeScript)** 로 변환한 프로젝트입니다.

## 기술 스택

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- `next/font` (Newsreader · Space Mono)
- 의존성 없는 순수 CSS (`app/globals.css`)

## 구조

```
.
├── app/
│   ├── layout.tsx      # 폰트 · 메타데이터 · 루트 레이아웃
│   ├── page.tsx        # 전체 페이지 (Hero · Work · About · Process · Skills · Contact)
│   └── globals.css     # 디자인 토큰 + 전체 스타일
├── components/
│   ├── ImageSlot.tsx   # 이미지 플레이스홀더 (원본 <image-slot> 대체)
│   └── SiteEffects.tsx # 커서 · 스크롤 리빌 · 마그네틱 버튼 · 시계 등 인터랙션
├── legacy/             # 변환 전 원본 (Portfolio.html, image-slot.js)
└── screenshots/        # 디자인 캡처
```

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm start        # 빌드 결과 실행
```

기본 포트는 3000이며, 점유 시 자동으로 다음 포트(3001…)를 사용합니다.

## 메모

- 원본 `<image-slot>` 은 omelette 디자인 캔버스 런타임 전용 컴포넌트라, Next.js에서는 정적 플레이스홀더(`components/ImageSlot.tsx`)로 대체했습니다. 실제 이미지는 `src` prop으로 연결하면 됩니다.
- 이력서 PDF / 소셜 링크는 `app/page.tsx` 의 해당 핸들러·URL을 교체해 연결하세요.
