import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  Monitor,
  Smartphone,
  Truck,
} from "lucide-react";
import { RevenueCalculator } from "@/components/revenue-calculator";
import { RevealController } from "@/components/reveal-controller";

const earlyAccessHref =
  "mailto:david.alan.shapiro@gmail.com?subject=GoTruckCheck%20early%20access&body=Business%20name%3A%0AApprox.%20trucks%20under%20watch%3A%0APhone%3A";

const navItems = [
  { label: "The money", href: "#the-money" },
  { label: "How it works", href: "#how-it-works" },
  { label: "See the product", href: "#product" },
  { label: "Questions", href: "#questions" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <RevealController />

      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#" aria-label="GoTruckCheck home">
            <Image
              src="/brand/gotruckcheck-logo.png"
              alt="GoTruckCheck"
              width={787}
              height={148}
              priority
            />
          </a>
          <nav aria-label="Main navigation">
            <ul className="nav__links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="button button--nav" href={earlyAccessHref}>
            Get early access
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Built for Clean Truck Check testers</p>
              <h1>Turn every truck you&apos;ve tested into monthly revenue.</h1>
              <p className="hero__lede">
                Track every deadline. Send automatic texts from your number. Let
                customers book with a tap. <strong>$2 per truck a month.</strong>{" "}
                Most testers can bill it back at $5–10.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href={earlyAccessHref}>
                  Put my trucks on the list
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a className="text-link" href="#the-money">
                  See the money math
                  <ArrowRight aria-hidden="true" size={16} />
                </a>
              </div>
              <p className="hero__trust">
                <Check aria-hidden="true" size={16} />
                No contract. Your customers install nothing.
              </p>
            </div>

            <div className="hero__visual" aria-label="Example customer reminder text">
              <div className="hero__caption">
                <span className="status-dot" aria-hidden="true" />
                Sent from your business number
              </div>
              <div className="phone-stage">
                <Image
                  src="/product/text-message-loop.png"
                  alt="Text conversation showing an automatic deadline reminder turning into a booked truck test"
                  width={720}
                  height={1512}
                  sizes="(max-width: 760px) 78vw, 410px"
                  loading="eager"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Product facts">
          <div className="container proof-strip__inner">
            <div>
              <strong>$2</strong>
              <span>per truck / month</span>
            </div>
            <div>
              <strong>60 · 30 · 15</strong>
              <span>day reminder options</span>
            </div>
            <div>
              <strong>0</strong>
              <span>apps for customers to install</span>
            </div>
          </div>
        </section>

        <section className="section money-section" id="the-money">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">A new service to sell</p>
                <h2>Add compliance monitoring to every invoice.</h2>
              </div>
              <p>
                GoTruckCheck is your wholesale cost. You set the retail price.
                The monthly monitoring fee can pay for the system before a
                reminder books a single test.
              </p>
            </div>

            <RevenueCalculator />

            <div className="pay-twice">
              <div className="pay-twice__number">01</div>
              <div>
                <h3>It pays when you bill monitoring.</h3>
                <p>Add a recurring line item at the price that fits your market.</p>
              </div>
              <div className="pay-twice__number">02</div>
              <div>
                <h3>It pays again when the next test books.</h3>
                <p>Every reminder is a sales touch that runs on its own.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section how-section" id="how-it-works">
          <div className="container how-grid">
            <div className="how-intro">
              <p className="eyebrow">How it works</p>
              <h2>You keep testing. The follow-up runs itself.</h2>
              <p>
                No long setup. No new app for your fleets. We get the list in,
                watch the dates, and keep the jobs moving back to you.
              </p>
            </div>
            <ol className="steps" data-reveal="up">
              <li>
                <span className="step-number">1</span>
                <div>
                  <h3>Send us your customer list</h3>
                  <p>
                    A spreadsheet, photos of your notebook—whatever you have.
                    We&apos;ll load it by tomorrow.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">2</span>
                <div>
                  <h3>We watch every deadline</h3>
                  <p>
                    Each VIN is checked against Clean Truck Check records
                    nightly, so your list stays ready to work.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">3</span>
                <div>
                  <h3>Reminders send from your number</h3>
                  <p>
                    Your name, your voice. Customers pick a time with a tap.
                    You confirm.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section product-section" id="product">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">The machine behind the service</p>
              <h2>You sell the compliance. The alerts sell the appointments.</h2>
              <p>
                Phone-first for the field. A full command center when you want
                the whole business on one screen.
              </p>
            </div>

            <div className="feature-row">
              <div className="feature-copy">
                <p className="eyebrow">The text that books the job</p>
                <h3>Your reminder. Your number. Their next test.</h3>
                <p>
                  Texts go out at the intervals you choose. The booking link is
                  branded as your business. A reply or tap lands on your
                  schedule.
                </p>
                <ul className="check-list">
                  <li>
                    <Check aria-hidden="true" /> Automatic SMS and email reminders
                  </li>
                  <li>
                    <Check aria-hidden="true" /> Tap to book, reschedule, or cancel
                  </li>
                  <li>
                    <Check aria-hidden="true" /> Nothing for your customer to install
                  </li>
                </ul>
              </div>
              <div className="phone-pair" data-reveal="up">
                <figure>
                  <Image
                    src="/product/text-message-loop.png"
                    alt="Automatic reminder text from a tester's business number"
                    width={720}
                    height={1512}
                    sizes="(max-width: 760px) 48vw, 310px"
                  />
                </figure>
                <figure>
                  <Image
                    src="/product/customer-booking.png"
                    alt="Customer booking page for choosing trucks, date, and time"
                    width={720}
                    height={1512}
                    sizes="(max-width: 760px) 48vw, 310px"
                  />
                </figure>
              </div>
            </div>

            <div className="feature-row feature-row--reverse">
              <div className="feature-copy">
                <p className="eyebrow">No deadline hunting</p>
                <h3>Know who is due before they do.</h3>
                <p>
                  Open the phone and see what&apos;s overdue, what&apos;s next,
                  and what already booked. That&apos;s the call list—without the
                  spreadsheet.
                </p>
                <div className="mini-facts">
                  <div>
                    <Clock3 aria-hidden="true" />
                    <strong>Checked nightly</strong>
                    <span>Fresh deadline records</span>
                  </div>
                  <div>
                    <Smartphone aria-hidden="true" />
                    <strong>Built for the field</strong>
                    <span>Your day from your phone</span>
                  </div>
                </div>
              </div>
              <div className="single-phone" data-reveal="up">
                <Image
                  src="/product/deadline-tracking.png"
                  alt="Phone view listing overdue and upcoming Clean Truck Check deadlines"
                  width={720}
                  height={1512}
                  sizes="(max-width: 760px) 72vw, 400px"
                />
              </div>
            </div>

            <div className="desktop-feature">
              <div className="desktop-feature__copy">
                <div>
                  <Monitor aria-hidden="true" />
                  <p className="eyebrow">For the bigger screen</p>
                </div>
                <h3>The whole week and every deadline, in one place.</h3>
                <p>
                  Sort by customer or deadline, find a truck by VIN, confirm new
                  booking requests, and dispatch the day without clicking
                  through five tools.
                </p>
              </div>
              <div className="desktop-shot" data-reveal="up">
                <Image
                  src="/product/desktop-command-center.png"
                  alt="Desktop GoTruckCheck command center with truck deadlines, booking request, and schedule"
                  width={2720}
                  height={1966}
                  sizes="(max-width: 760px) calc(100vw - 32px), 1180px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section deadline-section">
          <div className="container deadline-card" data-reveal="up">
            <div className="deadline-card__mark">
              <Truck aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow">More testing is coming</p>
              <h2>Be ready before OBD trucks move to four tests a year.</h2>
              <p>
                CARB says quarterly testing for OBD-equipped vehicles begins in
                October 2027. The testers with a follow-up system will be ready
                for the extra work.
              </p>
              <a
                className="text-link"
                href="https://ww2.arb.ca.gov/vehicle-owners-emissions-compliance-testing-requirements-clean-truck-check"
                target="_blank"
                rel="noreferrer"
              >
                Read the CARB testing schedule
                <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="questions">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">Straight answers</p>
              <h2>Before you put a truck on the list.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>Do my customers need an app?</summary>
                <p>
                  No. They get a normal text and a booking link. No account, no
                  password, no training.
                </p>
              </details>
              <details>
                <summary>Do I need a computer?</summary>
                <p>
                  No. You can run the day from your phone. The desktop view is
                  there when you want more room.
                </p>
              </details>
              <details>
                <summary>What if a customer sells a truck?</summary>
                <p>
                  Archive it. That truck drops from your billing immediately.
                </p>
              </details>
              <details>
                <summary>Am I locked in?</summary>
                <p>No contract. Cancel anytime.</p>
              </details>
              <details>
                <summary>Does GoTruckCheck submit tests to CARB?</summary>
                <p>
                  No. GoTruckCheck tracks deadlines, sends reminders, and helps
                  schedule work. It does not replace CTC-VIS or submit test
                  results.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="closing">
          <div className="container closing__inner">
            <div>
              <p className="eyebrow">Early access</p>
              <h2>Put the follow-up on autopilot.</h2>
              <p>
                $2 per truck a month. No contract. The first list gets loaded
                for you.
              </p>
            </div>
            <div className="closing__action">
              <a className="button button--light" href={earlyAccessHref}>
                <Mail aria-hidden="true" size={18} />
                Put my trucks on the list
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer__top">
          <a className="brand brand--footer" href="#" aria-label="GoTruckCheck home">
            <Image
              src="/brand/gotruckcheck-logo.png"
              alt="GoTruckCheck"
              width={787}
              height={148}
            />
          </a>
          <p>Deadline monitoring and scheduling for Clean Truck Check testers.</p>
          <a href={earlyAccessHref}>Early access</a>
        </div>
        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} GoTruckCheck.</p>
          <p>Not affiliated with the California Air Resources Board.</p>
        </div>
      </footer>
    </>
  );
}
