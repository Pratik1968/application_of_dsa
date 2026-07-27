/**
 * Shared HTTP helpers for the Application of DSA server.
 * Set EXPO_PUBLIC_API_URL in `.env` (see `.env.example`).
 */

const DEFAULT_BASE_URL = 'http://localhost:3000';

export function getApiBaseUrl(): string {
  return process.env.EXPO_PUBLIC_API_URL?.replace(/\/$/, '') || DEFAULT_BASE_URL;
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const url = `${getApiBaseUrl()}${path.startsWith('/') ? path : `/${path}`}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`API ${response.status}: ${body || response.statusText}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}
