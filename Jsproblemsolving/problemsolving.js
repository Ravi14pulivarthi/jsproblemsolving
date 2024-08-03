//*************************************problem1***************************
//1.Create a function that takes two numbers as arguments and returns their sum.

//    function add(a,b){
//     console.log(a+b)
//    }
//     add(10,20)

     //*************************************problem1****************************

      
//2.Write a function that takes an integer minutes and converts it to seconds.

//   function time(mits){
//      console.log(mits*60)
//   }
//    time(1)

 //*************************************problem1****************************
//4.Create a function that takes the age in years and returns the age in days.


//  function person(age){
//       return(age *365)
//  }

//   console.log()
 //*************************************problem1****************************
 //6.Write a function that returns the string "something" joined with a space " " and the given argument a.

//   function string(strings){

//  console.log("Good moring "+strings)
//   }

//    string("Ravi")

 //*************************************problem7****************************

//7.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 

//  let a=5
//   let b=5


//    function data(){
   
//     if( a == 10) {
//         return true
//     }
//     if( b == 10) {
//         return true
//     }
//     if( a+b == 10) {
//         return true
//     }
//     else{
//          return false
//     }
//    }
//    console.log(  data())

 //*************************************problem7**************************************************************

//8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of
//characters in the first string is equal to the total number of characters in the second string.



//  let name1="Rvai"
//   let name2="kuma"
   

//      function string(){
//         if(name1.length === name2.length){
//              return true
//         }
//          else{
//              return false
//          }
//      }
//       console.log(string())




 //*************************************problem7*****************************************

 //10.Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).



















  //*************************************problem7*****************************************



 // sortByLength(["a", "cc", "dddd", "bbd"]) ➞ ["a", "cc", "bbd", "dddd"]


//    let alfa=['l',"lc","xyze","boo"]

//  let swap=""
//     for( let i=0;i<alfa.length;i++){
//          for( let j=0;j<alfa.length;j++){
//             if( alfa[i].length< alfa[j].length){
//                  swap=alfa[i]
//                   alfa[i]=alfa[j]
//                   alfa[j]=swap
//             }
//          }
//     }
//      console.log(alfa)


  //*************************************problem7*****************************************
// let numbers=[9,1,8,2,2,3,4,2,7,0]
//  let num1=""
//   let num2=""
//  let num3=""
// for(  let i=0;i<numbers.length;i++){
//      if( i<3){
//          num1+=numbers[i]
//      }
//      else if( i<6){
//         num2+=numbers[i]
//     }
//     else if( i<10){
//         num3+=numbers[i]
//     }
// }

// console.log(`((${num1}) ${num2} - ${num3})`)


//*************************************problem7*****************************************
// [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
 let nums=[[4, 2, 7, 1], [20,90, 70, 40], [1, 2, 0]]

 let num1=0
 let num2=0
  let num3=0

   for( let i=0;i<nums.length;i++){
    if(nums[0][i] > num1){
         num1 = nums[0][i]
    }
    if(nums[1][i] > num2){
        num2 = nums[1][i]
   }
   if(nums[2][i] > num3){
    num3 = nums[2][i]
}
   }
console.log(num1,num2,num3)
































