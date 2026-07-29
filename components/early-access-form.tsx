"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { contactEmail } from "@/lib/site";

export type SubmitMode = "api" | "mailto";

type Status = "idle" | "sending" | "sent" | "handed-off" | "error";

type Fields = {
  name: string;
  business: string;
  email: string;
  phone: string;
  trucks: string;
};

const empty: Fields = { name: "", business: "", email: "", phone: "", trucks: "" };

function composeMailto(fields: Fields) {
  const body = [
    `Name: ${fields.name}`,
    `Business: ${fields.business}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone || "—"}`,
    `Approx. trucks under watch: ${fields.trucks || "—"}`,
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(
    "GoTruckCheck early access",
  )}&body=${encodeURIComponent(body)}`;
}

export function EarlyAccessForm({ mode }: { mode: SubmitMode }) {
  const [fields, setFields] = useState<Fields>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement>) =>
    setFields((current) => ({ ...current, [key]: event.target.value }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (mode === "mailto") {
      // No inbox is wired up yet, so hand the details to the visitor's mail
      // app instead of pretending the request was received.
      window.location.href = composeMailto(fields);
      setStatus("handed-off");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error || "That did not go through.");
      }

      setStatus("sent");
      setFields(empty);
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "That did not go through.",
      );
    }
  }

  if (status === "sent" || status === "handed-off") {
    return (
      <div className="access-form access-form--done" role="status">
        <span className="access-form__check" aria-hidden="true">
          <Check />
        </span>
        <h3>
          {status === "sent" ? "You're on the list." : "Your email is ready to send."}
        </h3>
        <p>
          {status === "sent"
            ? "We'll reach out within one business day to set up your first list. Nothing to install in the meantime."
            : `We opened a prefilled message in your email app. Send it and we'll reply within one business day. If nothing opened, email ${contactEmail}.`}
        </p>
      </div>
    );
  }

  return (
    <form className="access-form" onSubmit={onSubmit} noValidate={false}>
      <div className="access-form__row">
        <div className="field">
          <label htmlFor="ea-name">Your name</label>
          <input
            id="ea-name"
            name="name"
            autoComplete="name"
            required
            value={fields.name}
            onChange={set("name")}
          />
        </div>
        <div className="field">
          <label htmlFor="ea-business">Business name</label>
          <input
            id="ea-business"
            name="business"
            autoComplete="organization"
            required
            value={fields.business}
            onChange={set("business")}
          />
        </div>
      </div>

      <div className="access-form__row">
        <div className="field">
          <label htmlFor="ea-email">Email</label>
          <input
            id="ea-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={set("email")}
          />
        </div>
        <div className="field">
          <label htmlFor="ea-phone">
            Phone <span className="field__hint">optional</span>
          </label>
          <input
            id="ea-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={set("phone")}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="ea-trucks">
          Roughly how many trucks would you watch?{" "}
          <span className="field__hint">optional</span>
        </label>
        <input
          id="ea-trucks"
          name="trucks"
          inputMode="numeric"
          placeholder="150"
          value={fields.trucks}
          onChange={set("trucks")}
        />
      </div>

      {status === "error" ? (
        <p className="access-form__error" role="alert">
          {error}{" "}
          <a href={composeMailto(fields)}>Email us instead</a>.
        </p>
      ) : null}

      <button
        className="button button--primary access-form__submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <Loader2 className="spin" aria-hidden="true" size={18} />
            Sending
          </>
        ) : (
          <>
            Put my trucks on the list
            <ArrowRight aria-hidden="true" size={18} />
          </>
        )}
      </button>

      <p className="access-form__fine">
        No contract and no card. We use your details to set up your first list and
        nothing else.
      </p>
    </form>
  );
}
