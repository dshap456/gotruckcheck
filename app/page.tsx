import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock3,
  Download,
  Lock,
  ShieldCheck,
  Smartphone,
  Truck,
} from "lucide-react";
import { RevenueCalculator } from "@/components/revenue-calculator";
import { RevealController } from "@/components/reveal-controller";
import { EarlyAccessForm, type SubmitMode } from "@/components/early-access-form";
import { HomeStructuredData } from "@/components/structured-data";
import { faqs, pricingIncludes } from "@/lib/site";

export default function Home() {
  // With no mail provider configured the form hands off to the visitor's email
  // app rather than posting into a void.
  const submitMode: SubmitMode = process.env.RESEND_API_KEY ? "api" : "mailto";

  return (
    <>
      <HomeStructuredData />
      <RevealController />

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1>Turn every truck into recurring revenue</h1>
            <p className="hero__lede">
              Track every deadline. Let customers book with a tap.{" "}
              <strong>$2 per truck a month.</strong> Most testers can bill it back
              at $5–10.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#early-access">
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

      <section className="section money-section" id="the-money">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <h2>Add compliance monitoring to every invoice.</h2>
            </div>
            <p>
              GoTruckCheck is your wholesale cost. You set the retail price. The
              monthly monitoring fee can pay for the system before a reminder
              books a single test.
            </p>
          </div>

          <RevenueCalculator />
        </div>
      </section>

      <section className="section how-section" id="how-it-works">
        <div className="container how-grid">
          <div className="how-intro">
            <h2>You keep testing. The follow‑up runs itself.</h2>
            <p>
              No long setup. No new app for your fleets. We get the list in, watch
              the dates, and keep the jobs moving back to you.
            </p>
          </div>
          <ol className="steps" data-reveal="stagger">
            <li>
              <span className="step-number">1</span>
              <div>
                <h3>Send us your customer list</h3>
                <p>
                  A spreadsheet, photos of your notebook—whatever you have.
                  We’ll load it by tomorrow.
                </p>
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div>
                <h3>We watch every deadline</h3>
                <p>
                  Each VIN is checked against Clean Truck Check records nightly,
                  so your list stays ready to work.
                </p>
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div>
                <h3>Reminder sent automatically</h3>
                <p>
                  Your name, your voice. Customers pick a time with a tap. You
                  confirm.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="container">
          <div className="feature-row">
            <div className="feature-copy">
              <h3>The Alerts Sell the Appointments</h3>
              <p>
                Texts go out at the intervals you choose. The booking link is
                branded as your business. A reply or tap lands on your schedule.
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
              <h3>Know who is due before they do.</h3>
              <p>
                Open the phone and see what’s overdue, what’s next, and
                what already booked. That’s the call list—without the
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
              <div className="desktop-feature__lead">
                <h3>The whole week and every deadline, in one place.</h3>
              </div>
              <p>
                Sort by customer or deadline, find a truck by VIN, confirm new
                booking requests, and dispatch the day without clicking through
                five tools.
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

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="section-heading">
            <h2>One price. Every feature. No contract.</h2>
          </div>

          <div className="plan" data-reveal="up">
            <div className="plan__price">
              <div className="plan__amount">
                <span className="plan__currency">$</span>
                <span className="plan__figure">2</span>
                <span className="plan__period">
                  per truck
                  <br />
                  per month
                </span>
              </div>
              <p className="plan__note">
                Billed monthly. No setup fee, no per-message charge, no minimum.
              </p>
              <a className="button button--primary plan__cta" href="#early-access">
                Get early access
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <p className="plan__cancel">Cancel anytime.</p>
            </div>

            <div className="plan__includes">
              <h3>Everything is included</h3>
              <ul className="check-list check-list--two">
                {pricingIncludes.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
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
            <h2>Be ready before OBD trucks move to four tests a year.</h2>
            <p>
              CARB says quarterly testing for OBD-equipped vehicles begins in
              October 2027. The testers with a follow-up system will be ready for
              the extra work.
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

      <section className="section data-section" id="data">
        <div className="container">
          <div className="section-heading">
            <h2>Your customer list stays your customer list.</h2>
          </div>

          <div className="trust-grid" data-reveal="stagger">
            <div className="trust-card">
              <ShieldCheck aria-hidden="true" />
              <h3>We never sell or share it</h3>
              <p>
                Your customers, trucks, and phone numbers are used to run your
                account. They are not sold, rented, or shared with other testers.
              </p>
            </div>
            <div className="trust-card">
              <Lock aria-hidden="true" />
              <h3>Encrypted in transit and at rest</h3>
              <p>
                Data moves over TLS and is stored encrypted. Access is limited to
                the people who keep the service running.
              </p>
            </div>
            <div className="trust-card">
              <Download aria-hidden="true" />
              <h3>Export or delete, anytime</h3>
              <p>
                Ask for your list back and you get a clean export. Ask us to
                delete it and it goes—no retention hold, no exit fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="questions">
        <div className="container faq-grid">
          <div className="faq-intro">
            <h2>Before you put a truck on the list.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span className="faq-marker" aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="access-section" id="early-access">
        <div className="container access-grid">
          <div className="access-copy">
            <h2>Put the follow‑up on autopilot.</h2>
            <ul className="access-points">
              <li>
                <Check aria-hidden="true" /> $2 per truck a month, no contract
              </li>
              <li>
                <Check aria-hidden="true" /> We load your first list for you
              </li>
              <li>
                <Check aria-hidden="true" /> Nothing for your customers to install
              </li>
            </ul>
          </div>
          <EarlyAccessForm mode={submitMode} />
        </div>
      </section>
    </>
  );
}
