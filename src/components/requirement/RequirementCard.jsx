import Link from "next/link";

export default function RequirementCard({ requirement }) {
  const categoryLabels = {
    planner: 'Event Planner',
    performer: 'Performer',
    crew: 'Crew',
  };

  return (
    <Link href={`/all-events/${requirement._id}`}>
   <article className="flex h-full min-h-[260px] flex-col rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="mb-4 flex items-start justify-between gap-3">
    <div>
      <h2 className="text-lg font-semibold text-[#335765]">
        {requirement.eventName}
      </h2>

      <p className="mt-1 text-sm text-[#335765]/60">
        {requirement.eventType}
      </p>
    </div>

    <span className="shrink-0 rounded-full bg-[#B6D9E0] px-3 py-1 text-xs font-medium text-[#335765]">
      {categoryLabels[requirement.category] ||
        requirement.category}
    </span>
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="space-y-2 text-sm text-[#335765]/70">
      <p>
        <span className="font-medium text-[#335765]">
          Date:
        </span>{' '}
        {requirement.startDate}
        {requirement.endDate &&
          requirement.endDate !== requirement.startDate &&
          ` - ${requirement.endDate}`}
      </p>

      <p>
        <span className="font-medium text-[#335765]">
          Location:
        </span>{' '}
        {requirement.location}
      </p>

      {requirement.venue && (
        <p>
          <span className="font-medium text-[#335765]">
            Venue:
          </span>{' '}
          {requirement.venue}
        </p>
      )}
    </div>
  </div>
</article>
    </Link>
  );
}