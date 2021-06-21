const { flattenDeep } = require('lodash');
const _ = require('lodash');
const names = ['cat',['bat',['rat']]];
console.log(flattenDeep(names));