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