
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

  

  let  char="A"

    let voles="AEIOUaeiou"
 
     let char2=[]

      for( let i=0;i<voles.length;i++){
        if( voles[i] === char){
            char2++
        }
      }
       if(char2 === 1){
         console.log("vowels")
       }
        else{
           console.log("Consonent")
        }