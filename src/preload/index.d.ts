import { NativeApi } from "./index";

declare global {
	interface Window {
		api: NativeApi;
	}
}
