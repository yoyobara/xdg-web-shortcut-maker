import { platform } from "process";
import { extension as mimeTypeExtension } from "mime-types";
import { randomUUID } from "crypto";
import { homedir } from "os";
import path from "path";
import { writeFile } from "fs/promises";

interface ShortcutParams {
	name: string;
	url: string;
	icon: string;
}

async function getIcon(
	iconUrl: string,
): Promise<{ iconBytes: Uint8Array; extension: string }> {
	const response = await fetch(iconUrl);
	const extension = mimeTypeExtension(response.headers.get("content-type")!);
	const iconBytes = await response.bytes();

	if (extension === false) {
		throw new Error(
			`bad content type: '${response.headers.get("content-type")!}'`,
		);
	}

	return {
		iconBytes,
		extension,
	};
}

function formatDesktopFile(
	url: string,
	name: string,
	iconPath: string,
): string {
	return `[Desktop Entry]\nEncoding=UTF-8\nName=${name}\nType=Link\nURL=${url}\nIcon=${iconPath}`;
}

async function createLinuxShortcut(data: ShortcutParams) {
	const { iconBytes, extension } = await getIcon(data.icon);
	const iconFilename = path.join(
		homedir(),
		`.local/share/icons/${randomUUID()}.${extension}`,
	);

	const desktopFile = path.join(homedir(), "Desktop", `${data.name}.desktop`);

	await writeFile(iconFilename, iconBytes);
	await writeFile(
		desktopFile,
		formatDesktopFile(data.url, data.name, iconFilename),
	);
}

async function createWindowsShortcut(data: ShortcutParams) {
	console.error("not implemented");
}

export default async function createShortcut(data: ShortcutParams) {
	switch (platform) {
		case "linux":
			await createLinuxShortcut(data);
			break;

		case "win32":
			await createWindowsShortcut(data);
			break;

		default:
			console.error(`os is not supported: '${platform}'`);
	}
}
