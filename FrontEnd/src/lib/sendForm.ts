// All site forms post to a Google Apps Script web app, which emails the team.
// Set VITE_FORM_ENDPOINT in .env.local (local) and in Netlify's environment
// variables (production). Vite bakes it into the build, so redeploy after changing it.
import { reportError } from './reportError';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export type FormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Sends the form. Apps Script doesn't allow reading the response cross-origin
 * (hence `no-cors`), so this only throws on a network failure or a missing
 * endpoint — it can't detect an error inside the script itself.
 */
export async function sendForm(payload: FormPayload): Promise<void> {
  try {
    if (!ENDPOINT) {
      throw new Error('VITE_FORM_ENDPOINT is not set');
    }
    await fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    // Only non-personal context is reported — never the name, email or message.
    reportError(error, {
      source: 'sendForm',
      subject: payload.subject,
      endpointConfigured: Boolean(ENDPOINT),
    });
    throw error;
  }
}
