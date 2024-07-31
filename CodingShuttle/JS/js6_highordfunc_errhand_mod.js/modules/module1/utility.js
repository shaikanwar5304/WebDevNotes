export const add = (a, b) => {
  return a + b;
};
export let sub = (a, b) => console.log(a - b);

export let dollar = (name) => {
  return `hello ${name}`;
};
function mul(a, b, c) {
  console.log(a * b * c);
}
function mul2(a, b, c) {
  console.log(a * b );
}
export default [mul,mul2]