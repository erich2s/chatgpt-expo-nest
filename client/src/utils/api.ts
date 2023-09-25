const baseUrl = "http://localhost:3000";
export function chat(prompt: string) {
  return fetch(baseUrl + "/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.content);
}
export async function resetHistory() {
  const res = await fetch(baseUrl + "/resetHistory", {
    method: "DELETE",
  });
  return res.json();
}
