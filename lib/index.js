'use strict';


//---------//
// Imports //
//---------//

const fp = require('lodash/fp')
  , madonna = require('madonna-fp/es6');


//------//
// Init //
//------//

const madonnaFnArgsValidator = madonna.createIdentityValidator(getMadonnaFnMarg());


//------//
// Main //
//------//

function madonnaFn(argsObj) {
  madonnaFnArgsValidator.apply(null, arguments);

  const fnArgsValidator = madonna.createIdentityValidator(argsObj.marg)
    , res = fp.flow(fnArgsValidator, argsObj.fn);

  return res;
}


//-------------//
// Helper Fxns //
//-------------//

function getMadonnaFnMarg() {
  return {
    marg: ['require', 'isLadenPlainObject']
    , fn: ['require', 'isFunction']
  };
}


//---------//
// Exports //
//---------//

module.exports = madonnaFn;
