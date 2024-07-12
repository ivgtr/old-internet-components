import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import reloadSettings from "./vite-plugins/reloadSettings";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			include: ["./src/**/*.svelte"],
			hot: true,
		}),

		reloadSettings(),
	],
});
