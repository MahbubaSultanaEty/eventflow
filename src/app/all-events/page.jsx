import { Suspense } from 'react';

import AllEvents from '@/components/requirement/AllEvents';

export const metadata = {
  title: 'All Events | GoPratle',
  description:
    'Browse event requirements and discover opportunities for your services.',
};

function LoadingState() {
  return (
    <main className="min-h-screen bg-[#DBE2DC] px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8">
          <div className="h-9 w-48 animate-pulse rounded bg-[#B6D9E0]" />
          <div className="mt-3 h-4 w-80 animate-pulse rounded bg-[#B6D9E0]" />
        </div>

        <div className="mb-8 rounded-xl bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="h-12 animate-pulse rounded bg-[#DBE2DC]" />
            <div className="h-12 animate-pulse rounded bg-[#DBE2DC]" />
            <div className="h-12 animate-pulse rounded bg-[#DBE2DC]" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-52 animate-pulse rounded-xl bg-white shadow-sm"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default function AllEventsPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <AllEvents />
    </Suspense>
  );
}