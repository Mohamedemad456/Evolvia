// Sends client-side errors to the `log-error` Netlify Function so they show up
// in Netlify's function logs. Never throws: reporting must not break the UI.
const REPORT_URL = '/.netlify/functions/log-error';

export function reportError(error: unknown, context: Record<string, unknown> = {}): void {
  try {
    const err = error instanceof Error ? error : new Error(String(error));
    const body = JSON.stringify({
      name: err.name,
      message: err.message,
      stack: err.stack,
      context,
      page: window.location.href,
      userAgent: navigator.userAgent,
      time: new Date().toISOString(),
    });

    // keepalive lets the request finish even if the user navigates away.
    void fetch(REPORT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Swallow: there's nowhere left to report to.
  }
}
