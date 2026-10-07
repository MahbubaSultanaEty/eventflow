'use client';

import {
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from '@heroui/react';

const eventTypes = [
  'Wedding',
  'Birthday',
  'Corporate',
  'Concert',
  'Conference',
  'Festival',
  'Other',
];

const categories = [
  { value: 'planner', label: 'Event Planner' },
  { value: 'performer', label: 'Performer' },
  { value: 'crew', label: 'Crew' },
];

export default function EventBasics({ initialData }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#335765]">
          Event Basics
        </h2>

        <p className="mt-1 text-sm text-[#335765]/65">
          Start with some basic information about your event.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <TextField
          isRequired
          name="eventName"
          defaultValue={initialData.eventName}
        >
          <Label>Event Name</Label>
          <Input placeholder="e.g. Summer Music Festival" />
        </TextField>

        <Select
          isRequired
          name="eventType"
          defaultSelectedKey={initialData.eventType || null}
          placeholder="Select event type"
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

        <div className="grid gap-5 md:grid-cols-2">
          <TextField
            isRequired
            name="startDate"
            type="date"
            defaultValue={initialData.startDate}
          >
            <Label>Start Date</Label>
            <Input />
          </TextField>

          <TextField
            name="endDate"
            type="date"
            defaultValue={initialData.endDate}
          >
            <Label>End Date</Label>
            <Input />
          </TextField>
        </div>

        <TextField
          isRequired
          name="location"
          defaultValue={initialData.location}
        >
          <Label>Location</Label>
          <Input placeholder="e.g. Chittagong, Bangladesh" />
        </TextField>

        <TextField
          name="venue"
          defaultValue={initialData.venue}
        >
          <Label>Venue</Label>
          <Input placeholder="e.g. Radisson Blu" />
        </TextField>

        <Select
          isRequired
          name="category"
          defaultSelectedKey={initialData.category || null}
          placeholder="Select a category"
        >
          <Label>What do you need?</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              {categories.map((category) => (
                <ListBox.Item
                  key={category.value}
                  id={category.value}
                  textValue={category.label}
                >
                  {category.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  );
}