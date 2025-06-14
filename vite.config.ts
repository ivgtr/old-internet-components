import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import reloadSettings from "./vite-plugins/reloadSettings";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: "./src/main.ts",
			name: "OldInternetComponents",
			fileName: (format) => `old-internet-components.${format}.js`,
		},
	},
	plugins: [
		svelte({
			include: ["./src/**/*.svelte"],
			compilerOptions: {
				customElement: true,
			},
		}),

		reloadSettings(),
	],
});
