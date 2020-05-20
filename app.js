// Fizz Buzz app


function checkNum(){
    for(let i = 0; i < 100;  i++){

      if(i == 1){
        console.log(i);

      }else if(i % 15 == 0){
         console.log("FizzBuzz");

      }else if (i % 4 == 0) {
          console.log("Buzz");

      }else if (i % 3 == 0) {
          console.log("Fizz");

      }else{
        console.log(i);
      }
    }
};


checkNum();
//
// let i = 0;
// let fizz = "Fizz";
// let buzz = "Buzz";
// let fizzBuzz = "FizzBuzz";
//
// function numberCheck(){
//   do{
//     if(i == 1){
//       console.log(i);
//
//     }else if(i % 15 == 0){
//        console.log(fizzBuzz);
//
//     }else if (i % 5 == 0) {
//         console.log(buzz);
//
//     }else if (i % 3 == 0) {
//
//         console.log(fizz);
//
//     }else{
//       console.log(i);
//     }
//
//     i++
//   }
//   while (i <= 100);
// };
//
//
// numberCheck();
