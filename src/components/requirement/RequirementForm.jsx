'use client';

import { useState } from 'react';
import { Form } from '@heroui/react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/toast';

import StepIndicator from './StepIndicator';
import EventBasics from './EventBasics';
import CategoryDetails from './CategoryDetails';
import AdditionalDetails from './AdditionalDetails';
import Review from './Review';
import FormNavigation from './FormNavigation';
import { useRouter } from 'next/navigation';

import { createRequirement } from '@/lib/api';

export default function RequirementForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const router = useRouter();

  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    startDate: '',
    endDate: '',
    location: '',
    venue: '',
    category: '',
    details: {},
  });

  const collectFormData = (event) => {
    const submittedData = new FormData(event.currentTarget);
    const data = {};

    submittedData.forEach((value, key) => {
      data[key] = value.toString();
    });

    return data;
  };


const handleSubmit = async (event) => {
  event.preventDefault();

  setSubmitError('');
  setIsSubmitting(true);

  try {
    const result = await createRequirement(formData);

    console.log('Requirement created:', result);

    // Reset form after successful submission
    setFormData({
      eventName: '',
      eventType: '',
      startDate: '',
      endDate: '',
      location: '',
      venue: '',
      category: '',
      details: {},
    });

    setCurrentStep(1);

    toast.add({
      title: 'Requirement submitted',
      description: 'Your requirement was saved successfully.',
    });

    router.push('/');
  } catch (error) {
    console.error('Submit error:', error);

    toast.add({
      title: 'Submission failed',
      description:
        error.message || 'Failed to submit requirement.',
      type: 'error',
    });
  } finally {
    setIsSubmitting(false);
  }
};



 const handleNext = (event) => {
  event.preventDefault();

  const data = collectFormData(event);

  if (currentStep === 1) {
    setFormData((prev) => ({
      ...prev,
      eventName: data.eventName || '',
      eventType: data.eventType || '',
      startDate: data.startDate || '',
      endDate: data.endDate || '',
      location: data.location || '',
      venue: data.venue || '',
      category: data.category || '',
    }));
  }

  if (currentStep === 2 || currentStep === 3) {
    setFormData((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        ...data,
      },
    }));
  }

  setCurrentStep((prev) => Math.min(prev + 1, 4));
};

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleEdit = (step) => {
    setCurrentStep(step);
    setSubmitError('');
  };

   

  return (
    <main className="min-h-screen bg-[#DBE2DC] px-4 py-10">
      <div className="mx-auto w-full max-w-4xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#335765]">
            Post Your Requirement
          </h1>

          <p className="mt-2 text-sm text-[#335765]/65">
            Tell us what you need for your upcoming event.
          </p>
        </div>

        <Card className="border-none shadow-sm">
          <CardContent className="p-6 md:p-8">

            <StepIndicator currentStep={currentStep} />

            <Form
              onSubmit={
                currentStep === 4
                  ? handleSubmit
                  : handleNext
              }
              className="flex flex-col gap-8"
            >

              {currentStep === 1 && (
                <EventBasics initialData={formData} />
              )}

              {currentStep === 2 && (
                <CategoryDetails initialData={formData} />
              )}

              {currentStep === 3 && (
                <AdditionalDetails initialData={formData} />
              )}

              {currentStep === 4 && (
                <Review
                  formData={formData}
                  onEdit={handleEdit}
                />
              )}

              {submitError && (
                <p className="text-sm text-red-600">
                  {submitError}
                </p>
              )}

              <FormNavigation
                currentStep={currentStep}
                onBack={handleBack}
                isSubmitting={isSubmitting}
              />

            </Form>

          </CardContent>
        </Card>

      </div>
    </main>
  );
}