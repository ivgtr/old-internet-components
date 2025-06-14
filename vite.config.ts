import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import reloadSettings from "./vite-plugins/reloadSettings";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: "./src/main.ts",
			name: "MyLibrary",
			fileName: (format) => `old-internet-components.${format}.js`,
		},
	},
	plugins: [
		svelte({
			include: ["./src/**/*.svelte"],
			compilerOptions: {
				hmr: true,
			},
		}),

		reloadSettings(),
	],
});
