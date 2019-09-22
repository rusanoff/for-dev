module.exports = {
  rules: {
    "color-no-invalid-hex": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "block-no-empty": true,
    "no-missing-end-of-source-newline": true,
    "comment-empty-line-before": [
      'always',
      {
        "ignore": [
          'stylelint-commands',
          'after-comment',
        ],
      },
    ],
    "declaration-colon-space-after": 'always',
    "indentation": [
      2,
      {
        "except": [
          'value',
        ],
      },
    ],
    "max-empty-lines": 1,
    "rule-empty-line-before": [
      'always',
      {
        "except": [
          'first-nested',
        ],
        "ignore": [
          'after-comment',
        ],
      },
    ],
    "unit-whitelist": [
      'em',
      'rem',
      '%',
      'px',
      'vh',
      'vw',
    ],
    "no-empty-source": true,
    "no-eol-whitespace": true,
  },
};
