'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Button,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from '@heroui/react';

import { getRequirements } from '@/lib/api';
import RequirementCard from './RequirementCard';

const categories = [
  { value: 'planner', label: 'Event Planner' },
  { value: 'performer', label: 'Performer' },
  { value: 'crew', label: 'Crew' },
];

const eventTypes = [
  'Wedding',
  'Birthday',
  'Corporate',
  'Concert',
  'Conference',
  'Festival',
  'Other',
];

export default function AllEvents() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get('category') || '';
  const eventType = searchParams.get('eventType') || '';
  const location = searchParams.get('location') || '';

  const [requirements, setRequirements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequirements = async () => {
      setIsLoading(true);
      setError('');

      try {
        const data = await getRequirements({
          category,
          eventType,
          location,
        });

        setRequirements(data);
      } catch (error) {
        console.error(error);

        setError(
          error.message || 'Failed to load events.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequirements();
  }, [category, eventType, location]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const query = params.toString();

    router.push(
      query ? `/all-events?${query}` : '/all-events'
    );
  };

  const clearFilters = () => {
    router.push('/all-events');
  };

  return (
    <main className="min-h-screen bg-[#DBE2DC] px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#335765]">
            All Events
          </h1>

          <p className="mt-2 text-sm text-[#335765]/65">
            Browse event requirements and find opportunities
            that match your services.
          </p>
        </div>

        <div className="mb-8 rounded-xl bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <Select
             aria-label="Filter by category"
              value={category || null}
              onChange={(value) =>
                updateFilter(
                  'category',
                  value?.toString() || ''
                )
              }
              placeholder="All categories"
            >
              <Label>Category</Label>

              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {categories.map((item) => (
                    <ListBox.Item
                      key={item.value}
                      id={item.value}
                      textValue={item.label}
                    >
                      {item.label}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>

            <Select
             aria-label="Filter by event type"
              value={eventType || null}
              onChange={(value) =>
                updateFilter(
                  'eventType',
                  value?.toString() || ''
                )
              }
              placeholder="All event types"
            >
              <Label>Event Type</Label>

              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {eventTypes.map((type) => (
                    <ListBox.Item
                      key={type}
                      id={type}
                      textValue={type}
                    >
                      {type}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>

            <TextField
            aria-label="Filter by location"
              value={location}
              onChange={(value) =>
                updateFilter('location', value)
              }
            >
              <Label>Location</Label>
              <Input placeholder="Search by location" />
            </TextField>
          </div>

          {(category || eventType || location) && (
            <div className="mt-4">
              <Button
                variant="secondary"
                onPress={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="py-16 text-center text-sm text-[#335765]/65">
            Loading events...
          </div>
        )}

        {!isLoading && error && (
          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {!isLoading && !error && requirements.length === 0 && (
          <div className="rounded-xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-[#335765]">
              No events found
            </h2>

            <p className="mt-2 text-sm text-[#335765]/60">
              Try changing your filters or check back later.
            </p>
          </div>
        )}

        {!isLoading && !error && requirements.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {requirements.map((requirement) => (
              <RequirementCard
                key={requirement._id}
                requirement={requirement}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

