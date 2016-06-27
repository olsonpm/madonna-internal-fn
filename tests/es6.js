'use strict';


//---------//
// Imports //
//---------//

const chai = require('chai')
  , fp = require('lodash/fp')
  , madonna = require('madonna-fp/es6')
  , madonnaFn = require('../es6');


//------//
// Init //
//------//

chai.should();
const errorIds = madonna.ERROR_IDS;


//------//
// Main //
//------//

describe('madonnaFn', () => {
  it('should throw correct errors upon invalid arguments', () => {
    let err;

    try { madonnaFn(); }
    catch(e) { err = e; }
    err.id.should.equal(errorIds.missingRequiredKeys);

    const correctMadonnaFnArgs = {
      marg: {
        name: ['require', 'isLadenString']
      }
      , fn: fp.identity
    };
    const validatedNoop = madonnaFn(correctMadonnaFnArgs);
    err = undefined;

    try { validatedNoop(); }
    catch(e) { err = e; }
    err.id.should.equal(errorIds.missingRequiredKeys);
    err = undefined;

    try { validatedNoop({ name: 1 }); }
    catch(e) { err = e; }
    err.id.should.equal(errorIds.criterionFailed);
  });
});
