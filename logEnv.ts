const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD
const baseKeyStyle: string = `color: #fff; font-size: 12px;background: #7c7c7c;border-top-left-radius: 5px;border-bottom-left-radius:5px;padding: 0 4px;`
const baseValStyle: string = `color: #fff; font-size: 12px;background: orange;border-top-right-radius: 5px;border-bottom-right-radius:5px;padding: 0 4px;`

const successValStyle: string = `color: #fff; font-size: 12px;background: green;border-top-right-radius: 5px;border-bottom-right-radius:5px;padding: 0 4px;`
const failValStyle: string = `color: #fff; font-size: 12px;background: red;border-top-right-radius: 5px;border-bottom-right-radius:5px;padding: 0 4px;`
console.log(`%cMODE%c${import.meta.env.MODE}`, `${baseKeyStyle}`,`${baseValStyle}`)
console.log(`%cDEV%c${isDev}`, `${baseKeyStyle}`,`${successValStyle}`)
console.log(`%cPROD%c${isProd}`, `${baseKeyStyle}`,`${failValStyle}`)
console.log(`%cBuildTime%c${__APP_INFO__.lastBuildTime}`, `${baseKeyStyle}`,`${failValStyle}`)
console.log(`%cVITE_API_BASE_URL%c${import.meta.env.VITE_API_BASE_URL}`, `${baseKeyStyle}`,`${failValStyle}`)


