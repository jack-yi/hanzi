import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;

// ponytail: satori's default font has no CJK glyphs, so the mark is a
// tián-zì-gé (practice grid) drawn in CSS instead of an actual hanzi.
export default function OgImage() {
  const cell = 150;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #c53030 0%, #9b2525 60%, #7f1d1d 100%)",
          color: "#fdfbf7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: cell,
            height: cell,
            display: "flex",
            border: "6px solid #fdfbf7",
            borderRadius: 12,
            position: "relative",
            background: "rgba(253,251,247,0.08)",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: cell / 2 - 1,
              top: 8,
              width: 2,
              height: cell - 28,
              background: "rgba(253,251,247,0.55)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: cell / 2 - 7,
              left: 8,
              height: 2,
              width: cell - 28,
              background: "rgba(253,251,247,0.55)",
            }}
          />
        </div>
        <div style={{ marginTop: 40, fontSize: 88, fontWeight: 800, display: "flex" }}>
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 34,
            color: "#fbd5c8",
            display: "flex",
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 36,
            padding: "10px 30px",
            borderRadius: 999,
            background: "#fdfbf7",
            color: "#9b2525",
            fontSize: 28,
            fontWeight: 700,
            display: "flex",
          }}
        >
          Stroke order · Writing practice · All 180 HSK 1 characters
        </div>
      </div>
    ),
    size
  );
}
