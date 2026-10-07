'use client';

import { Check } from '@gravity-ui/icons';
import { Button } from '@heroui/react';

const steps = [
  {
    number: 1,
    title: 'Event Basics',
  },
  {
    number: 2,
    title: 'Category Details',
  },
  {
    number: 3,
    title: 'Additional Details',
  },
  {
    number: 4,
    title: 'Review',
  },
];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="mb-8 flex items-start justify-between">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.number;
        const isActive = currentStep === step.number;

        return (
          <div
            key={step.number}
            className="flex flex-1 items-start"
          >
            <div className="flex flex-col items-center">
              <Button
                isIconOnly
                size="sm"
                variant={isActive || isCompleted ? 'primary' : 'secondary'}
                isDisabled={!isActive && !isCompleted}
                className="min-w-9"
              >
                {isCompleted ? (
                  <Check />
                ) : (
                  step.number
                )}
              </Button>

              <span
                className={`mt-2 whitespace-nowrap text-xs font-medium ${
                  isActive || isCompleted
                    ? 'text-[#335765]'
                    : 'text-[#335765]/50'
                }`}
              >
                {step.title}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`mt-4 mx-2 h-0.5 flex-1 ${
                  currentStep > step.number
                    ? 'bg-[#74A8A4]'
                    : 'bg-[#DBE2DC]'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}