const fs = require("fs");
const path = require("path");

const pkgDir = path.join(__dirname, "..", "node_modules", "react-remove-scroll-bar");
const source = path.join(pkgDir, "dist", "es2015", "constants.js");
const sourceDts = path.join(pkgDir, "dist", "es2015", "constants.d.ts");
const targetDir = path.join(pkgDir, "constants");
const targetIndex = path.join(targetDir, "index.js");
const targetDts = path.join(targetDir, "index.d.ts");
const targetPkg = path.join(targetDir, "package.json");

if (!fs.existsSync(pkgDir)) {
  console.warn("[fix-react-remove-scroll-bar] Package not found, skipping.");
  process.exit(0);
}

if (!fs.existsSync(source)) {
  console.warn("[fix-react-remove-scroll-bar] Source constants.js not found, skipping.");
  process.exit(0);
}

fs.mkdirSync(targetDir, { recursive: true });

const indexJs = 'export * from "../dist/es2015/constants.js";\n';
fs.writeFileSync(targetIndex, indexJs, "utf8");

if (fs.existsSync(sourceDts)) {
  const indexDts = 'export * from "../dist/es2015/constants";\n';
  fs.writeFileSync(targetDts, indexDts, "utf8");
}

const pkgJson = { type: "module" };
fs.writeFileSync(targetPkg, JSON.stringify(pkgJson, null, 2) + "\n", "utf8");

console.log("[fix-react-remove-scroll-bar] Added constants entry.");
