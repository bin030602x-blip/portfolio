"use client";

import dynamic from "next/dynamic";
import ImageSlot from "@/components/ImageSlot";
import SiteEffects from "@/components/SiteEffects";

const PdfCard = dynamic(() => import("@/components/PdfCard"), { ssr: false });
import { TOOL_LOGOS } from "@/components/ToolLogos";

const PDF_URL = "https://atapsctqeipwketirxgy.supabase.co/storage/v1/object/public/documents/jung-yubin-service-design-final.pdf";

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

const RESUME_URL = "https://atapsctqeipwketirxgy.supabase.co/storage/v1/object/public/documents/jung-yubin-service-design-final.pdf";
const noop = (e: React.MouseEvent) => e.preventDefault();

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
          <a href="#work" data-link><span>Work</span></a>
          <a href="#about" data-link><span>About</span></a>
          <a href="#process" data-link><span>Process</span></a>
          <a href="#contact" data-link><span>Contact</span></a>
        </div>
        <a className="resume" href={RESUME_URL} data-link target="_blank" rel="noopener noreferrer">
          <span>Résumé ↓</span>
        </a>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-kicker rv">
          <span className="dot-accent">●</span>
          <span className="label" style={{ color: "var(--fg-2)" }}>Product Designer</span>
          <hr className="k-rule" />
          <span className="label">Est. 2019</span>
          <span className="label hero-location" id="clock">Seoul ——:——</span>
        </div>

        <h1 className="hero-name rv" aria-label="Jung Yubin">
          JUNG
          <br />
          YUBIN<span className="it">.</span>
        </h1>

        <div className="hero-divider" />

        <div className="hero-bottom rv">
          <p className="intro">
            천재 디자이너.{" "}
            <strong>핀테크·헬스케어·B2B</strong> 제품에서 복잡한 흐름을
            명료한 인터페이스와 디자인 시스템으로 풀어냅니다.
          </p>
          <div className="hero-side">
            <span className="avail">
              <span className="pulse" />
              2026 Q3 새로운 기회를 찾는 중
            </span>
            <span className="scrollcue">
              Scroll<span className="ln" />Work
            </span>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="track" id="marq">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span className="it" key={i}>{m}</span>
            ))}
          </div>
        </div>
      </header>

      {/* WORK */}
      <section id="work">
        <div className="sec-label rv">
          <span className="dot-accent">●</span>
          <span className="label">Selected Work</span>
          <span className="sec-n">01</span>
        </div>
        <div className="work-grid">
          <PdfCard
            url={PDF_URL}
            no="00"
            title="서비스디자인 기말"
            tags={["Service Design", "Research", "2026"]}
            year="2026"
            role="정유빈"
          />
          {PROJECTS.map((p) => (
            <a className="proj-card rv" href="#" onClick={noop} key={p.no}>
              <div className="card-img">
                <ImageSlot radius={0} placeholder={p.placeholder} />
                <span className="card-arrow">↗</span>
              </div>
              <div className="card-body">
                <div className="card-top">
                  <span className="card-num">{p.no}</span>
                  <span className="card-title">
                    {p.title}
                    <em className="arr">↗</em>
                  </span>
                </div>
                <div className="card-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="card-foot">
                  <span className="card-year">{p.year}</span>
                  <span className="card-role">{p.role}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="sec-label rv">
          <span className="dot-accent">●</span>
          <span className="label">About</span>
          <span className="sec-n">02</span>
        </div>
        <div className="about">
          <div className="about-l rv">
            <p className="lead">
              제품을 만드는 일은 결국{" "}
              <em>사람의 결정</em>을 돕는 일이라 믿습니다. 그래서 화려함보다
              명료함을, 직관보다 검증을 먼저 둡니다.
            </p>
            <div className="portrait-wrap">
              <div className="portrait-circle">
                <ImageSlot radius={999} placeholder="portrait · 1:1" />
              </div>
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
      <section id="process">
        <div className="sec-label rv">
          <span className="dot-accent">●</span>
          <span className="label">Approach</span>
          <span className="sec-n">03</span>
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
      <section id="skills">
        <div className="sec-label rv">
          <span className="dot-accent">●</span>
          <span className="label">Capabilities</span>
          <span className="sec-n">04</span>
        </div>
        <div className="skills">
          <div className="col rv">
            <h4>Tools</h4>
            <div className="tools-row">
              {TOOL_LOGOS.map((t) => (
                <div className="tool" key={t.cap}>
                  <span className="mk">{t.logo}</span>
                  <span className="cap">{t.cap}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col rv">
            <h4>Practice</h4>
            <div className="skill-tags">
              {PRACTICE.map((t) => (
                <span className="t" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="sec-label rv" style={{ borderBottom: "none", paddingBottom: 24 }}>
          <span className="dot-accent">●</span>
          <span className="label">Let&apos;s talk</span>
          <span className="sec-n">05</span>
        </div>
        <div className="big rv">
          <a href="mailto:hello@jungyubin.design">
            <span className="it">같이</span>&nbsp;만들어요
            <span className="arr">↗</span>
          </a>
        </div>
        <div className="contact-row rv">
          <div className="socials">
            <a href="mailto:hello@jungyubin.design">Email</a>
            <a href="#" onClick={noop}>LinkedIn</a>
            <a href="#" onClick={noop}>Behance</a>
            <a href="#" onClick={noop}>Dribbble</a>
            <a href="#" onClick={noop}>Instagram</a>
          </div>
          <a className="resume2" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
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
