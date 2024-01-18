module.exports = {
  root: true,
  extends: ["@react-native", "prettier"],
  plugins: ["prettier", "simple-import-sort", "import"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  ignorePatterns: ["!.*"]
};
