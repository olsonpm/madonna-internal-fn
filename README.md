# Madonna Internal Fn
Internal means this library is only meant for madonna library consumption. All
this library does is create a function with validated arguments.

**Tested against**
 - node 0.10.0 for the (default) es5 version
 - node 4.0.0 for es6 @ `require('madonna-internal-fn/es6')`

## Example
```js
const madonnaFn = require('madonna-internal-function')
  , printArg = arg => console.dir(arg);

const mfn = madonnaFn({
  marg: { name: ['require', 'isLadenString'] }
  , fn: printArg
});

mfn({ name: 'phil' });
// prints
// { name: 'phil' }

// madonna-fp validation errors are thrown when invalid arguments are passed
mfn({ name: 1 });
// prints
// Invalid Input: The following arguments didn't pass their criterion
// invalid arguments and values: {
//   "name": 1
// }
// failed criterion per argument: {
//   "name": {
//     "flags": [
//       "isLadenString"
//     ]
//   }
// }
```

## API
`require('madonna-internal-function')`
 - Exposes a function that takes the following arguments
   - **marg**: `require` `isLadenPlainObject`
     - marg stands for 'madonna-fp argument'.  It is passed to madonna-fp which
       is used to validate the arguments in calls to the returned function.
   - **fn**: `require` `isFunction`
     - The function which will be called after the arguments have been validated.
 - Returns a function which validates its arguments against **marg** before
   applying them to **fn**.
