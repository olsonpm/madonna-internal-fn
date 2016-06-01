# Madonna Internal Fn
Internal means this library is only meant for madonna library consumption. All
this library does is create a function with validated arguments.

## Example
```js
const validatedName = argsObj => console.dir(argsObj)

const mfn = madonnaFn({
  marg: { name: ['require', 'isLadenString'] }
  , fn: validatedName
});

mfn({ name: 'phil' });
// prints
// { name: 'phil' }

mfn({ name: { phil: "objects don't pass" } });
// prints
// Invalid Input: The following arguments didn't pass their criterion
// invalid arguments and values: {
//   "name": {
//     "phil": "objects don't pass"
//   }
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
`madonnaFn`
Takes the following arguments
 - **marg**: `require` `isLadenPlainObject`
   - marg stands for 'madonna-fp argument'.  It is passed to madonna-fp which
     is used to validate the arguments in calls to the returned function.
 - **fn**: `require` `isFunction`
   - The function which will be called after the arguments have been validated.
 - **ctx**: `isDefined`
   - Defaulting to undefined, the 'this' value `fn` will be called with.
 - **name**: `isLadenString`
   - If supplied, the name property of `fn` will be set to this.