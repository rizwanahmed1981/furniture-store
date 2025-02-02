import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "spber204",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
})
