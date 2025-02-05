export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

console.log('Sanity API Version:', apiVersion)  // Debugging line
console.log('Sanity Dataset:', dataset)  // Debugging line
console.log('Sanity Project ID:', projectId)  // Debugging line

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    console.error(errorMessage)  // Log error to the console
    throw new Error(errorMessage)
  }

  return v
}
