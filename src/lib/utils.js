// ...args in (fn, ...args) takes a comma separated list of arguments for the rest of the arguments
// (anything that comes after the first argument) and it bundles them up in an array

// ...args in (null, ...args) is the spread operator
// it spreads the array back out as arguments passed into bind

export const partial = (fn, ...args) => fn.bind(null, ...args);

// first ...arg (rest operator) = take whatever arg is passed in & wrap arguments up into an a array called arg
// second ...args is spread
const _pipe = (f, g) => (...args) => g(f(...args));

// ...fns (rest operator) = take whatever functions are passed in & wrap them up into an a array called fns
// then return instead of the arr of fns a single fn
export const pipe = (...fns) => fns.reduce(_pipe);