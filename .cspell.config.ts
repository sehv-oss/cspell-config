import { defineConfig } from "cspell";

export default defineConfig({
  useGitignore: true,
  language: "en",
  dictionaries: [
    "bash",
    "css",
    "filetypes",
    "fonts",
    "html",
    "node",
    "npm",
    "powershell",
    "softwareTerms",
    "typescript",
  ],
  words: ["sehv"],
  ignorePaths: ["node_modules", "dist", "pnpm-lock.yaml"],
});
