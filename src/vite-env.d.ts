declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_API_URI?: string;
  readonly VITE_APP_ID?: 1 | 2;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
