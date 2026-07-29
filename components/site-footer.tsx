import Image from "next/image";
import Link from "next/link";
import { contactEmail } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "See the product", href: "/#product" },
      { label: "Pricing", href: "/#pricing" },
      { label: "The money math", href: "/#the-money" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Your data", href: "/#data" },
      { label: "Questions", href: "/#questions" },
      { label: "Get early access", href: "/#early-access" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link className="brand brand--footer" href="/" aria-label="GoTruckCheck home">
            <Image
              src="/brand/gotruckcheck-logo.png"
              alt="GoTruckCheck"
              width={787}
              height={148}
            />
          </Link>
          <p>
            Deadline monitoring and scheduling for California Clean Truck Check
            testers.
          </p>
          <a className="footer__email" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} GoTruckCheck. All rights reserved.</p>
        <p>
          Not affiliated with, endorsed by, or acting on behalf of the California
          Air Resources Board.
        </p>
      </div>
    </footer>
  );
}
