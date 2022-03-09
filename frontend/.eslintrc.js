module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "prettier", // this also tells eslint not to mess with prettier formatting style
        "airbnb/hooks",
        // "plugin:react/jsx-runtime", // disables error for "React must be in scope when using jsx "
        // "no-use-before-define",
    ],
    // "import/no-extraneous-dependencies": ["error", { devDependencies: false }], // disables 'import/no-extraneous-dependencies in vite.config.js'
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/prop-types": "off",
        "no-use-before-define": "off",
        "import/prefer-default-export": "off",
        "react/jsx-props-no-spreading": "off",
        "react/function-component-definition": "off",
    },
};
