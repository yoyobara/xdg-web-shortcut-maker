import { contextBridge, ipcRenderer } from "electron";

interface NewShortcutData {
	url: string;
	name: string;
	icon: string;
}

export interface NativeApi {
	getAvailableIcons(url: string): Promise<string[]>;
	createShortcut(data: NewShortcutData): Promise<void>;
}

// Custom APIs for renderer
const api: NativeApi = {
	getAvailableIcons(url) {
		return ipcRenderer.invoke("getAvailableIcons", url);
	},
	createShortcut(data) {
		return ipcRenderer.invoke("createShortcut", data);
	},
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld("api", api);
	} catch (error) {
		console.error(error);
	}
} else {
	// @ts-ignore (define in dts)
	window.electron = electronAPI;
	// @ts-ignore (define in dts)
	window.api = api;
}
