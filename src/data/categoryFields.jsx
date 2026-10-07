const categoryFields = {
  planner: {
    label: 'Event Planner',
    steps: {
      2: [
        {
          name: 'eventScale',
          label: 'Event Scale',
          type: 'select',
          options: ['Small', 'Medium', 'Large'],
          required: true,
        },
        {
          name: 'guestCount',
          label: 'Expected Number of Guests',
          type: 'number',
          placeholder: 'e.g. 150',
          required: true,
        },
        {
          name: 'servicesRequired',
          label: 'Services Required',
          type: 'textarea',
          placeholder: 'Describe the planning services you need...',
          required: true,
        },
      ],
      3: [
        {
          name: 'budgetRange',
          label: 'Estimated Budget',
          type: 'text',
          placeholder: 'e.g. $2,000 - $5,000',
          required: false,
        },
        {
          name: 'additionalRequirements',
          label: 'Additional Requirements',
          type: 'textarea',
          placeholder: 'Anything else the event planner should know?',
          required: false,
        },
      ],
    },
  },

  performer: {
    label: 'Performer',
    steps: {
      2: [
        {
          name: 'performanceType',
          label: 'Performance Type',
          type: 'select',
          options: ['Music', 'Dance', 'DJ', 'Comedy', 'Other'],
          required: true,
        },
        {
          name: 'genre',
          label: 'Genre / Style',
          type: 'text',
          placeholder: 'e.g. Pop, Rock, Classical',
          required: true,
        },
        {
          name: 'numberOfPerformers',
          label: 'Number of Performers',
          type: 'number',
          placeholder: 'e.g. 3',
          required: true,
        },
      ],
      3: [
        {
          name: 'performanceDuration',
          label: 'Performance Duration',
          type: 'text',
          placeholder: 'e.g. 45 minutes',
          required: true,
        },
        {
          name: 'equipmentRequired',
          label: 'Equipment Requirements',
          type: 'textarea',
          placeholder: 'Mention any equipment or setup you need...',
          required: false,
        },
        {
          name: 'additionalRequirements',
          label: 'Additional Requirements',
          type: 'textarea',
          placeholder: 'Anything else we should know?',
          required: false,
        },
      ],
    },
  },

  crew: {
    label: 'Crew',
    steps: {
      2: [
        {
          name: 'crewType',
          label: 'Crew Type',
          type: 'select',
          options: [
            'Event Staff',
            'Security',
            'Technical Crew',
            'Production Crew',
            'Other',
          ],
          required: true,
        },
        {
          name: 'numberOfPeople',
          label: 'Number of People',
          type: 'number',
          placeholder: 'e.g. 5',
          required: true,
        },
        {
          name: 'experienceLevel',
          label: 'Experience Level',
          type: 'select',
          options: ['Entry Level', 'Experienced', 'Professional'],
          required: true,
        },
      ],
      3: [
        {
          name: 'shiftDuration',
          label: 'Expected Shift Duration',
          type: 'text',
          placeholder: 'e.g. 8 hours',
          required: true,
        },
        {
          name: 'responsibilities',
          label: 'Responsibilities',
          type: 'textarea',
          placeholder: 'Describe the responsibilities...',
          required: true,
        },
        {
          name: 'additionalRequirements',
          label: 'Additional Requirements',
          type: 'textarea',
          placeholder: 'Anything else the crew should know?',
          required: false,
        },
      ],
    },
  },
};

export default categoryFields;