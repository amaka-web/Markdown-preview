const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

export async function saveMarkdown(content: string) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body: content }),
  })
  return res.json()
}

export async function loadMarkdown(id = 1) {
  const res = await fetch(`${BASE_URL}/${id}`)
  const data = await res.json()
  return data.body
}
