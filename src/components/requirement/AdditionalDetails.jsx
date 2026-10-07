'use client';

import {
  Input,
  Label,
  TextArea,
  TextField,
} from '@heroui/react';

import categoryFields from '@/data/categoryFields';

export default function AdditionalDetails({ initialData }) {
  const category = initialData.category;
  const fields = categoryFields[category]?.steps?.[3] || [];

  if (!category) {
    return null;
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#335765]">
          Additional Details
        </h2>

        <p className="mt-1 text-sm text-[#335765]/65">
          Add any additional information for your requirement.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {fields.map((field) => {
          const value = initialData.details?.[field.name] || '';

          return (
            <TextField
              key={field.name}
              isRequired={field.required}
              name={field.name}
              type={field.type === 'textarea' ? undefined : field.type}
              defaultValue={value}
            >
              <Label>{field.label}</Label>

              {field.type === 'textarea' ? (
                <TextArea placeholder={field.placeholder} />
              ) : (
                <Input placeholder={field.placeholder} />
              )}
            </TextField>
          );
        })}
      </div>
    </div>
  );
}