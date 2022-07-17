// 闭包作用域
// let i = 0
// function Foo() {
//   let i = 0
//   return function () {
//     console.log(i++)
//   }
// }
// var f1 = new Foo()
// var f2 = new Foo()
// f1()
// f1()
// f2()

// // var name = 'World!';
// (function(){
//   // var name
//   if(typeof name === 'undefined'){
//     name = 'Jack'
//     console.log('Goodbye' + name);
//   }else{
//     console.log('hello' + name);
//   }
// })()