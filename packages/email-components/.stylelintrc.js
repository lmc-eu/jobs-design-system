/**
 * Stylelint ruleset '@lmc-eu/stylelint-config' is being used for all SCSS project files.
 */
module.exports = {
  extends: ['@lmc-eu/stylelint-config', 'stylelint-prettier/recommended'],
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^mso-/'],
      },
    ],
  },
};
