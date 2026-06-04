"use client";

import ImageSlot from "@/components/ImageSlot";
import SiteEffects from "@/components/SiteEffects";

const PROJECTS = [
  {
    no: "01",
    title: "Momenta",
    tags: ["Fintech", "iOS · Android", "0→1"],
    year: "2025",
    role: "Lead Product Designer",
    slot: "work-momenta",
    placeholder: "momenta cover",
  },
  {
    no: "02",
    title: "Garden",
    tags: ["Design System", "Web", "Tokens"],
    year: "2024",
    role: "Systems Lead",
    slot: "work-garden",
    placeholder: "garden cover",
  },
  {
    no: "03",
    title: "Atlas",
    tags: ["B2B Dashboard", "Data Viz"],
    year: "2024",
    role: "Senior Designer",
    slot: "work-atlas",
    placeholder: "atlas cover",
  },
  {
    no: "04",
    title: "Bloom",
    tags: ["Healthcare", "Booking Flow"],
    year: "2023",
    role: "Product Designer",
    slot: "work-bloom",
    placeholder: "bloom cover",
  },
  {
    no: "05",
    title: "Loop",
    tags: ["Music", "Onboarding", "Motion"],
    year: "2022",
    role: "Product Designer",
    slot: "work-loop",
    placeholder: "loop cover",
  },
  {
    no: "06",
    title: "Press",
    tags: ["News", "Rebrand", "Subscription"],
    year: "2021",
    role: "UX / UI",
    slot: "work-press",
    placeholder: "press cover",
  },
];

const EXPERIENCE = [
  { co: "Drift Financial", ro: "Lead Product Designer", yr: "'24—now" },
  { co: "Northwind", ro: "Senior Product Designer", yr: "'21—'24" },
  { co: "Studio Pivot", ro: "Product Designer", yr: "'19—'21" },
  { co: "SADI", ro: "BFA, Communication Design", yr: "'15—'19" },
];

const PROCESS = [
  {
    pn: "A1",
    h: "Frame",
    p: "문제를 다시 정의합니다. 누구의, 어떤 결정을 막고 있는지부터 명확히 합니다.",
  },
  {
    pn: "A2",
    h: "Explore",
    p: "빠르고 거칠게 여러 방향을 펼칩니다. 한 개의 정답보다 비교 가능한 선택지를.",
  },
  {
    pn: "A3",
    h: "Systemize",
    p: "반복되는 패턴은 토큰과 컴포넌트로 묶어 팀 전체가 빠르게 일하도록 만듭니다.",
  },
  {
    pn: "A4",
    h: "Ship & Learn",
    p: "출시는 끝이 아니라 측정의 시작. 지표와 사용자 목소리로 다음을 결정합니다.",
  },
];

const TOOLS = [
  { mk: <b>Fg</b>, cap: "Figma" },
  { mk: <b>Fr</b>, cap: "Framer" },
  { mk: <b>Pp</b>, cap: "ProtoPie" },
  { mk: <b>Ae</b>, cap: "After Effects" },
  { mk: <span className="code">&lt;/&gt;</span>, cap: "HTML / CSS" },
];

const PRACTICE = [
  "Design Systems",
  "Interaction Design",
  "Prototyping",
  "UX Research",
  "Usability Testing",
  "Information Architecture",
  "Motion",
  "Accessibility",
  "Product Strategy",
];

const MARQUEE = [
  "Design Systems",
  "Interaction",
  "Prototyping",
  "Research",
  "Product Strategy",
];

const noop = (e: React.MouseEvent) => e.preventDefault();
const resumeAlert = (e: React.MouseEvent) => {
  e.preventDefault();
  alert("이력서 PDF를 여기에 연결하세요.");
};

export default function Home() {
  return (
    <>
      <div className="cur" id="cur" />
      <div className="cur-dot" id="curDot" />
      <div className="folio" id="folio">
        Jung Yubin — Selected Work © 2026
      </div>

      {/* NAV */}
      <nav className="nav" id="nav">
        <a className="brand" href="#top">
          <span className="dot" />
          JUNG&nbsp;YUBIN
        </a>
        <div className="menu">
          <a href="#work" data-link>
            <span>Work</span>
          </a>
          <a href="#about" data-link>
            <span>About</span>
          </a>
          <a href="#process" data-link>
            <span>Process</span>
          </a>
          <a href="#contact" data-link>
            <span>Contact</span>
          </a>
        </div>
        <a className="resume" href="#" data-link onClick={resumeAlert}>
          <span>Résumé ↓</span>
        </a>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-meta">
          <span
            className="label"
            style={{ color: "var(--ink)", letterSpacing: ".32em" }}
          >
            정유빈
          </span>
          <span className="label" id="clock">
            Seoul ——:——
          </span>
        </div>
        <div className="hero-grid">
          <div className="masthead">
            <div className="kicker">
              <span className="label">Product Designer</span>
              <hr className="rule" style={{ flex: 1, maxWidth: 200 }} />
              <span className="label">Est. 2019</span>
            </div>
            <h1 aria-label="Jung Yubin">
              <span className="word">
                <i>Yubin</i>
              </span>
              <br />
              <span className="word it">
                <i>Jung.</i>
              </span>
            </h1>
            <div className="hero-bottom rv">
              <p className="intro">
                7년 차 프로덕트 디자이너. <b>핀테크·헬스케어·B2B</b> 제품에서
                복잡한 흐름을 명료한 인터페이스와 디자인 시스템으로 풀어냅니다.
              </p>
              <div className="hero-side">
                <span className="avail">
                  <span className="pulse" />2026 Q3 새로운 기회를 찾는 중
                </span>
                <span className="scrollcue">
                  Scroll<span className="ln" />Work
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="track" id="marq">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span className="it" key={i}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* WORK */}
      <section id="work">
        <div className="sec-head rv">
          <span className="no">01 — Selected Work</span>
          <h2>여섯 개의 케이스</h2>
        </div>
        <div className="work-list">
          {PROJECTS.map((p) => (
            <a className="proj rv" href="#" onClick={noop} key={p.no}>
              <span className="pno">{p.no}</span>
              <span className="pmain">
                <span className="ptitle">
                  {p.title} <em>↗</em>
                </span>
                <span className="ptags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </span>
              </span>
              <span className="pmeta">
                <span className="yr">{p.year}</span>
                <span>{p.role}</span>
              </span>
              <span className="preveal">
                <ImageSlot radius={4} placeholder={p.placeholder} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ marginTop: 70 }}>
        <div className="sec-head rv">
          <span className="no">02 — About</span>
          <h2>디자이너 소개</h2>
        </div>
        <div className="about">
          <div>
            <p className="lead rv">
              제품을 만드는 일은 결국 <em>사람의 결정</em>을 돕는 일이라 믿습니다.
              그래서 화려함보다 명료함을, 직관보다 검증을 먼저 둡니다.
            </p>
            <div className="portrait rv" style={{ marginTop: 34 }}>
              <ImageSlot radius={6} placeholder="portrait / 4:5" />
            </div>
          </div>
          <div className="about-r rv">
            <p>
              서울을 기반으로 일하는 프로덕트 디자이너입니다. 리서치부터 디자인
              시스템, 핸드오프까지 제품의 전 과정을 책임지며, 엔지니어와 가까이
              일하는 것을 즐깁니다.
            </p>
            <p>
              지난 7년 동안 스타트업과 규모 있는 조직 양쪽에서 0→1 출시와 0→100
              스케일을 모두 경험했습니다. 측정 가능한 임팩트와 잘 정돈된 디테일,
              둘 다 포기하지 않으려 합니다.
            </p>
            <div className="exp">
              {EXPERIENCE.map((row) => (
                <div className="row" key={row.co}>
                  <span className="co">{row.co}</span>
                  <span className="ro">{row.ro}</span>
                  <span className="yr">{row.yr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process" style={{ marginTop: 60 }}>
        <div className="sec-head rv">
          <span className="no">03 — Approach</span>
          <h2>일하는 방식</h2>
        </div>
        <div className="proc-grid rv">
          {PROCESS.map((c) => (
            <div className="cell" key={c.pn}>
              <span className="pn">{c.pn}</span>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ marginTop: 50 }}>
        <div className="sec-head rv">
          <span className="no">04 — Capabilities</span>
          <h2>스킬 &amp; 툴</h2>
        </div>
        <div className="skills">
          <div className="col rv">
            <h4>Tools</h4>
            <div className="tools-row">
              {TOOLS.map((t) => (
                <div className="tool" key={t.cap}>
                  <span className="mk">{t.mk}</span>
                  <span className="cap">{t.cap}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col rv">
            <h4>Practice</h4>
            <div className="skill-tags">
              {PRACTICE.map((t) => (
                <span className="t" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <span className="label rv" style={{ display: "block", marginBottom: 16 }}>
          05 — Let&apos;s talk
        </span>
        <div className="big rv">
          <a href="mailto:hello@jungyubin.design">
            <em>같이</em> 만들어요<span className="arr">↗</span>
          </a>
        </div>
        <div className="contact-row rv">
          <div className="socials">
            <a href="mailto:hello@jungyubin.design">Email</a>
            <a href="#" onClick={noop}>
              LinkedIn
            </a>
            <a href="#" onClick={noop}>
              Behance
            </a>
            <a href="#" onClick={noop}>
              Dribbble
            </a>
            <a href="#" onClick={noop}>
              Instagram
            </a>
          </div>
          <a className="resume2" href="#" onClick={resumeAlert}>
            <span>Résumé 2026 (PDF)</span>
            <span className="ic">↓</span>
          </a>
        </div>
      </section>

      <footer className="foot">
        <span>Jung Yubin — Product Designer</span>
        <span id="clock2">Seoul</span>
        <span>Designed in HTML · 2026</span>
      </footer>

      <SiteEffects />
    </>
  );
}
