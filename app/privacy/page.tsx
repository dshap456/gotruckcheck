import type { Metadata } from "next";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What GoTruckCheck collects, why, and how to get your data exported or deleted.",
  alternates: { canonical: "/privacy" },
};

const updated = "July 29, 2026";

export default function PrivacyPage() {
  return (
    <article className="legal">
      <div className="container legal__inner">
        <p className="eyebrow">Legal</p>
        <h1>Privacy policy</h1>
        <p className="legal__updated">Last updated {updated}</p>

        <p className="legal__lede">
          GoTruckCheck is a tool for Clean Truck Check testers. This page explains
          what this website collects, what the service collects once you are a
          customer, and how to get any of it back or deleted.
        </p>

        <h2>What this website collects</h2>
        <p>
          If you fill in the early-access form, we receive the name, business
          name, email address, and—if you enter them—the phone number and truck
          count you typed. We use that only to contact you about early access and
          to set up your first customer list.
        </p>
        <p>
          We use Vercel Analytics and Vercel Speed Insights to count page views
          and measure loading performance. These do not use cookies and do not
          build a cross-site profile of you. This site sets no advertising or
          tracking cookies.
        </p>

        <h2>What the service collects</h2>
        <p>
          Once you are a customer, GoTruckCheck stores the customer and vehicle
          records you give us—business names, contact names, phone numbers, email
          addresses, VINs, and Clean Truck Check deadline dates—plus the reminders
          we send and the appointments your customers book.
        </p>
        <p>
          We use that information to run your account: to check deadlines, send
          reminders from your business number, show your schedule, and bill you
          for the trucks you are watching.
        </p>

        <h2>Your customer list is yours</h2>
        <p>
          We do not sell, rent, or share your customer list. We do not use it to
          market to your customers, and we do not make it available to other
          testers. Reminders go out under your business name, not ours.
        </p>

        <h2>Who we share data with</h2>
        <p>
          We share data only with the vendors needed to run the service—hosting,
          database, email, and text-message delivery, and payment processing—and
          only to the extent they need it to do that job. We may also disclose
          information if the law requires it.
        </p>

        <h2>Text messages</h2>
        <p>
          Reminder texts are sent to the phone numbers you supply, on the
          schedule you set. Recipients can reply STOP to opt out at any time, and
          we honor that opt-out for the number that sent it.
        </p>

        <h2>Security and retention</h2>
        <p>
          Data is transmitted over TLS and stored encrypted at rest. Access is
          limited to the people who operate the service. We keep your account data
          for as long as your account is open, and delete or anonymize it after
          you close your account, except where we have to keep records for tax or
          legal reasons.
        </p>

        <h2>Your choices</h2>
        <p>
          Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> to get a copy
          of your data, correct it, or have it deleted. California residents may
          also request the categories of personal information we collect and how
          we use them. We will not discriminate against you for making a request.
        </p>

        <h2>Children</h2>
        <p>
          GoTruckCheck is a business tool and is not directed to anyone under 18.
          We do not knowingly collect information from children.
        </p>

        <h2>Changes</h2>
        <p>
          If this policy changes in a way that matters, we will update the date at
          the top of this page and, for material changes, tell account holders by
          email.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy go to{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </div>
    </article>
  );
}
