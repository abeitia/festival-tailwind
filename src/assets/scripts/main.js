/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// +(function () {
//   const university = "UOC";
//   console.log(`Hello, ${university}!`);
// })();



const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");



burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
