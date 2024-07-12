// ルートディレクトリにあるindex.htmlを読み込んで、scriptタグで読み込んでるファイルを差し替えたものを./outに出力する
const fs = require("node:fs/promises");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const indexHtmlPath = path.resolve(rootDir, "index.html");

(async () => {
	const indexHtml = await fs.readFile(indexHtmlPath, "utf-8");
	const replacedIndexHtml = indexHtml.replace(
		/<script type="module" src="\/src\/main.ts"><\/script>/,
		'<script type="module" src="https://unpkg.com/old-internet-components/dist/old-internet-components.umd.js"></script>',
	);
	await fs.mkdir(path.resolve(rootDir, "out"), { recursive: true });
	await fs.writeFile(
		path.resolve(rootDir, "out", "index.html"),
		replacedIndexHtml,
	);
})();
