'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#335765] px-4">
      <div className="w-full max-w-lg rounded-3xl bg-[#DBE2DC] p-8 text-center shadow-2xl md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#B6D9E0]">
          <span className="text-2xl font-bold text-[#335765]">
            404
          </span>
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#7F543D]">
          Page Not Found
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#335765] md:text-4xl">
          Nothing here
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#335765]/65">
          The page or event you are looking for does not exist
          or may have been removed.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-[#335765] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7F543D]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}