import { useMemo, useState } from "react";

const CONTACT = {
  phoneDisplay: "(972) 801-7000",
  phoneHref: "tel:+19728017000",
  email: "heyfrose@heyfrose.com",
  businessEmail: "heyfrose@heyfrose.com",
  addressLine1: "Savannah Historic District",
  addressLine2: "Savannah, GA 31401",
  hours: "Open daily · 11am–9pm",
};

const LOGO_SRC = "/FullLogo_NoBuffer.png";

export default function HeyfroseWebsite() {
  const [page, setPage] = useState("home");

  const drinks = [
    { name: "Classic Frosé", desc: "Rosé, strawberry, peach — clean, frozen, balanced.", price: "$14" },
    { name: "Peach Frosé", desc: "Rosé blended with peach nectar — smooth, light, and summery.", price: "$15" },
    { name: "Strawberry Frosé", desc: "Rosé with fresh strawberry purée — bright and refreshing.", price: "$15" },
    { name: "Pink Sangria", desc: "Fruit-forward frozen sangria with a soft finish.", price: "$14" },
    { name: "Rosé Rita", desc: "A tequila-forward frozen twist with citrus and blush fruit notes.", price: "$15" },
    { name: "Seasonal Pink Feature", desc: "A rotating frozen pour inspired by the season and local moments.", price: "$16" },
  ];

  const charcuterie = [
    { name: "Charcuterie Cups", detail: "Individual grab-and-go cups with grapes, cheese, meats, and nuts.", price: "$10+" },
    { name: "Mini Boards", detail: "A polished pairing board for two or small groups.", price: "$18+" },
    { name: "Party Trays", detail: "Larger-format trays for hosting, birthdays, showers, and business events.", price: "$45+" },
    { name: "Brunch Boxes", detail: "Elevated snack boxes designed to pair with frozen drinks and daytime events.", price: "$22+" },
  ];

  const cateringPacks = [
    { title: "Mini Frosé Flight", subtitle: "12 minis · choose up to 3 flavors", desc: "Perfect for birthdays, showers, office treats, and girls’ nights.", price: "Starting at $72" },
    { title: "Party Pack", subtitle: "24 servings · choose up to 4 flavors", desc: "An easy crowd-pleaser for larger gatherings and elevated celebrations.", price: "Starting at $138" },
    { title: "Heyfrose Bar", subtitle: "Large-format service + add-ons", desc: "Built for bigger events with optional charcuterie, branded setup, and premium coordination.", price: "Custom quote" },
  ];

  const occasions = [
    "Bridal showers",
    "Birthdays",
    "Corporate events",
    "Launch parties",
    "Pool days",
    "Girls’ nights",
    "Housewarmings",
    "Weekend hosting",
  ];

  const faqs = [
    { q: "How far ahead should I place a catering order?", a: "We recommend at least 48 hours for small orders. For large events or white glove service, 3–5 days is ideal." },
    { q: "Can I mix flavors in one order?", a: "Yes. Most packs are designed for 3–4 flavors so guests get variety without overcomplicating the order." },
    { q: "Do you deliver?", a: "Pickup is standard. Delivery is available for larger catering and white glove orders depending on location." },
    { q: "What makes Heyfrose different?", a: "Heyfrose is built as a premium frozen drink experience with elevated branding, consistent drinks, and charcuterie pairings." },
    { q: "Can I add charcuterie to catering?", a: "Yes. Cups, trays, and boxes are designed to pair directly with drinks and increase the experience and order value." },
  ];

  const pages = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "menu", label: "Menu" },
      { id: "charcuterie", label: "Wine & Charcuterie" },
      { id: "catering", label: "Catering" },
      { id: "contact", label: "Visit Us" },
    ],
    []
  );

  function BrandMark({ hero = false }) {
  const wrap = hero
    ? "w-full max-w-[320px] sm:max-w-[420px] md:max-w-[560px] lg:max-w-[700px] mx-auto"
    : "w-full max-w-[170px] sm:max-w-[220px] md:max-w-[260px]";

  return (
    <div className={wrap}>
      <img
        src={LOGO_SRC}
        alt="Hey Frosé Wine & Charcuterie Bar"
        className="w-full h-auto"
      />
    </div>
  );
}
  function NavButton({ id, label }) {
    const active = page === id;
    return (
      <button
        onClick={() => setPage(id)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${active ? "bg-[#1f1a1a] text-white" : "bg-white text-neutral-700 ring-1 ring-rose-100 hover:bg-rose-50"}`}
      >
        {label}
      </button>
    );
  }

  function SectionHeading({ eyebrow, title, body }) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">{eyebrow}</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1f1a1a] md:text-5xl" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
          {title}
        </h2>
        {body ? <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg">{body}</p> : null}
      </div>
    );
  }

  function Card({ children, className = "" }) {
    return <div className={`rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-rose-100 ${className}`}>{children}</div>;
  }

  function FaqSection() {
    return (
      <section className="mx-auto max-w-5xl px-6 py-8 pb-20 md:px-10">
        <SectionHeading eyebrow="FAQ" title="Common questions" body="Simple, direct, and conversion-friendly." />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <Card key={item.q} className="p-6">
              <h3 className="text-xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>{item.q}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{item.a}</p>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  function WhiteGloveBlock() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-4 md:px-10 md:py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-500">White Glove Service</p>
            <h3 className="mt-4 text-3xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Large orders, business gifting, and premium coordination</h3>
            <ul className="mt-6 space-y-4 text-neutral-600 list-disc pl-5">
              <li>Large-format catering orders</li>
              <li>Office celebrations and client gifting</li>
              <li>Multi-drop coordination</li>
              <li>Custom charcuterie + frozen drink bundles</li>
              <li>Premium event support for launches and brand activations</li>
            </ul>
          </Card>
          <Card className="bg-[linear-gradient(180deg,#fff5f6_0%,#ffffff_100%)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-500">Business contact</p>
            <h3 className="mt-4 text-3xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Need a custom quote?</h3>
            <p className="mt-4 leading-7 text-neutral-600">Our white-glove team can help with larger event planning, recurring office needs, and premium service requests.</p>
            <div className="mt-8 space-y-3 text-neutral-700">
              <div>Call: <a className="underline underline-offset-4" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></div>
              <div>Email: <a className="underline underline-offset-4" href={`mailto:${CONTACT.businessEmail}`}>{CONTACT.businessEmail}</a></div>
              <div>Hours: Monday–Friday · 9am–4pm</div>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  function Hero() {
    return (
      <section className="border-b border-rose-100 bg-[linear-gradient(180deg,#fff8f9_0%,#fef1f4_55%,#ffffff_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <BrandMark hero />
              <h1 className="mt-10 max-w-3xl text-5xl leading-tight text-[#1f1a1a] md:text-7xl" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                Frozen drinks, catering, and charcuterie with boutique polish.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Built to feel premium, easy, and giftable — from individual Frosé moments to full event packages.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button onClick={() => setPage("charcuterie")} className="rounded-full bg-rose-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">View Menu</button>
                <button onClick={() => setPage("contact")} className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1f1a1a] ring-1 ring-rose-100">Visit Us</button>
                <button onClick={() => setPage("catering")} className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1f1a1a] ring-1 ring-rose-100">Catering</button>
                <a href={`mailto:${CONTACT.email}`} className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1f1a1a] ring-1 ring-rose-100">Email Us</a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <Card>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-500">Signature format</p>
                <h3 className="mt-4 text-2xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Frosé flights, party packs, and polished pickup.</h3>
                <p className="mt-4 leading-7 text-neutral-600">A premium frozen cocktail concept with menu discipline, strong visuals, and event-ready packaging.</p>
              </Card>
              <Card className="bg-[#1f1a1a] text-white ring-0">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-200">Best for</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/90">
                  {occasions.slice(0, 6).map((item) => <div key={item} className="rounded-2xl bg-white/10 px-4 py-3">{item}</div>)}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function HomePage() {
    return (
      <>
        <Hero />
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="Why Heyfrose" title="A polished brand experience, not just another frozen drink stop." body="The site is structured like a premium retail brand: clear offers, easy conversion paths, and dedicated sections for menu, catering, white-glove service, and local visit info." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">01</p>
              <h3 className="mt-4 text-2xl" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Frozen menu</h3>
              <p className="mt-4 leading-7 text-neutral-600">A curated Frosé-first lineup built to feel premium and easy to order.</p>
              <button onClick={() => setPage("menu")} className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-rose-500">Explore drinks</button>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">02</p>
              <h3 className="mt-4 text-2xl" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Wine & charcuterie</h3>
              <p className="mt-4 leading-7 text-neutral-600">Upsell-friendly trays, boxes, and cups that raise ticket size and strengthen the brand.</p>
              <button onClick={() => setPage("charcuterie")} className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-rose-500">See pairings</button>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">03</p>
              <h3 className="mt-4 text-2xl" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Catering</h3>
              <p className="mt-4 leading-7 text-neutral-600">A dedicated funnel for events, office orders, and premium coordination.</p>
              <button onClick={() => setPage("catering")} className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-rose-500">Start catering</button>
            </Card>
          </div>
        </section>
      </>
    );
  }

  function MenuPage() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <SectionHeading eyebrow="Menu" title="Frosé and frozen drinks" body="Tight, brand-forward offerings designed for speed, consistency, and a higher-end feel." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {drinks.map((drink) => (
            <Card key={drink.name}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>{drink.name}</h3>
                <span className="rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-500">{drink.price}</span>
              </div>
              <p className="mt-4 leading-7 text-neutral-600">{drink.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  function CharcuteriePage() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <SectionHeading eyebrow="Wine & Charcuterie" title="Trays, cups, and pairing pieces" body="Designed to make Heyfrose feel complete, giftable, and event-ready." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {charcuterie.map((item) => (
            <Card key={item.name}>
              <h3 className="text-2xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>{item.name}</h3>
              <p className="mt-4 leading-7 text-neutral-600">{item.detail}</p>
              <div className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">{item.price}</div>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  function CateringPage() {
    return (
      <>
        <section className="border-b border-rose-100 bg-[linear-gradient(180deg,#fff8f9_0%,#ffffff_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
            <SectionHeading eyebrow="Catering" title="Bring Heyfrose to the party" body="From smaller celebrations to polished event drops, Heyfrose catering is built to feel premium and easy to order." />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-rose-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">Start a catering order</button>
              <button onClick={() => setPage("contact")} className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1f1a1a] ring-1 ring-rose-100">Find my Heyfrose</button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {cateringPacks.map((pack) => (
              <Card key={pack.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-500">{pack.subtitle}</p>
                <h3 className="mt-4 text-3xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>{pack.title}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{pack.desc}</p>
                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">{pack.price}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 md:px-10 md:pb-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-500">Flavor flexibility</p>
              <h3 className="mt-4 text-3xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Rotating Frosé lineup</h3>
              <p className="mt-4 leading-7 text-neutral-600">Choose a curated mix of Classic Frosé, Peach Frosé, Strawberry Frosé, and seasonal pink pours for events that still feel simple to order.</p>
            </Card>
            <Card className="bg-[#1f1a1a] text-white ring-0">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-200">Ideal occasions</p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/90">
                {occasions.map((item) => <div key={item} className="rounded-2xl bg-white/10 px-4 py-3">{item}</div>)}
              </div>
            </Card>
          </div>
        </section>

        <WhiteGloveBlock />
      </>
    );
  }

  function ContactPage() {
    return (
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <SectionHeading eyebrow="Visit Us" title="Come by for frozen drinks, pickups, and event orders" body="A polished contact page with the essentials customers expect when they’re ready to visit, order, or reach out." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-3xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Store details</h3>
            <div className="mt-6 space-y-3 text-neutral-600">
              <div>{CONTACT.addressLine1}</div>
              <div>{CONTACT.addressLine2}</div>
              <div>{CONTACT.hours}</div>
              <div><a className="underline underline-offset-4" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              <div><a className="underline underline-offset-4" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></div>
            </div>
          </Card>
          <Card>
            <h3 className="text-3xl text-[#1f1a1a]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Need help?</h3>
            <div className="mt-6 space-y-4 text-neutral-600">
              <p>Use this page for everyday visits, pickup questions, and general inquiries.</p>
              <p>For larger orders and business support, head to Catering.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setPage("catering")} className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">Catering info</button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  function renderPage() {
    switch (page) {
      case "menu":
        return <MenuPage />;
      case "charcuterie":
        return <CharcuteriePage />;
      case "catering":
        return <><CateringPage /><FaqSection /></>;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }

  return (
    <div className="min-h-screen bg-[#fffafb] text-[#1f1a1a]">
      <header className="sticky top-0 z-20 border-b border-rose-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <button onClick={() => setPage("home")} className="text-left">
            <BrandMark />
          </button>
          <nav className="flex flex-wrap gap-2">
            {pages.map((item) => <NavButton key={item.id} id={item.id} label={item.label} />)}
          </nav>
        </div>
      </header>

      <main>{renderPage()}</main>

      <footer className="border-t border-rose-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 text-sm text-neutral-500 md:px-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandMark />
            <p className="mt-4 max-w-md leading-7">A Frosé-first frozen drink concept with wine, charcuterie, catering, and polished event-ready ordering.</p>
          </div>
          <div>
            <div className="font-semibold uppercase tracking-[0.2em] text-neutral-700">Explore</div>
            <div className="mt-4 space-y-3">
              <button onClick={() => setPage("menu")}>Menu</button><br />
              <button onClick={() => setPage("charcuterie")}>Wine & Charcuterie</button><br />
              <button onClick={() => setPage("catering")}>Catering</button><br />
              <button onClick={() => setPage("catering")}>FAQ</button>
            </div>
          </div>
          <div>
            <div className="font-semibold uppercase tracking-[0.2em] text-neutral-700">Contact</div>
            <div className="mt-4 space-y-3 leading-7">
              <div>{CONTACT.addressLine1}</div>
              <div>{CONTACT.addressLine2}</div>
              <div><a className="underline underline-offset-4" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              <div><a className="underline underline-offset-4" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
