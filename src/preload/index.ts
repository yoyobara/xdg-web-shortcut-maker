import { contextBridge, ipcRenderer } from 'electron'

export interface NativeApi {
	getAvailableIcons(url: string): Promise<string[]>;
}

// Custom APIs for renderer
const api: NativeApi = {
	getAvailableIcons(url) {
		return ipcRenderer.invoke('getAvailableIcons', url);
	},
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld('api', api)
	} catch (error) {
		console.error(error)
	}
} else {
	// @ts-ignore (define in dts)
	window.electron = electronAPI
	// @ts-ignore (define in dts)
	window.api = api
}
