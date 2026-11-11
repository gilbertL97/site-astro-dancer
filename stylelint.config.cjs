/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // La arquitectura CSS completa (tokens obligatorios, especificidad, etc.) se define en la Fase 2.
    'declaration-no-important': true,
  },
};
