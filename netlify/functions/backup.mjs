import { getStore } from "@netlify/blobs";
// Stores one encrypted backup per school. The app encrypts on the PC, so the server only ever sees ciphertext.
export default async (req) => {
  const id = new URL(req.url).searchParams.get("id") || "";
  if (!/^[a-f0-9]{64}$/.test(id)) return new Response("bad id", { status: 400 });
  const store = getStore("school-backups");
  if (req.method === "GET") {
    const v = await store.get(id);
    return v ? new Response(v, { headers: { "content-type": "application/json", "cache-control": "no-store" } }) : new Response("none", { status: 404 });
  }
  if (req.method === "PUT") {
    const body = await req.text();
    if (body.length > 4_000_000) return new Response("too large", { status: 413 });
    await store.set(id, body);
    return new Response("ok", { headers: { "cache-control": "no-store" } });
  }
  return new Response("method not allowed", { status: 405 });
};
export const config = { path: "/api/backup" };
