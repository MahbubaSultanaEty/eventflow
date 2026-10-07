'use client';

import { Button } from '@heroui/react';

export default function FormNavigation({
  currentStep,
  onBack,
  isSubmitting,
}) {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 4;

  return (
    <div className="flex items-center justify-between border-t border-[#DBE2DC] pt-6">
      <Button
        type="button"
        variant="secondary"
        onPress={onBack}
        isDisabled={isFirstStep || isSubmitting}
      >
        Back
      </Button>

      <Button
        type="submit"
        color="primary"
        isDisabled={isSubmitting}
      >
        {isSubmitting
          ? 'Submitting...'
          : isLastStep
            ? 'Submit Requirement'
            : 'Continue'}
      </Button>
    </div>
  );
}