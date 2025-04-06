import { reactRouter } from "@react-router/dev/vite";
import type { UserConfig } from "vite";
import viteCompression from "vite-plugin-compression2";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const plugins = [tsconfigPaths(), viteCompression(), svgr(), reactRouter()];
export default {
	plugins,
	build: {
		outDir: "build",
		reportCompressedSize: false,
		sourcemap: true,
	},
	server: {
		port: 3101,
		strictPort: true,
	},
} satisfies UserConfig;
