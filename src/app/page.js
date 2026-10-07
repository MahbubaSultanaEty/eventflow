// app/page.jsx

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#DBE2DC] text-[#335765]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-bold">
          EventFlow
        </Link>

        <Link
          href="/requirement"
          className="rounded-lg bg-[#335765] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#294956]"
        >
          Create Requirement
        </Link>
      </nav>

      <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl items-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-5 inline-block rounded-full bg-[#B6D9E0] px-4 py-2 text-sm font-medium">
            Plan your event with ease
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Tell us what your event needs.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#335765]/75 md:text-xl">
            Share your event details and requirements in a simple,
            step-by-step process. Choose what you need — from event
            planning to performers and event crew.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/requirement"
              className="rounded-lg bg-[#335765] px-6 py-3.5 font-medium text-white transition hover:bg-[#294956]"
            >
              Create a Requirement →
            </Link>

            <a
              href="#how-it-works"
              className="rounded-lg border border-[#335765]/30 px-6 py-3.5 font-medium transition hover:bg-[#B6D9E0]"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-t border-[#335765]/10 bg-[#B6D9E0]/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7F543D]">
              Simple process
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              From event idea to requirement in four steps.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Event Basics',
                text: 'Tell us about your event, date, location and category.',
              },
              {
                number: '02',
                title: 'Category Details',
                text: 'Add information based on the type of service you need.',
              },
              {
                number: '03',
                title: 'Additional Details',
                text: 'Provide any extra requirements for your event.',
              },
              {
                number: '04',
                title: 'Review & Submit',
                text: 'Review everything and submit your requirement.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-[#335765]/10 bg-[#DBE2DC] p-6"
              >
                <span className="text-sm font-bold text-[#7F543D]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#335765]/70">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}