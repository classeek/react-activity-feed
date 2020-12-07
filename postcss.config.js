/* eslint-disable */
const variables = {
  borderRadius: '4px',

  z0: '0',
  z1: '10',
  z2: '20',
  z3: '30',
  z4: '40',
  z5: '50',
  z6: '60',
  z7: '70',
  z8: '80',
  z9: '90',

  transparent: 'rgba(255,255,255,0)',
  white: '#ffffff',
  black: '#000000',
  primary: '#F6A623',
  info: '#0BA8E0',
  faded: '#DDDDDD',
  error: '#FF0000',
  fontColor: '#414D54',

  // Colors to optimize
  rafAttachedActivityAuthor: '#414D54',
  rafActivityFooterBorder: '#E6F0F2',
  rafCommentfieldBackground: '#F7F7F7', // lightest grey
  rafCardBackground: '#F4F4F4', // lighter grey
  rafCardBorder: '#A0B2B8', // grey
  rafDropdownBackground: '#313E47', // dark grey
};

module.exports = {
  plugins: {
    'postcss-easy-import': {},
    'postcss-cssnext': {},
    'postcss-simple-vars': { variables },
    'postcss-nested': {},
    'postcss-color-function': {},
  },
};
