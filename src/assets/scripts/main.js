/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

//  function Menu(e){
//       let list = document.querySelector('ul');
//       e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
//     }

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

// burger.addEventListener('click', (e) => {
//   if (menu.classList.contains('hidden')) {
//     menu.classList.remove('hidden');
//   } else {
//     menu.classList.add('hidden');
//   }
// });

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
