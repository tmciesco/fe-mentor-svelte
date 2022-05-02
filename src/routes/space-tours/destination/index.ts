import type { RequestHandler } from '@sveltejs/kit'
import { api } from '$lib/space-tours/_api'

export const get: RequestHandler = async () => {
  const response = await api('destinations')

  // if (response.status === 404) {
  //   // user hasn't created a todo list.
  //   // start with an empty array
  //   return {
  //     body: {
  //       todos: []
  //     }
  //   };
  // }

  // if (response.status === 200) {
  //   return {
  //     body: {
  //       data: response
  //     }
  //   }
  // }

  return {
    body: {
      destinations: response
    }
  }
}
