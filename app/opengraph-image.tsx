import { ImageResponse } from "next/og";

export const alt = "GoTruckCheck — compliance alerts that book appointments";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f7f9",
          color: "#14243e",
          padding: "68px 76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1d4a9b",
              color: "white",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28">
              <path
                d="M4 14.5 10.5 21 24 6"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>GoTruckCheck</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.04,
              letterSpacing: "-0.045em",
              maxWidth: 980,
              fontWeight: 800,
            }}
          >
            You sell the compliance. The alerts sell the appointments.
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#667085" }}>
            <span>$2 per truck / month</span>
            <span>·</span>
            <span>Automatic texts from your number</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
