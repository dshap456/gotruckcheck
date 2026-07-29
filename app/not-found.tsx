import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <p className="eyebrow">404</p>
        <h1>That page took a different route.</h1>
        <p>
          The link is broken or the page has moved. Everything about deadline
          monitoring, pricing, and early access is on the home page.
        </p>
        <div className="not-found__actions">
          <Link className="button button--primary" href="/">
            Back to the home page
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <a className="text-link" href={`mailto:${contactEmail}`}>
            Email us instead
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
