import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, FileText, ChevronRight, Send, Calendar, Building2, Home, Landmark, Upload, Sparkles } from "lucide-react";

// ---- Configure this with your Formspree endpoint (e.g., https://formspree.io/f/abcd1234)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzbjvdq";

// NOTE: This is a single-file React landing page + intake form.
// TailwindCSS & shadcn/ui are assumed to be available in your environment.
// Hook it up to Formspree, EmailJS, Airtable Forms, HubSpot, or your backend.

export default function PatriotPropertyAdvisorsLanding() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const resp = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      // Optional: check resp.ok for additional UX
    } catch (err) {
      console.error("Form submit error:", err);
    } finally {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <span className="font-semibold">Patriot Property Advisors, LLC</span>
            <span className="text-xs text-gray-500 border rounded-full px-2 py-0.5">Veteran‑Owned</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#why" className="hover:text-gray-900">Why protest</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <a href="#intake" className="px-3 py-1.5 rounded-xl bg-gray-900 text-white">Start now</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Pay only what you owe —
              <span className="block text-gray-900">We fight your Texas property taxes.</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Appraisal districts rarely lower values automatically. Our team challenges inflated assessments so you don’t overpay.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5"/> Contingency pricing — we win, you save.</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5"/> Digital onboarding in minutes.</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5"/> Coverage across Texas (residential & commercial*).
                <span className="ml-2 text-xs text-gray-500">(*Commercial requires PTC/attorney oversight.)</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#intake" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white">
                Start your protest <ChevronRight className="w-4 h-4"/>
              </a>
              <a href="#why" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border">
                Learn more
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-500">By submitting, you authorize us to review your CAD record. No obligation until you sign our agreement.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:pl-8">
            <div className="rounded-2xl border p-4 shadow-sm bg-white">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <Shield className="w-5 h-5" /> Secure encrypted intake
              </div>
              {!submitted ? (
                <form onSubmit={onSubmit} id="intake" className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input name="owner_name" required placeholder="Owner full name (as on deed)" className="col-span-2 border rounded-xl px-3 py-2"/>
                  <input name="email" type="email" required placeholder="Email" className="border rounded-xl px-3 py-2"/>
                  <input name="phone" required placeholder="Phone" className="border rounded-xl px-3 py-2"/>
                  <input name="property_address" required placeholder="Property address" className="col-span-2 border rounded-xl px-3 py-2"/>
                  <input name="cad_account" placeholder="CAD account / parcel #" className="border rounded-xl px-3 py-2"/>
                  <select name="property_type" className="border rounded-xl px-3 py-2">
                    <option>Single‑family</option>
                    <option>Condominium</option>
                    <option>Townhome</option>
                    <option>Multifamily (5+)</option>
                    <option>Commercial</option>
                    <option>Land</option>
                  </select>
                  <select name="homestead" className="border rounded-xl px-3 py-2">
                    <option>Homestead exemption? — Yes</option>
                    <option>Homestead exemption? — No</option>
                    <option>Homestead exemption? — Unsure</option>
                  </select>
                  <input name="est_value" placeholder="Est. market value (optional)" className="border rounded-xl px-3 py-2"/>
                  <input name="notices_email" placeholder="Preferred notices email (if different)" className="border rounded-xl px-3 py-2"/>
                  <textarea name="notes" placeholder="What changed? (sales comps, condition, repairs, vacancy, expenses…)" className="col-span-2 border rounded-xl px-3 py-2 min-h-[90px]"></textarea>

                  <div className="col-span-2 flex items-center gap-2 text-xs text-gray-500">
                    <input type="checkbox" required className="w-4 h-4" name="agree"/>
                    <span>I agree to be contacted and to receive onboarding documents electronically. No fees unless agreed in writing.</span>
                  </div>

                  <button type="submit" className="col-span-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white">
                    Submit intake <Send className="w-4 h-4"/>
                  </button>
                </form>
              ) : (
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">Thanks — we’ve got your info!</h3>
                  <p className="text-gray-600 mt-2">We’ll send your engagement + Appointment of Agent for e‑signature and confirm your protest timeline.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why protest */}
      <section id="why" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Why protest your property taxes?</h2>
            <p className="mt-4 text-gray-600">In many Texas markets, average sale prices have softened, but appraisal districts rarely reduce values automatically. Protesting keeps your assessment aligned with reality and prevents overpayment.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Market‑aligned value using recent sales and equity analysis",
                "Evidence‑based approach: condition, repairs, income, vacancy, expenses",
                "Digital process — most cases resolved without you attending an ARB hearing",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 mt-0.5"/> {t}</li>
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

      {/* How it works */}
      <section id="how" className="bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold">How it works</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <Step n={1} title="Intake" desc="Share property details & sign engagement + Appointment of Agent (e‑signature)." />
            <Step n={2} title="Strategy" desc="We pull CAD data, comps, and evidence. We build sales, equity, and income cases." />
            <Step n={3} title="Negotiate" desc="We pursue informal reductions; if needed, we argue your case at the ARB." />
            <Step n={4} title="Save" desc="Final value posts. After tax bills are issued, we invoice on actual savings." />
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-gray-600"><Calendar className="w-4 h-4"/> Peak season: Notices mail March–April. Protest deadline is May 15 or 30 days after your notice, whichever is later.</div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">Simple, contingency pricing</h2>
        <p className="mt-3 text-gray-600">We only get paid when you save. Commercial representations may require licensed PTC/attorney oversight per Texas law.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <PriceCard name="Residential" pct="30%" bullets={["Due only on verified tax savings","No upfront fees","Homestead specialists"]} />
          <PriceCard name="Premium" pct="40%" bullets={["Complex/appeal cases","ARB + binding arbitration handling","Evidence development & photos"]} highlight />
          <PriceCard name="Commercial" pct="Custom" bullets={["Income & expense analysis","Capitalization & equity studies","Appeals strategy"]} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold">Frequently asked</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Faq q="When are property taxes due?" a="Bills mail around October and become delinquent if not paid by January 31 of the following year." />
            <Faq q="When will I know if we won?" a="We notify you when the ARB order or settlement posts. Final values often appear online before letters arrive." />
            <Faq q="Do you charge if there’s no reduction?" a="No. Our standard residential plan is contingency — no savings, no fee." />
            <Faq q="Can you backdate protests?" a="No, past years generally can’t be protested after the deadline. We can pursue corrections for clerical errors and missed exemptions." />
          </div>
          <div className="mt-8">
            <a href="#intake" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white">Start your intake <ChevronRight className="w-4 h-4"/></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold">Patriot Property Advisors, LLC</div>
            <div className="text-gray-600 mt-2">Texas‑based • Veteran‑Owned</div>
            <div className="text-gray-500 mt-2">This site is for general information; not legal or tax advice.</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <div>info@patriotpropertyadvisors.com</div>
            <div>Houston, Texas</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Resources</div>
            <a href="#why" className="block">Why protest</a>
            <a href="#how" className="block">How it works</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#faq" className="block">FAQ</a>
          </div>
          <div>
            <div className="font-semibold mb-2">Legal</div>
            <a href="#" className="block">Engagement Terms</a>
            <a href="#" className="block">Privacy</a>
            <a href="#" className="block">Disclosures</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm bg-white">
      <div className="flex items-center gap-2 text-gray-700"><span className="text-gray-900">{icon}</span><span className="font-medium">{title}</span></div>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="rounded-2xl border p-5 bg-white shadow-sm">
      <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">{n}</div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
    </div>
  );
}

function PriceCard({ name, pct, bullets, highlight }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm bg-white ${highlight ? "ring-1 ring-gray-900" : ""}`}>
      <div className="text-sm text-gray-500">Plan</div>
      <div className="text-2xl font-bold mt-1">{name}</div>
      <div className="text-4xl font-extrabold mt-4">{pct}{pct !== "Custom" && <span className="text-lg font-semibold text-gray-500"> of savings</span>}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5"/> {b}</li>
        ))}
      </ul>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-2xl border p-5 bg-white shadow-sm">
      <div className="font-medium">{q}</div>
      <div className="text-sm text-gray-600 mt-2">{a}</div>
    </div>
  );
}