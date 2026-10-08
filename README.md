# GoPratle Requirement Form — Frontend

A multi-step event requirement posting flow built for the GoPratle Full-Stack Developer Intern assignment.

## Tech Stack

* Next.js
* React
* HeroUI
* shadcn/ui
* Tailwind CSS
* JavaScript

## Features

* Multi-step requirement posting flow
* Event basics
* Category-based requirement fields
* Event Planner, Performer, and Crew categories
* Review before submission
* Form validation
* Backend API integration
* Success and error feedback
* All Events browsing page
* Server-side filtering by category, event type, and location
* Individual event details page
* Responsive UI

## Pages

### Post Requirement

`/requirement`

Users can create and submit an event requirement through a four-step form.

### All Events

`/all-events`

Browse submitted event requirements and filter them by:

* Category
* Event Type
* Location

### Event Details

`/all-events/[id]`

View the complete details of an individual event requirement.

## Form Flow

1. Event Basics
2. Category Details
3. Additional Details
4. Review & Submit

The completed form data is submitted to the backend only after the final review.

## API Integration

The frontend communicates with the Express backend through:

* `POST /api/requirements` — create a requirement
* `GET /api/requirements` — fetch requirements with optional filters
* `GET /api/requirements/:id` — fetch a single requirement

## Run Locally

Install dependencies:

```
npm install
```

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the development server:

```
npm run dev
```

The frontend will run at:

```
http://localhost:3000
```

## Possible Improvements

* Add more event and requirement categories
* Improve date-range validation
* Add draft saving
* Add authentication and user-specific requirements
* Add edit and delete functionality
* Add pagination
* Add richer search and filtering
* Add automated tests
* Add file/image uploads where relevant
