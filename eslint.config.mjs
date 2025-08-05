import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      indent: ["error", 2], // Erreur sur une mauvaise indentation, 2 espaces par niveau d'indentation
      "no-var": "error", // Interdit l'utilisation de 'var', préférer 'let' ou 'const'
    },
  },
];
