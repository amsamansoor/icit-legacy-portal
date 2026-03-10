/* eslint-disable */

declare module 'lucide-react' {
  import * as React from 'react';
  export const Users: React.ComponentType<any>;
  export const UserCircle: React.ComponentType<any>;
  export const Fingerprint: React.ComponentType<any>;
  export const Edit: React.ComponentType<any>;
  export const UserPlus: React.ComponentType<any>;
  export const Settings: React.ComponentType<any>;
  export const Mail: React.ComponentType<any>;
  export const ShieldCheck: React.ComponentType<any>;
  export const Shield: React.ComponentType<any>;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_URL?: string;
      [key: string]: string | undefined;
    }
  }
}

export {};
