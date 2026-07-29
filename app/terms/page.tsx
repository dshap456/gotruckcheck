import type { Metadata } from "next";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "The terms that apply to the GoTruckCheck website and early-access program.",
  alternates: { canonical: "/terms" },
};

const updated = "July 29, 2026";

export default function TermsPage() {
  return (
    <article className="legal">
      <div className="container legal__inner">
        <p className="eyebrow">Legal</p>
        <h1>Terms of service</h1>
        <p className="legal__updated">Last updated {updated}</p>

        <p className="legal__lede">
          These terms cover your use of the GoTruckCheck website and the
          early-access program. Customers who go on to use the product also
          receive a service agreement that governs the account itself.
        </p>

        <h2>What GoTruckCheck does</h2>
        <p>
          GoTruckCheck tracks Clean Truck Check deadlines, sends reminders to the
          contacts you supply, and helps you schedule work. It is a scheduling and
          reminder tool.
        </p>

        <h2>What GoTruckCheck does not do</h2>
        <p>
          GoTruckCheck is not affiliated with, endorsed by, or acting on behalf of
          the California Air Resources Board. It does not replace CTC-VIS, submit
          test results, register vehicles, pay compliance fees, or determine
          whether a vehicle is compliant. Nothing on this site is legal or
          regulatory advice.
        </p>
        <p>
          <strong>
            You remain responsible for your own compliance obligations and those
            you take on for your customers.
          </strong>{" "}
          Deadline dates shown in the product come from the records available to
          us and may be incomplete or out of date. Always confirm against the
          official record before you rely on a date.
        </p>

        <h2>Early access</h2>
        <p>
          Early access is offered at our discretion and may change or end. Pricing
          described on this site—$1.79 per truck per month—applies to the early-access
          program and may be revised on notice before it takes effect.
        </p>

        <h2>Using this site</h2>
        <p>
          Do not attempt to break into the site, disrupt it, scrape it at a volume
          that degrades it for others, or use it to send unlawful or unsolicited
          messages. We can suspend access for any of that.
        </p>

        <h2>Messaging</h2>
        <p>
          If you become a customer, you are responsible for having permission to
          contact the phone numbers and email addresses you upload, and for
          complying with the laws that apply to business messaging. We honor opt-out
          requests from recipients.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The GoTruckCheck name, logo, site design, and product interface belong to
          GoTruckCheck. Your customer data belongs to you.
        </p>

        <h2>No warranty</h2>
        <p>
          This site and the early-access program are provided &ldquo;as is,&rdquo;
          without warranties of any kind, to the fullest extent the law allows. We
          do not warrant that the service will be uninterrupted or error-free.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, GoTruckCheck is not liable for
          indirect, incidental, special, or consequential damages, or for lost
          profits or lost business, arising out of your use of this site or the
          early-access program.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the State of California, without
          regard to its conflict-of-laws rules.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms. The date at the top of this page shows when
          they last changed, and continued use of the site means you accept the
          current version.
        </p>

        <h2>Contact</h2>
        <p>
          Questions go to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </div>
    </article>
  );
}
