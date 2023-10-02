const baseUrl = "http://localhost:3000";
export async function chat(prompt: string) {
  const res = await fetch(baseUrl + "/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  });
  const result = await res.json();
  return result.content;
}
export async function resetHistory() {
  const res = await fetch(baseUrl + "/resetHistory", {
    method: "DELETE",
  });
  return res.json();
}
