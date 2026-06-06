"use client";

import { useState, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = {
  url: string;
  no: string;
  title: string;
  tags: string[];
  year: string;
  role: string;
};

export default function PdfCard({ url, no, title, tags, year, role }: Props) {
  const [open, setOpen] = useState(false);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef) return;
    const ro = new ResizeObserver((entries) => {
      setThumbWidth(entries[0].contentRect.width);
    });
    ro.observe(containerRef);
    return () => ro.disconnect();
  }, [containerRef]);

  const close = useCallback((e: React.MouseEvent) => {
    if ((e.target as Element).classList.contains("pdf-modal-backdrop")) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="proj-card rv" onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        <div className="card-img" ref={setContainerRef} style={{ overflow: "hidden", background: "#f0ede8" }}>
          {thumbWidth > 0 && (
            <Document file={url} loading={<span className="ph">로딩 중…</span>}>
              <Page
                pageNumber={1}
                width={thumbWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          )}
          <span className="card-arrow">↗</span>
        </div>
        <div className="card-body">
          <div className="card-top">
            <span className="card-num">{no}</span>
            <span className="card-title">
              {title}
              <em className="arr">↗</em>
            </span>
          </div>
          <div className="card-tags">
            {tags.map((t) => <span key={t}>{t}</span>)}
          </div>
          <div className="card-foot">
            <span className="card-year">{year}</span>
            <span className="card-role">{role}</span>
          </div>
        </div>
      </div>

      {open && (
        <div className="pdf-modal-backdrop" onClick={close}>
          <div className="pdf-modal">
            <button className="pdf-modal-close" onClick={() => setOpen(false)}>✕</button>
            <iframe
              src={`${url}#toolbar=1`}
              className="pdf-modal-iframe"
              title={title}
            />
          </div>
        </div>
      )}
    </>
  );
}
