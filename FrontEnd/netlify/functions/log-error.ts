// Receives client-side error reports and writes them to Netlify's function logs.
// View them in the Netlify UI: Logs → Functions → log-error.

const MAX_BODY = 8_000; // bytes; ignore oversized or abusive payloads

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const raw = (await req.text()).slice(0, MAX_BODY);
  let report: unknown;
  try {
    report = JSON.parse(raw);
  } catch {
    report = { unparsed: raw };
  }

  // A single JSON line keeps each report easy to search in the log viewer.
  console.error(
    '[client-error]',
    JSON.stringify({
      receivedAt: new Date().toISOString(),
      country: req.headers.get('x-country') ?? undefined,
      report,
    }),
  );

  return new Response(null, { status: 204 });
};
