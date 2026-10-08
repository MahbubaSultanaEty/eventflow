import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { getRequirementById } from '@/lib/api';

export default function EventDetailsPage({ params }) {
  return (
    <Suspense fallback={<EventLoading />}>
      <EventDetails params={params} />
    </Suspense>
  );
}

async function EventDetails({ params }) {
  const { id } = await params;

  try {
    const requirement = await getRequirementById(id);

    if (!requirement) {
      notFound();
    }

    return (
      <main className="min-h-screen bg-[#DBE2DC] px-4 py-10">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#7F543D]">
              Event Requirement
            </p>

            <h1 className="text-3xl font-bold text-[#335765] md:text-4xl">
              {requirement.eventName}
            </h1>

            <p className="mt-2 text-sm text-[#335765]/65">
              {requirement.eventType}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="bg-[#335765] px-6 py-6 text-white md:px-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-[#B6D9E0]">
                    Looking for
                  </p>

                  <h2 className="mt-1 text-2xl font-semibold">
                    {getCategoryLabel(requirement.category)}
                  </h2>
                </div>

                <span className="w-fit rounded-full bg-[#74A8A4] px-4 py-2 text-sm font-medium text-[#335765]">
                  {getCategoryLabel(requirement.category)}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <section>
                <SectionTitle>Event Information</SectionTitle>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <InfoItem
                    label="Event Type"
                    value={requirement.eventType}
                  />

                  <InfoItem
                    label="Date"
                    value={formatDateRange(
                      requirement.startDate,
                      requirement.endDate
                    )}
                  />

                  <InfoItem
                    label="Location"
                    value={requirement.location}
                  />

                  <InfoItem
                    label="Venue"
                    value={requirement.venue}
                  />
                </div>
              </section>

              <section className="mt-10">
                <SectionTitle>
                  {getCategoryLabel(requirement.category)} Details
                </SectionTitle>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <DetailFields
                    details={requirement.details}
                    category={requirement.category}
                  />
                </div>
              </section>

              {requirement.createdAt && (
                <div className="mt-10 border-t border-[#DBE2DC] pt-5">
                  <p className="text-xs text-[#335765]/50">
                    Posted on{' '}
                    {new Date(
                      requirement.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Failed to load event:', error);
    notFound();
  }
}

function EventLoading() {
  return (
    <main className="min-h-screen bg-[#DBE2DC] px-4 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8">
          <div className="h-4 w-32 animate-pulse rounded bg-[#7F543D]/40" />
          <div className="mt-3 h-10 w-2/3 animate-pulse rounded bg-[#74A8A4]" />
          <div className="mt-3 h-4 w-24 animate-pulse rounded bg-[#B6D9E0]" />
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          <div className="h-32 animate-pulse bg-[#335765]" />

          <div className="p-6 md:p-8">
            <div className="h-6 w-48 animate-pulse rounded bg-[#74A8A4]" />

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-20 animate-pulse rounded-xl bg-[#DBE2DC]"
                />
              ))}
            </div>

            <div className="mt-10 h-6 w-48 animate-pulse rounded bg-[#74A8A4]" />

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

function SectionTitle({ children }) {
  return (
    <h2 className="border-l-4 border-[#7F543D] pl-3 text-xl font-semibold text-[#335765]">
      {children}
    </h2>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="rounded-xl bg-[#B6D9E0]/35 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-[#335765]/55">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-[#335765]">
        {value || 'Not provided'}
      </p>
    </div>
  );
}

function DetailFields({ details = {}, category }) {
  const fields = getDetailFields(category);

  return fields.map((field) => (
    <div
      key={field.key}
      className="rounded-xl border border-[#DBE2DC] bg-[#DBE2DC]/40 p-4"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-[#335765]/55">
        {field.label}
      </p>

      <p className="mt-1 text-sm leading-6 text-[#335765]">
        {details[field.key] || 'Not provided'}
      </p>
    </div>
  ));
}

function getCategoryLabel(category) {
  const labels = {
    planner: 'Event Planner',
    performer: 'Performer',
    crew: 'Crew',
  };

  return labels[category] || category;
}

function getDetailFields(category) {
  const fields = {
    planner: [
      { key: 'eventScale', label: 'Event Scale' },
      { key: 'guestCount', label: 'Expected Guests' },
      { key: 'servicesRequired', label: 'Services Required' },
      { key: 'budgetRange', label: 'Estimated Budget' },
      {
        key: 'additionalRequirements',
        label: 'Additional Requirements',
      },
    ],

    performer: [
      { key: 'performanceType', label: 'Performance Type' },
      { key: 'genre', label: 'Genre / Style' },
      {
        key: 'numberOfPerformers',
        label: 'Number of Performers',
      },
      {
        key: 'performanceDuration',
        label: 'Performance Duration',
      },
      {
        key: 'equipmentRequired',
        label: 'Equipment Requirements',
      },
      {
        key: 'additionalRequirements',
        label: 'Additional Requirements',
      },
    ],

    crew: [
      { key: 'crewType', label: 'Crew Type' },
      { key: 'numberOfPeople', label: 'Number of People' },
      { key: 'experienceLevel', label: 'Experience Level' },
      {
        key: 'shiftDuration',
        label: 'Expected Shift Duration',
      },
      {
        key: 'responsibilities',
        label: 'Responsibilities',
      },
      {
        key: 'additionalRequirements',
        label: 'Additional Requirements',
      },
    ],
  };

  return fields[category] || [];
}

function formatDateRange(startDate, endDate) {
  if (!startDate) return 'Not provided';

  if (!endDate || startDate === endDate) {
    return startDate;
  }

  return `${startDate} - ${endDate}`;
}