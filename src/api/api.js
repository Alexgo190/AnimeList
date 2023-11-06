export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  )
  const data = await response.json()
  return data
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource)
  const data = await response.data.flatMap((item) => item[objectProperty])
  return data
}

export const render = (data, gap) => {
  const first = ~~(Math.random() * data.length - gap) + 1
  const last = first + gap

  const response = { data: data.slice(first, last) }
  return response
}
