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
//  let nums=[[4, 2, 7, 1], [20,90, 70, 40], [1, 2, 0]]

//  let num1=0
//  let num2=0
//   let num3=0

//    for( let i=0;i<nums.length;i++){
//     if(nums[0][i] > num1){
//          num1 = nums[0][i]
//     }
//     if(nums[1][i] > num2){
//         num2 = nums[1][i]
//    }
//    if(nums[2][i] > num3){
//     num3 = nums[2][i]
// }
//    }
// console.log(num1,num2,num3)




//*************************************problem10*****************************************


//secondLargest([10, 40, 30, 20, 50]) ➞ 40


//   let nums=[10,20,30,40,50]
//   let largest=nums[0]
//   let smallest=nums[0]



//    for( let i=0;i<nums.length;i++){
//      if( nums[i] > largest){
//          largest = nums[i]
//      }
//      if( nums[i] < smallest){
//         smallest = nums[i]
//     }
//    }
//     console.log("The largest number is :"+largest ,"The smallest number"+smallest )


//*************************************problem10*****************************************
 //secondLargest([10, 40, 30, 20, 50]) ➞ 40


//   let nums=[10,20,30,40,50]
// let swap=""

//    for (let i=0;i<nums.length;i++){
//      for( let j=0;j<nums.length;j++){
//         if( nums[i] < nums[j]){
//              swap=nums[i]
//              nums[i]=nums[j]
//              nums[j]=swap
//         }
//      }
//    }
//     console.log(swap)

//*************************************problem10*****************************************
//removeDups([1, 0, 1, 0]) ➞ [1, 0]

// let num=[0,1,1]
//  let num2=[]

//   for( let i=0;i<num.length;i++){
//      let count=0
//      for( let j=0;j<num.length;j++){
//          if( num[i]  === num[j]){
//              count++
//          }
//      }
//       if( count == 1){
//          num2.push(num[i])
//       }
//   }

// console.log(num2)


//*************************************problem10*****************************************
// 16.Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:

// charCount("c", "Chamber of secrets") ➞ 1


//  let str='Chamber of secrets'
//  let str2='e'
//  let count =0
//   for( let i=0;i<str.length;i++){
//      if( str[i] === str2){
//          count ++
//      }
//   }
//    console.log( count)

//   let string="Celebration"

//    let str2="A,E,I,O,U,a,e,i,o,u"

//     let count=0

//     for( let i=0;i<string.length;i++){
//          for( let j=0;j<str2.length;j++){
//             if( string[i] === str2[j]){
//                 count++
//             }
//          }
       
//     }

// console.log(count)


//*************************************problem10*****************************************

//  reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

//  let  str="Happy Birthday"
//  let str2=""
//    for( let i=0;i<str.length;i++){
//      if( str[i].charCodeAt[i] >97){
//          str2+=str[i].toUpperCase()
//      }
//       else{
//         str2+=str[i].toLowerCase()
//       }
//    }
// console.log(str2)



//  let num=5
 
//   for( let i=1;i<=num;i++){
//      let num2=""
//      for( let j=1;j<=i;j++){
//         num2+=j
//      }
//       console.log(num2)
//   }

 //*************************************problem*****************************************

//  32. Reverse a number using while Loop

//  Input: 123
//  Output: 321

//  let num="123"
//  let num2=""
//   for( let i=num.length-1;i>=0;i--){
//    num2+=num[i]
//   }
//    console.log(num2)

// 2menthod
//  let num = 54321;

//   let num2=0
//    while(num>0){
//  num2=num2*10 + num %10
//  num=(num - num %10)/10
//    }
//     console.log(num2)

 //*************************************problem*****************************************



//  Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7

  // let array=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] 
//    let array2=7
//  let count=0
//     for( let i=0;i<array.length;i++){
//        if( array[i] === array2){
//          count++
//        }
//     }
// console.log(count)

 //*************************************problem*****************************************



//  30. Program to count vowels and consonants in a given String.

//  Input: i am ram
//  Output: 3 vowels 3 consonants.

//  let str1="iamram"
//   let str2="aeiou"
//    let count=0
//    for( let i=0;i<str1.length;i++){
//     for( let j=0;j<str2.length;j++){
//               if( str1[i] === str2[j]){
//                  count++
//               }
//     }
//    }
//     console.log(`${count} ${str1.length-count}`)


 //*************************************problem*****************************************

// let arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//   for(  let i=0;i<arr.length;i++){
//      console.log(i+1+arr[i])
//   }

  //*************************************problem*****************************************



  // 25. C Program to Calculate the Power of a Number(using loop only).

  // Input: n=5, p=3
  // Output: 5 ^ 3 = 125
  // Explanation: 5 x 5 x 5 = 125

//   let num1=5
//    let num2=3
//   let result=1
//    for( let i=0;i<num2;i++){
//  result*=num1
//    }
// console.log(result)
  // 26. Program to Check Whether a Number is Prime or Not

//    let num=6

//  let count=0
//     for( let i=0;i<num;i++){
//        if( num%i ==0){
//          count+=1
//        }
        
//     }
//      if(count == 1){
//        console.log("prime")
//      }
//       else{
//          console.log("not-prime")
//       }
  

 
  //*************************************problem*****************************************

  //  let a=8
  //   let b=2
  //   let c=10

  //     let largest=(a>b)?a:(b>c)?b:c
  //      console.log(largest)

    //*************************************problem*****************************************
  

//  20. Create Function that will take one parameter and return type of the data.
			
//  Input:       500
//  Output:     Integer

//  Input:       Coding
//  Output:    String

//  let  input="ok"



//     if(  (typeof input) === "string"){
//        console.log("This is a string")
//     }
//      else{
//       console.log("This is a number")
//      }
  
    //*************************************problem*****************************************
// Input:      n=5
// 			Output:   2 4 6 8 10


//  let num=5

//  let num2=5
//   for( let i=1;i<=num;i++){
//      for(let j=1;j<=num2;j++){
//        console.log(`${i} * ${j} =${i*j}`)
//      }
//   }

     //*************************************problem*****************************************

 let names="ravi kumar pulivarthi mca"


  let str2=names.split(" ")
  let str3=""

   for( let i=0;i<str2.length;i++){
      str3+=str2[i].replace(str2[i][0],str2[i][0].toUpperCase())+" "
   }
       console.log(str3)

