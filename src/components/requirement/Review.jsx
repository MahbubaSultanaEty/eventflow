'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@heroui/react';

import categoryFields from '@/data/categoryFields';

export default function Review({ formData, onEdit }) {
  const category = formData.category;
  const categoryConfig = categoryFields[category];

  const categoryDetails = categoryConfig?.steps?.[2] || [];
  const additionalDetails = categoryConfig?.steps?.[3] || [];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#335765]">
          Review Your Requirement
        </h2>

        <p className="mt-1 text-sm text-[#335765]/65">
          Check everything before submitting.
        </p>
      </div>

      <div className="space-y-5">
        {/* Event Basics */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-[#335765]">
              Event Basics
            </CardTitle>

            <Button
              size="sm"
              variant="secondary"
              onPress={() => onEdit(1)}
            >
              Edit
            </Button>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <ReviewItem
                label="Event Name"
                value={formData.eventName}
              />

              <ReviewItem
                label="Event Type"
                value={formData.eventType}
              />

              <ReviewItem
                label="Start Date"
                value={formData.startDate}
              />

              <ReviewItem
                label="End Date"
                value={formData.endDate}
              />

              <ReviewItem
                label="Location"
                value={formData.location}
              />

              <ReviewItem
                label="Venue"
                value={formData.venue}
              />

              <ReviewItem
                label="Category"
                value={categoryConfig?.label}
              />
            </div>
          </CardContent>
        </Card>

        {/* Category Details */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-[#335765]">
              {categoryConfig?.label} Details
            </CardTitle>

            <Button
              size="sm"
              variant="secondary"
              onPress={() => onEdit(2)}
            >
              Edit
            </Button>
          </CardHeader>

          <CardContent>
            <ReviewDetails
              fields={categoryDetails}
              details={formData.details}
            />
          </CardContent>
        </Card>

        {/* Additional Details */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-[#335765]">
              Additional Details
            </CardTitle>

            <Button
              size="sm"
              variant="secondary"
              onPress={() => onEdit(3)}
            >
              Edit
            </Button>
          </CardHeader>

          <CardContent>
            <ReviewDetails
              fields={additionalDetails}
              details={formData.details}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ReviewDetails({ fields, details }) {
  if (!fields.length) {
    return (
      <p className="text-sm text-[#335765]/60">
        No details provided.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.name}>
          <p className="text-sm font-medium text-[#335765]">
            {field.label}
          </p>

          <p className="mt-1 text-sm text-[#335765]/70">
            {details?.[field.name] || 'Not provided'}
          </p>

          {index < fields.length - 1 && (
            <Separator className="mt-4" />
          )}
        </div>
      ))}
    </div>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div>
      <p className="text-sm font-medium text-[#335765]">
        {label}
      </p>

      <p className="mt-1 text-sm text-[#335765]/70">
        {value || 'Not provided'}
      </p>
    </div>
  );
}