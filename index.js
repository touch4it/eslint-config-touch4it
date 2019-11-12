module.exports = {
  extends: ["xo/esnext"],
  rules: {
    camelcase: "error",
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: true
      }
    ],
    "no-inline-comments": "warn",
    "multiline-ternary": ["error", "always-multiline"],
    "prefer-template": "warn",
    "require-atomic-updates": "warn",
    "spaced-comment": [
      "error",
      "always",
      {
        block: {
          exceptions: ["*"],
          markers: ["!"]
        }
      }
    ],
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": "off"
  }
};
