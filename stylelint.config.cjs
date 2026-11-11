/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-declaration-strict-value'],
  rules: {
    // Sin !important en ningún caso.
    'declaration-no-important': true,
    // Los nombres propios de familias tipográficas conservan sus mayúsculas.
    'value-keyword-case': [
      'lower',
      { ignoreProperties: ['font-family', '/^--font/'] },
    ],
    // Sin IDs; como máximo 3 clases/atributos y 3 compuestos por selector.
    'selector-max-id': 0,
    'selector-max-specificity': '0,3,0',
    'selector-max-compound-selectors': 3,
    // Sin anidar más de 2 niveles.
    'max-nesting-depth': 2,
    // Colores, espaciados, tamaños de fuente y sombras solo vía tokens.
    'scale-unlimited/declaration-strict-value': [
      [
        'color',
        'background-color',
        'border-color',
        'outline-color',
        'text-decoration-color',
        'fill',
        'stroke',
        'box-shadow',
        'text-shadow',
        'font-size',
        '/^(margin|padding|gap|inset)(-|$)/',
        'top',
        'right',
        'bottom',
        'left',
      ],
      {
        ignoreValues: [
          '0',
          'auto',
          'none',
          'transparent',
          'currentColor',
          'inherit',
          'initial',
          'unset',
        ],
        expandShorthand: true,
        recurseLonghand: true,
      },
    ],
  },
};
