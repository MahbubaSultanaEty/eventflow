'use client';

import {
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from '@heroui/react';

import categoryFields from '@/data/categoryFields';

export default function CategoryDetails({ initialData }) {
  const category = initialData.category;
  const fields = categoryFields[category]?.steps?.[2] || [];

  if (!category) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-xl font-semibold text-[#335765]">
          No category selected
        </h2>

        <p className="mt-2 text-sm text-[#335765]/65">
          Go back and select a category first.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#335765]">
          {categoryFields[category].label} Details
        </h2>

        <p className="mt-1 text-sm text-[#335765]/65">
          Provide the details related to your requirement.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {fields.map((field) => {
          const value =
            initialData.details?.[field.name] || '';

          if (field.type === 'select') {
            return (
              <Select
                key={field.name}
                isRequired={field.required}
                name={field.name}
                defaultSelectedKey={value || null}
                placeholder={`Select ${field.label.toLowerCase()}`}
              >
                <Label>{field.label}</Label>

                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {field.options.map((option) => (
                      <ListBox.Item
                        key={option}
                        id={option}
                        textValue={option}
                      >
                        {option}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            );
          }

          return (
            <TextField
              key={field.name}
              isRequired={field.required}
              name={field.name}
              type={
                field.type === 'textarea'
                  ? undefined
                  : field.type
              }
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