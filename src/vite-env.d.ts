/// <reference types="vite/client" />
interface ImportMetaEnv  {
    readonly VITE_APP_TITLE: string;
    readonly VITE_BASE_URL: string;
    readonly VITE_API_BASE_URL: string;
    readonly VITE_SHOW_VCONSOLE: string;
}
interface ImportMeta{
    readonly env: ImportMetaEnv
}
declare const __APP_INFO__ :{
    lastBuildTime: string;
    apiBaseUrl: string;
}