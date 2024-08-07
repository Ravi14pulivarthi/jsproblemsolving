
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
//  function isLeapYear(year) {
//     // Check if the year is divisible by 400, or divisible by 4 but not by 100
//     return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
// }

// // Example usage
// const year = 2028;
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

 function isleapyear(year){

       return( year % 4000 ===0)|| ( year %100 !==0 && year %4 ===0)
 }

  let year=2024

   if( isleapyear(year)){
     console.log("THis is  leap year" +year)
   }
   else{
    console.log("THis is not  leap year" +year)
  }


  