import { NextResponse } from "next/server";
import { contactEmail } from "@/lib/site";

/**
 * Early-access intake. Delivery runs through Resend's REST API so the route
 * needs no extra dependency — set RESEND_API_KEY (and optionally
 * EARLY_ACCESS_FROM / EARLY_ACCESS_TO) to turn it on. Without the key the
 * marketing page never renders the API-backed form, so this route is only
 * reachable if the key was removed after a page load.
 */

type Payload = {
  name?: unknown;
  business?: unknown;
  email?: unknown;
  phone?: unknown;
  trucks?: unknown;
};

const clean = (value: unknown, max = 200) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: `Our form is offline right now — email ${contactEmail}.` },
      { status: 503 },
    );
  }

  let payload: Payload;

  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "We could not read that." }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const business = clean(payload.business, 160);
  const email = clean(payload.email, 200);
  const phone = clean(payload.phone, 40);
  const trucks = clean(payload.trucks, 20);

  if (!name || !business || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please add your name, business, and a valid email." },
      { status: 400 },
    );
  }

  const lines = [
    `Name: ${name}`,
    `Business: ${business}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Approx. trucks: ${trucks || "—"}`,
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.EARLY_ACCESS_FROM || "GoTruckCheck <onboarding@resend.dev>",
      to: [process.env.EARLY_ACCESS_TO || contactEmail],
      reply_to: email,
      subject: `Early access — ${business}`,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("early-access delivery failed", response.status, await response.text());
    return NextResponse.json(
      { error: `We could not send that — email ${contactEmail}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
