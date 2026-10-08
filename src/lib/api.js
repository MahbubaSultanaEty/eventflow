const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createRequirement(data) {
  const response = await fetch(
    `${API_URL}/api/requirements`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to create requirement');
  }

  return result;
}


export async function getRequirements(filters = {}) {
  const params = new URLSearchParams();

  if (filters.category) {
    params.set('category', filters.category);
  }

  if (filters.eventType) {
    params.set('eventType', filters.eventType);
  }

  if (filters.location) {
    params.set('location', filters.location);
  }

  const query = params.toString();

  const response = await fetch(
    `${API_URL}/api/requirements${query ? `?${query}` : ''}`
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || 'Failed to fetch requirements'
    );
  }

  return result;
}

export async function getRequirementById(id) {
  const response = await fetch(
    `${API_URL}/api/requirements/${id}`,
    {
      cache: 'no-store',
    }
  );

  if (response.status === 404) {
    return null;
  }

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || 'Failed to fetch requirement'
    );
  }

  return result;
}