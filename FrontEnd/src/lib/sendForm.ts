// All site forms post to the same Google Apps Script, which emails the team.
const ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxN3KJJ8-rvPZfrPMdbAmAHBwaba1UvS2DnAIIGrV6AU2jhdLTgDTqNs_WD3Q4iO0Bn_g/exec';

export type FormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Sends the form. Apps Script doesn't allow reading the response cross-origin
 * (hence `no-cors`), so this only throws on a network failure — it can't detect
 * an error inside the script itself.
 */
export async function sendForm(payload: FormPayload): Promise<void> {
  await fetch(ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
