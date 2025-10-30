import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Shield,
  FileText,
  ChevronRight,
  Send,
  Calendar,
  Building2,
  Home,
  Landmark,
  Sparkles,
} from "lucide-react";

// ---- Configure this with your Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzbjvdq";

export default function PatriotPropertyAdvisorsLanding() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
    } catch (err) {
      console.error("Form submit error:", err);
    } finally {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="min-h-screen bg-white text-patriot-gray-dark">
      {/* Nav (light, stays readable over any section) */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-patriot-gray-light">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-patriot-gold" />
            <span className="font-semibold text-patriot-navy">
              Patriot Property Advisors, LLC
            </span>
            <span className="text-xs text-patriot-gray-dark border border-patriot-gray-light rounded-full px-2 py-0.5">
              Veteran-Owned
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-patriot-navy">How it works</a>
            <a href="#why" className="hover:text-patriot-navy">Why protest</a>
            <a href="#pricing" className="hover:text-patriot-navy">Pricing</a>
            <a href="#faq" className="hover:text-patriot-navy">FAQ</a>
            <a
              href="#intake"
              className="px-3 py-1.5 rounded-xl bg-patriot-red text-white hover:bg-patriot-navy transition"
            >
              Start now
            </a>
          </nav>
        </div>
      </header>

      {/* HERO — bold gradient */}
      <section className="text-white bg-gradient-to-r from-patriot-navy to-patriot-red">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Pay only what you owe —
              <span className="block text-patriot-gold">We fight your Texas property taxes.</span>
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Appraisal districts rarely lower values automatically. Our team challenges inflated assessments so you don’t overpay.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-patriot-gold" /> Contingency pricing — we win, you save.</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-patriot-gold" /> Digital onboarding in minutes.</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-patriot-gold" /> Coverage across Texas (residential &amp; commercial*).
                <span className="ml-2 text-xs text-white/80">(*Commercial requires PTC/attorney oversight.)</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#intake" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-patriot-navy hover:bg-patriot-gold hover:text-patriot-navy transition">
                Start your protest <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#why" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/70 hover:bg-white/10 transition">
                Learn more
              </a>
            </div>
          </motion.div>

          {/* Form card — stays white for legibility */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:pl-8">
            <div className="rounded-2xl border border-white/30 bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2 text-sm text-patriot-navy mb-3">
                <Shield className="w-5 h-5" /> Secure encrypted intake
              </div>

              {!submitted ? (
                <form onSubmit={onSubmit} id="intake" className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input name="owner_name" required placeholder="Owner full name (as on deed)" className="col-span-2" />
                  <Input name="email" type="email" required placeholder="Email" />
                  <Input name="phone" required placeholder="Phone" />
                  <Input name="property_address" required placeholder="Property address" className="col-span-2" />
                  <Input name="cad_account" placeholder="CAD account / parcel #" />
                  <Select name="property_type">
                    <option>Single-family</option><option>Condominium</option><option>Townhome</option>
                    <option>Multifamily (5+)</option><option>Commercial</option><option>Land</option>
                  </Select>
                  <Select name="homestead">
                    <option>Homestead exemption? — Yes</option>
                    <option>Homestead exemption? — No</option>
                    <option>Homestead exemption? — Unsure</option>
                  </Select>
                  <Input name="est_value" placeholder="Est. market value (optional)" />
                  <Input name="notices_email" placeholder="Preferred notices email (if different)" />
                  <Textarea name="notes" placeholder="What changed? (sales comps, condition, repairs, vacancy, expenses…)" className="col-span-2 min-h-[90px]" />
                  <label className="col-span-2 flex items-center gap-2 text-xs text-patriot-gray-dark">
                    <input type="checkbox" required className="w-4 h-4" name="agree" />
                    <span>I agree to be contacted and to receive onboarding documents electronically. No fees unless agreed in writing.</span>
                  </label>
                  <button type="submit" className="col-span-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-patriot-red text-white hover:bg-patriot-navy transition">
                    Submit intake <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-patriot-navy">Thanks — we’ve got your info!</h3>
                  <p className="mt-2 text-patriot-gray-dark">We’ll send your engagement + Appointment of Agent for e-signature and confirm your protest timeline.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY — warm gold tint */}
      <section id="why" className="bg-patriot-gold/20">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-patriot-navy">Why protest your property taxes?</h2>
            <p className="mt-4">
              In many Texas markets, average sale prices have softened, but appraisal districts rarely reduce values automatically.
              Protesting keeps your assessment aligned with reality and prevents overpayment.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Market-aligned value using recent sales and equity analysis",
                "Evidence-based approach: condition, repairs, income, vacancy, expenses",
                "Digital process — most cases resolved without you attending an ARB hearing",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-patriot-red" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card icon={<Home />} title="Residential" text="Homestead, condos, townhomes" />
            <Card icon={<Building2 />} title="Commercial" text="Retail, office, industrial, MF" />
            <Card icon={<Landmark />} title="Equity" text="Uniform & equal evidence" />
            <Card icon={<FileText />} title="Repairs" text="Bids, photos, permits" />
          </div>
        </div>
      </section>

      {/* HOW — deep navy section */}
      <section id="how" className="bg-patriot-navy text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold">How it works</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <Step n={1} title="Intake" desc="Share property details & sign engagement + Appointment of Agent (e-signature)." dark />
            <Step n={2} title="Strategy" desc="We pull CAD data, comps, and evidence. We build sales, equity, and income cases." dark />
            <Step n={3} title="Negotiate" desc="We pursue informal reductions; if needed, we argue your case at the ARB." dark />
            <Step n={4} title="Save" desc="Final value posts. After tax bills are issued, we invoice on actual savings." dark />
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-patriot-gold">
            <Calendar className="w-4 h-4" />
            Peak season: Notices mail March–April. Protest deadline is May 15 or 30 days after your notice, whichever is later.
          </div>
        </div>
      </section>

      {/* PRICING — bold gradient */}
      <section id="pricing" className="bg-gradient-to-r from-patriot-gold to-patriot-red/80">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white">Simple, contingency pricing</h2>
          <p className="mt-3 text-white/90">We only get paid when you save.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <PriceCard
              name="Residential"
              pct="30%"
              bullets={["Due only on verified tax savings", "No upfront fees", "Homestead specialists"]}
              onGradient
            />
            <PriceCard
              name="Premium"
              pct="40%"
              bullets={["Complex/appeal cases", "ARB + binding arbitration handling", "Evidence development & photos"]}
              highlight
              onGradient
            />
            <PriceCard
              name="Commercial"
              pct="Custom"
              bullets={["Income & expense analysis", "Capitalization & equity studies", "Appeals strategy"]}
              onGradient
            />
          </div>
        </div>
      </section>

      {/* FAQ — neutral light for breathing room */}
      <section id="faq" className="bg-patriot-background border-t border-patriot-gray-light">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-patriot-navy">Frequently asked</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Faq q="When are property taxes due?" a="Bills mail around October and become delinquent if not paid by January 31 of the following year." />
            <Faq q="When will I know if we won?" a="We notify you when the ARB order or settlement posts. Final values often appear online before letters arrive." />
            <Faq q="Do you charge if there’s no reduction?" a="No. Our standard residential plan is contingency — no savings, no fee." />
            <Faq q="Can you backdate protests?" a="No, past years generally can’t be protested after the deadline. We can pursue corrections for clerical errors and missed exemptions." />
          </div>
          <div className="mt-8">
            <a href="#intake" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-patriot-red text-white hover:bg-patriot-navy transition">
              Start your intake <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER — bold red anchor */}
      <footer className="bg-patriot-red text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold">Patriot Property Advisors, LLC</div>
            <div className="mt-2 text-patriot-gold">Texas-based • Veteran-Owned</div>
            <div className="mt-2">This site is for general info; not legal/tax advice.</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <div>stanleyppa@hotmail.com</div>
            <div>Houston, Texas</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Resources</div>
            <a href="#why" className="block hover:text-patriot-gold">Why protest</a>
            <a href="#how" className="block hover:text-patriot-gold">How it works</a>
            <a href="#pricing" className="block hover:text-patriot-gold">Pricing</a>
            <a href="#faq" className="block hover:text-patriot-gold">FAQ</a>
          </div>
          <div>
            <div className="font-semibold mb-2">Legal</div>
            <a href="#" className="block hover:text-patriot-gold">Engagement Terms</a>
            <a href="#" className="block hover:text-patriot-gold">Privacy</a>
            <a href="#" className="block hover:text-patriot-gold">Disclosures</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================== UI primitives ================== */

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={
        "border border-patriot-gray-light rounded-xl px-3 py-2 text-patriot-navy placeholder-patriot-gray-dark/70 " +
        "focus:outline-none focus:ring-2 focus:ring-patriot-navy " +
        className
      }
    />
  );
}

function Select({ className = "", children, ...props }) {
  return (
    <select
      {...props}
      className={
        "border border-patriot-gray-light rounded-xl px-3 py-2 text-patriot-navy " +
        "focus:outline-none focus:ring-2 focus:ring-patriot-navy " +
        className
      }
    >
      {children}
    </select>
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={
        "border border-patriot-gray-light rounded-xl px-3 py-2 text-patriot-navy placeholder-patriot-gray-dark/70 " +
        "focus:outline-none focus:ring-2 focus:ring-patriot-navy " +
        className
      }
    />
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-patriot-gray-light p-4 shadow-sm bg-white">
      <div className="flex items-center gap-2 text-patriot-navy">
        <span>{icon}</span>
        <span className="font-medium">{title}</span>
      </div>
      <p className="text-sm mt-2">{text}</p>
    </div>
  );
}

function Step({ n, title, desc, dark = false }) {
  // dark=true means we're on navy background: use white cards with navy text
  return (
    <div className={`rounded-2xl p-5 shadow-sm ${dark ? "bg-white text-patriot-navy" : "bg-white"} border border-patriot-gray-light`}>
      <div className="w-8 h-8 rounded-full bg-patriot-gold text-patriot-navy flex items-center justify-center font-semibold">
        {n}
      </div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="text-sm mt-1">{desc}</div>
    </div>
  );
}

function PriceCard({ name, pct, bullets, highlight, onGradient = false }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm bg-white ${
        highlight ? "ring-2 ring-patriot-navy" : "border border-patriot-gray-light"
      } ${onGradient ? "backdrop-blur" : ""}`}
    >
      <div className="text-sm text-patriot-gray-dark">Plan</div>
      <div className="text-2xl font-bold text-patriot-navy mt-1">{name}</div>
      <div className="text-4xl font-extrabold text-patriot-navy mt-4">
        {pct}
        {pct !== "Custom" && (
          <span className="text-lg font-semibold text-patriot-gray-dark"> of savings</span>
        )}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-5 h-5 mt-0.5 text-patriot-red" /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-2xl border border-patriot-gray-light p-5 bg-white shadow-sm">
      <div className="font-medium text-patriot-navy">{q}</div>
      <div className="text-sm mt-2">{a}</div>
    </div>
  );
}
