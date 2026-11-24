const fs = require("node:fs");
const path = require("node:path");

const line = "I summarized my context to fit the deadline in, and the summary ate it.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
