import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Layers3,
  Menu,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import portlioLogo from "../assets/portlio_image_e.png";
import PortfolioPreviewLP from "./PortfolioPreviewLP";

const LandingPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090f] text-white">
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Portlio home"
        >
          <span className="grid size-9 place-items-center rounded-xl text-white shadow-lg shadow-violet-500/25">
            <img
              src={portlioLogo}
              alt=""
              className="size-12 rounded-lg object-cover"
            />
          </span>
          <span className="text-xl font-bold tracking-tight">Portio</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a className="transition hover:text-white" href="#features">
            Features
          </a>
          <a className="transition hover:text-white" href="#how-it-works">
            How it works
          </a>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            className="text-sm font-medium text-slate-300 transition hover:text-white"
            to="/login"
          >
            Log in
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-violet-100"
            to="/register"
          >
            Get started <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <Link
          aria-label="Get started"
          className="grid size-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
          to="/register"
        >
          <Menu className="size-5" />
        </Link>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:pb-32 lg:pt-20">
        <div className="pointer-events-none absolute -left-48 top-0 size-128 rounded-full bg-violet-700/15 blur-[120px]" />
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/[0.07] px-3.5 py-2 text-xs font-medium tracking-wide text-violet-200 sm:text-sm">
            <Sparkles className="size-4 text-violet-300" />
            Your next opportunity starts here
          </div>
          <h1 className="text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Your work
            <br />
            deserves a{" "}
            <span className="bg-linear-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              better stage.
            </span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Bring your projects, skills, and experience together in one
            portfolio that feels unmistakably yours. Build it once. Share it
            with confidence.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-950/40 transition hover:bg-violet-400"
              to="/register"
            >
              Create your portfolio <ArrowRight className="size-4" />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/4"
              href="#features"
            >
              Explore the workspace <ArrowDown className="size-4" />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-emerald-400" /> Your own public
              portfolio
            </span>
            <span className="hidden size-1 rounded-full bg-slate-700 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-emerald-400" /> Easy to update,
              anytime
            </span>
          </div>
        </div>

        {/* The landing page portfolio preview */}
        <PortfolioPreviewLP />
      </section>

      <section className="border-y border-white/[0.07] bg-white/1.5">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 sm:justify-center">
            <BriefcaseBusiness className="size-5 text-violet-300" />
            <span className="text-sm text-slate-300">
              Showcase your experience
            </span>
          </div>
          <div className="flex items-center gap-3 sm:justify-center">
            <Code2 className="size-5 text-violet-300" />
            <span className="text-sm text-slate-300">
              Put your projects in focus
            </span>
          </div>
          <div className="flex items-center gap-3 sm:justify-center">
            <Sparkles className="size-5 text-violet-300" />
            <span className="text-sm text-slate-300">
              Make it yours, effortlessly
            </span>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        id="features"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
            Everything in one place
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Less formatting. More you.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400">
            A simple workspace for the parts of your story that matter most.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: BriefcaseBusiness,
              title: "Your experience",
              description:
                "Make your career journey clear, considered, and easy to explore.",
            },
            {
              icon: Code2,
              title: "Your projects",
              description:
                "Give every project the context and spotlight it deserves.",
            },
            {
              icon: Sparkles,
              title: "Your personal brand",
              description:
                "Bring your skills and story together in a portfolio that is yours.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="rounded-3xl border border-white/8 bg-white/2.5 p-6 transition hover:border-violet-300/20 hover:bg-white/4 sm:p-7"
            >
              <span
                className={`grid size-11 place-items-center rounded-2xl ${index === 1 ? "bg-fuchsia-300/10 text-fuchsia-200" : "bg-violet-300/10 text-violet-200"}`}
              >
                <Icon className="size-5" />
              </span>
              <h3 className="mt-7 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12"
        id="how-it-works"
      >
        <div className="flex flex-col items-start justify-between gap-8 rounded-4xl border border-violet-200/10 bg-linear-to-br from-violet-500/13 via-[#13121c] to-[#11111a] p-7 sm:p-10 md:flex-row md:items-center lg:p-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
              Ready when you are
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Make your next move count.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base">
              Start with what you have. Add to it as you go. Your next chapter
              deserves a great introduction.
            </p>
          </div>
          <Link
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-violet-100"
            to="/register"
          >
            Build your portfolio <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-slate-300"
          >
            <span className="grid size-7 place-items-center rounded-lg bg-violet-500 text-white">
              <Layers3 className="size-4" />
            </span>
            portlio
          </Link>
          <p>Make your work easy to discover.</p>
          <div className="flex items-center gap-5">
            <Link className="transition hover:text-white" to="/login">
              Log in
            </Link>
            <Link className="transition hover:text-white" to="/register">
              Create account
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
