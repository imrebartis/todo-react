// ...args in (fn, ...args) takes a comma separated list of arguments for the rest of the arguments
// (anything that comes after the first argument) and it bundles them up in an array

// ...args in (null, ...args) is the spread operator
// it spreads the array back out as arguments passed into bind

export const partial = (fn, ...args) => fn.bind(null, ...args)