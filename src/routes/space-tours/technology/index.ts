import type { RequestHandler } from '@sveltejs/kit'
import { api } from '$lib/space-tours/_api'

export const get: RequestHandler = async () => {
  const response = await api('technology')

  return {
    body: {
      technologies: response
    }
  }
}
