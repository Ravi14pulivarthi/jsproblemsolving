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
//   let num=[1,2,3,4,5,6,7,8,9,10]
//  let num2=0
//     for( let i=0;i<num.length;i++){
//          if( num[i]%2 == 0){
//              num2+=num[i]
//          }
      
//     }
//  console.log(num2)

//  secondmethod

//   let num=[1,2,3,4,5,6,7,8,9,10]

//     let num2=num.reduce((vaue1,value2)=>{
      
//          if( value2 %2 ==0){
//               return(vaue1+value2)
//          }
//          return vaue1
//     },0)
//  console.log(num2)

 
  
 //************************** problem **********************************


//   let num=5

//    for( let i=num;i>=1;i--){
//      let num2=""
//  for( let j=1;j<=i;j++){
//  num2+="*"
//  }
//  console.log(num2)
//    }

 //************************** problem **********************************
//  remove duplecates in the 

//  let array=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
//   array.sort()
//  let arr2=[]

//   for( let i=0;i<array.length;i++){
//        if( array[i] != array[i+1]){
//           arr2.push(array[i])
//        }
//   }


//    console.log(arr2)
 //************************** problem **********************************

//   let nums=[1,2,3,4,5]
//  let swap=""


//    for( let i=0;i<nums.length;i++){
     
//       for( let j=0;j<nums.length;j++){
//        if( nums[i] < nums[j]){
//           swap=nums[i]
//           nums[i]=nums[j]
//           nums[j]=swap
//        }
//       }
//    }

//  console.log(swap)

//************************** problem **********************************


//  let arr1=[1,2,3,4,5]


//   let arr2=[6,7,8,9,10]


//    console.log(...arr1,...arr2)
//************************** problem **********************************



//  let evennumbers=[1,2,3,4,5,6,7,8,9,10]
//  let num2=0

//     for( let i=0;i<evennumbers.length;i++){
//       if( evennumbers[i] %2 ==0){
//            num2+=evennumbers[i]
//       }
//     }
//      console.log(num2)


//************************** problem **********************************

//  let nums=[9,8,7,6,5,4,3,2,1]

//   for( let i=0;i<nums.length;i++){
//      let swap=''
//      for( let j=0;j<nums.length;j++){
//        if(  nums[i] < nums[j]){
//          swap=nums[i]
//           nums[i]=nums[j]
//           nums[j]=swap
//        }
//      }
//   }
//     console.log(nums)


  //************************** problem **********************************
  // const nestedArray = [1, [2, [3, 4], 5], 6];

  //  const array2=nestedArray.flat(Infinity)

  //   console.log(array2)
      //************************** problem **********************************
//      let nums=[1,2,3,4,5]

//  let num2=0
//       for( let i=0;i<nums.length;i++){
//           num2+=nums[i]
        
        
//         }
//          let num3=num2/nums.length
//          console.log(num3)
      //************************** problem **********************************
// Create an object representing a book with properties like title, author, and publication year.

//  let book={title:"Sudhamurthi",
//   author:"Sudha",
//   pubilications:2024
//  }
//   console.log(Object.values(book))
  // let obj={name:"Ravi"}

  // if( Object.keys(obj).length === 0){
  //    console.log( 'The obj is Empty')
  // }
  //  else{
  //    console.log("The object is not empty ")
  //  }

         //************************** problem **********************************
//           let obj1={name:"Ravi"}
//            let obj2={age:25}
//  let obj3={...obj1,...obj2}

//             console.log(obj3)

 
         //************************** problem **********************************


//            let object=[{name:"ravi"},{name:"kumar"},{name:"ravi"},{name:"tharun"},{name:"raghu"}]
//  let count=0

//  for( let i=0;i<object.length;i++){
//   if( Object.keys(object)){
//      count++
//   }
//  }
//   console.log(count)


          //************************** problem **********************************

// const people = [
//   { name: 'Ravi', age: 25 },
//   { name: 'Kumar', age: 30 },
//   { name: 'Tharun', age: 20 },
//   { name: 'Raghu', age: 28 }
// ];
//   for( let i=0;i<people.length;i++){
//      let swap=""
//      for( let j=0;j<people.length;j++){
//       if( people[i].age< people[j].age){
//          swap=people[i]
//          people[i]=people[j]
//          people[j]=swap
//       }
//      }
//   }
//    console.log(people)

 
          //************************** problem **********************************

          //  let num=5

          //   for( let i=1;i<=10;i++){
          //       console.log(`${i} * ${num} =${i*num}`)
          //   }

     //************************** problem **********************************        
     
     

//  let nums=[10,40,60,20,30]

// let num2=nums[0]
//   for(let i=0;i<nums.length;i++){
//     if( nums[i] < num2){
//         num2 = nums[i]
//     }
//   }
//    console.log(num2)


      //************************** problem ********************************** 
      // Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead 
      // of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5,
      //  print "FizzBuzz".


      //  let num=100
        
      //   for( let i=1;i<=num;i++){
      //      if( i % 3 ==0 ){
      //        console.log("Fizz")
      //      }
      //      if( i % 5 ==0 ){
      //       console.log("Buzz")
      //     }
      //     if( i % 3 && i%5 ==0 ){
      //       console.log("FizzBuzz")
      //     }
      //       else{
      //          console.log(i)
      //       }
      //   }
            //************************** problem ********************************** 
            // Write a function that takes a string and returns an object 
            // with the count of each character in the string.

            //  let string="Rvaikumat Pulivarthi"

            //   let charcount={}
            //   for(  let i=0;i<string.length;i++){
            //      let char=string[i]

            //       if( charcount[char]){
            //          charcount[char]++
            //       }
            //        else{
            //          charcount[char]=1
            //        }
            //   }
            //    console.log(charcount)


   //************************** problem **********************************

                  // //  Remove duplicts

                  //  let num=[1,2,3,4,5,1,2,3,4,5]
                  //  num.sort()
                  //      let num2=[]
                  //   for( let i=0;i<num.length;i++){
                  //      if(num[i] != num[i+1]){
                  //        num2.push(num[i])
                  //      }
                  //   }
                  //    console.log(num2)

 //************************** problem **********************************
//   let string="ravi"
//    let string2=""
//    for( let i=string.length-1;i>=0;i--){
//      string2+=string[i]
//    }
//   if( string2 === string){
//      console.log("Polinderam")
//   }
//    else{
//     console.log("not Polinderam")
//    }


  //************************** problem **********************************

//    let  num=[1,2,3,4,5,2,3,4]
//   let num2=1
//  let conunt=0
//     for( let i=0;i<num.length;i++){
//        if(num[i] === num2){
//             conunt++
//        }
       
//     }
//      if( conunt === 1){
//       console.log('true')
//   }
//    else{
//        console.log("false")
//    }

  //************************** problem **********************************
//  let  obj1=[{ a: 10, b: 20, c: 5 }]

// //  console.log(Object.keys(obj1))
//  let obj2=obj1.map((item)=>{
//        return( Object.values(obj1) <  item)
//   })
//    console.log(obj2)


  //************************** problem **********************************

//    let num=123
//  let reversed=0
//   let orginalnum=num


//     while(num>0){
//       let lastdegit=num%10
//        reversed = reversed * 10 + lastdegit

//         num=(num -  lastdegit)/10

//     }
//      console.log(reversed)


   //************************** problem **********************************

//    let num=[1,2,3,4,5]
//    let num2=0
  
//        for( let i=0;i<num.length; i++){
//          num2+=num[i]
//        }
//         console.log(num2)

// let num=[1,2,3,4,5,6]
// let num2=0

//     for( let i=0;i<num.length-1; i++){
//       num2++
//     }
//      console.log(num2)

   //************************** problem **********************************

//     let num=123
//  let revers=0




  // while( num > 0){
  //    let lastdigit=num%10

  //     revers=revers*10 + lastdigit

  //      num=(num - lastdigit)/10
  // }
  //  console.log(revers)


      //************************** problem **********************************
      //  let num=5

      //   for( let i=0;i<num;i++ ){
      //      let num2=" "
      //      for( let j=0;j<i;j++){
      //        num2+=String.fromCharCode(65 + j)
      //      }
      //      console.log(num2)
      //   }
   
      //************************** problem **********************************
//  let string="ravi"


//   let stringcont={}

//    for( let i=0;i<string.length;i++){
//       let char=string[i]

//  if(  stringcont[char]){
//  stringcont[char]++
//  }
//   else{
//      stringcont[char]=1
//   }

//    }
//     console.log(stringcont)

       //************************** problem **********************************



    //      let  nums=[3,0,1]

    //  let expetedsum=0

    // let actualsum=0

    //  for( let i=0;i<=nums.length;i++){
    //   expetedsum+=i
    //  }
    //   for(let i=0;i<nums.length;i++){
    //     actualsum+=nums[i]
    //   }

    // let missingnum=expetedsum-actualsum
    //  console.log(missingnum)


     //************************** problem **********************************

    // let nums =[1, 2, 3, 4, 1, 2, 3, 4, 5];

  // let count={}

  //  let count2=[]

  //  for( let i=0;i<nums.length;i++){
  //     let totalnum=nums[i]

  //      if( count[totalnum]){
  //        count[totalnum]++
  //      }
  //       else{
  //          count[totalnum]=1
  //       }
  //  }
  //   console.log(count)

  //    for( let i=0;i<nums.length;i++){
  //     let totalnum=nums[i]
  //      if(i === nums.indexOf(totalnum)){
  //        console.log(`${totalnum} ${count[totalnum]}`)
  //      }
  //    }

      //************************** problem **************************


       let nums="raavi"
        let  count={}


        for(let i=0;i<nums.length;i++){
            let numscount=nums[i]

             if( count[numscount]){
               count[numscount]++
             }
              else{
                 count[numscount]=1
              }
        }

         console.log(count)