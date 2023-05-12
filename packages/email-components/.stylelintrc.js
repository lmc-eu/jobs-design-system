/**
 * Stylelint ruleset '@lmc-eu/stylelint-config' is being used for all SCSS project files.
 */
module.exports = {
  extends: ['@lmc-eu/stylelint-config', 'stylelint-prettier/recommended'],
  rules: {
    // In email templates, after styles are compiled inline to HTML is needed for overwriting styles, so important is used in many files.
    'declaration-no-important': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^mso-/'],
      },
    ],
  },
};
