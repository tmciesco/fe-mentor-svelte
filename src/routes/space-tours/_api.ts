/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import data from '$lib/space-tours/data.json'

export function api(resource: string) {
  if (Object.keys(data).includes(resource)) {
    return data[resource]
  } else {
    return 'errorrrrrr'
  }
}
