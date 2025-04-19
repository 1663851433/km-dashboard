const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetchData<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  get: <T>(endpoint: string) => fetchData<T>(endpoint),
  post: <T>(endpoint: string, data: Record<string,{}>) =>
    fetchData<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  // Add other methods as needed
}; 