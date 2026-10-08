export default function Loading() {
  return (
    <main className="min-h-screen bg-[#DBE2DC] px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8">
          <div className="h-9 w-56 animate-pulse rounded-lg bg-[#74A8A4]" />

          <div className="mt-3 h-4 w-80 animate-pulse rounded bg-[#B6D9E0]" />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <div className="h-8 w-2/3 animate-pulse rounded bg-[#B6D9E0]" />

          <div className="mt-4 h-4 w-1/3 animate-pulse rounded bg-[#DBE2DC]" />

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-20 animate-pulse rounded-xl bg-[#DBE2DC]"
              />
            ))}
          </div>

          <div className="mt-8">
            <div className="h-6 w-48 animate-pulse rounded bg-[#74A8A4]" />

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {[5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="h-24 animate-pulse rounded-xl bg-[#B6D9E0]/60"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}