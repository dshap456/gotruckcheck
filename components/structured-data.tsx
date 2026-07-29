import { contactEmail, faqs, siteUrl } from "@/lib/site";

/**
 * Schema.org markup for search engines and AI answer engines. Every claim has
 * to match visible page copy — the FAQ entries are generated from the same
 * source the page renders.
 */

const organizationId = `${siteUrl}/#organization`;

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide identity. Rendered once from the root layout. */
export function StructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": organizationId,
            name: "GoTruckCheck",
            url: siteUrl,
            logo: `${siteUrl}/brand/gotruckcheck-logo.png`,
            email: contactEmail,
            description:
              "Deadline monitoring, automatic reminders, and scheduling for California Clean Truck Check testers.",
            areaServed: { "@type": "State", name: "California" },
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: "GoTruckCheck",
            publisher: { "@id": organizationId },
            inLanguage: "en-US",
          },
        ],
      }}
    />
  );
}

/** Product and FAQ markup. Home page only — the answers live there. */
export function HomeStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "SoftwareApplication",
            "@id": `${siteUrl}/#software`,
            name: "GoTruckCheck",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web browser, iOS, Android",
            url: siteUrl,
            publisher: { "@id": organizationId },
            description:
              "GoTruckCheck tracks Clean Truck Check deadlines for every VIN, sends automatic SMS and email reminders from the tester's own business number, and lets fleet customers book their next test with a tap.",
            offers: {
              "@type": "Offer",
              price: "1.79",
              priceCurrency: "USD",
              category: "subscription",
              description: "Per truck, per month. No contract and no setup fee.",
              availability: "https://schema.org/PreOrder",
            },
          },
          {
            "@type": "FAQPage",
            "@id": `${siteUrl}/#faq`,
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ],
      }}
    />
  );
}
