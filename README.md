# GoPratle Requirement Form — Frontend

A multi-step event requirement posting form built for the GoPratle Full-Stack Developer Intern assignment.

## Tech Stack

- Next.js
- React
- HeroUI
- shadcn/ui
- Tailwind CSS
- JavaScript

## Features

- Multi-step requirement posting flow
- Event basics
- Category-based requirement fields
- Event Planner, Performer, and Crew categories
- Review before submission
- Form validation
- Backend API integration
- Success and error feedback
- Responsive UI

## Form Flow

1. Event Basics
2. Category Details
3. Additional Details
4. Review & Submit

The completed form data is submitted to the backend only after the final review.

## Run Locally

Install dependencies:

    npm install

Create a `.env.local` file:

    NEXT_PUBLIC_API_URL=http://localhost:5000

Start the development server:

    npm run dev

The frontend will run at:

    http://localhost:3000

## Backend API

The frontend communicates with the Express backend through:

    POST /api/requirements

## Possible Improvements

- Add more event and requirement categories
- Add richer field types for different categories
- Improve date validation, including date-range validation
- Add draft saving so users can continue an incomplete requirement later
- Add authentication and user-specific requirements
- Add an admin/requirement management dashboard
- Add edit and delete functionality for submitted requirements
- Add better loading and submission states
- Add automated tests for form validation and API integration
- Add file/image uploads where relevant