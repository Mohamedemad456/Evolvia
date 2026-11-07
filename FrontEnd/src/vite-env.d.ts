/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Apps Script web app URL for the contact + demo forms */
  readonly VITE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
