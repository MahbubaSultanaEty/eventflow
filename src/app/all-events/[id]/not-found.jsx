import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#335765] px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#DBE2DC] p-8 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#7F543D]">
          404
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[#335765]">
          Event Not Found
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#335765]/65">
          The event requirement you are looking for does not
          exist or may have been removed.
        </p>

        <Link
          href="/all-events"
          className="mt-6 inline-flex rounded-lg bg-[#335765] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#7F543D]"
        >
          Browse All Events
        </Link>
      </div>
    </main>
  );
}