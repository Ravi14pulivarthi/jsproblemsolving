//************************** problem ***********************************

//  let num1=prompt("enter  frinst number")
//   let num2=prompt("enter  sencond number")

//    let num3=parseInt(num1)

//    let num4=parseInt(num2)

//  document.write(` this is total num = ${num3+num4}`)

//************************** problem ***********************************
//  Create a program that converts temperature from Celsius to Fahrenheit.

//  function temp(value){
//  return( (value * 9/5)+32)
//  }

//  let value=25
//    let  newtem= temp(value)
//  console.log(newtem)

//************************** problem ***********************************
//  Calculate the area of a circle given its radius.

//  function radius(circle){
//    return( (22/7*circle *circle) )
//  }
//   console.log(radius(10))

//************************** problem ***********************************

//  function isleapyear(year){

//  return( year % 400 ===0) ||( year % 100 !==0 && year % 4 === 0)
//  }

//   let year=2024

//    if( isleapyear(year)){
//      console.log("THis is  leap year" +year)
//    }
//    else{
//     console.log("THis is not  leap year" +year)
//   }

//************************** problem **********************************
// Write a program to determine if a number is positive, negative, or zero.

//  let i= 0

//  if(i > 0){
//     console.log("This number is Positive")
//  }
//   else if( i < 0){
//     console.log("This number is Nagitive")

//   }
// else{
//     console.log("This number is zero")
// }

//************************** problem **********************************
// Implement a switch statement that converts a numerical grade into a letter grade (e.g., A, B, C).
//  let marks=90

//   switch(true){
//      case( marks >= 90):
//      console.log(" A Grade")
//     break
//     case( marks >= 80):
//     console.log(" A Grade")
//    break
//    case( marks >= 70):
//    console.log(" B Grade")
//   break
//   case( marks >= 60):
//   console.log(" C Grade")
//  break
//  case( marks >= 50):
//  console.log(" D Grade")
// break

//  default:
//   console.log("THis is fail")
//   }

//************************** problem **********************************

//Create a program to determine if a given character is a vowel or consonant.

// let  char="A"

//   let voles="AEIOUaeiou"

//    let char2=[]

//     for( let i=0;i<voles.length;i++){
//       if( voles[i] === char){
//           char2++
//       }
//     }
//      if(char2 === 1){
//        console.log("vowels")
//      }
//       else{
//          console.log("Consonent")
//       }

//************************** problem **********************************
//Write a function that calculates the sum of all prime numbers in a given range.
// let num = 10;
// let num2=0
// for (let i = 0; i < num; i++) {
//   let count = 0;
//   for (let j = 0; j < i; j++) {
//     if (i % j === 0) {
//       count += 1;
//     }
//   }
//   if (count == 1) {
//     num2+=i
//   }
// }
//  console.log('total  sum of the Prime'+num2)
 
//************************** problem **********************************
//  stringrevers



// let names="Ravi kumar Pulivarthi"

// let name2=""
//  for( let i=names.length-1;i>=0;i--){
//     name2+=names[i]
//  }
//   console.log(name2)

//************************** problem **********************************

//Implement a function that converts a string to title case (capitalize the first letter of each word).


// let str="ravi kumar pulivarthi mca"

//  let str2=str.split(" ")
//   let str3=""

//   for( let i=0;i<str2.length;i++){
//  str3+=str2[i].replace(str2[i][0],str2[i][0].toUpperCase())+" "
//   }
//    console.log(str3)

 
//************************** problem **********************************
// Write a function that counts the number of words in a sentence.

//  let  string="Ravi kumar pulivarthi mca"

//   let str2=string.split(" ")

//    console.log(str2.length)


 
//************************** problem ********************************** 
//  let num=6
//  let count=0
//   for( let i=0;i<num;i++){
//       if( num%i ==0 ){
//          count+=1
//       }
//   }
// if( count ==1){
//      console.log("Prime number")
// }
// else{
//      console.log('Not Prime')
// }

 //************************** problem ********************************** 

//  let  string="Ravi kumar is agood boy pulivarthi"
//  let  string2=string.split(" ")
//   let largestword=string2[0]

//   for( let i=0;i<string2.length;i++){
//     if(  string2[i].length > largestword.length ){
//          largestword = string2[i]
//     }
//   }
//  console.log(largestword)
 
 //************************** problem ********************************** 
//  Create a JavaScript function that returns the frequency of a specific character in a string.

//  let str="pulivarthi"
//  let str2='i'
//   let count=0

//   for( let i=0;i<str.length;i++){
//  if( str[i] == str2){
//      count++
//  }
//   }
//    console.log(count)
 
 //************************** problem ********************************** 
  let num=[1,2,3,4,5,6,7,8,9,10]
 let num2=0
    for( let i=0;i<num.length;i++){
         if( num[i]%2 == 0){
             num2+=num[i]
         }
      
    }
 console.log(num2)












