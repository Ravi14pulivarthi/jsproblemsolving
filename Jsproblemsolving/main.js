   
//     print 1 to 10 numbers
//    let num=10

//     for( let i=1;i<=num;i++){
//       console.log(i)
//     }
 

//  add two number by arrawofunction

//  let sum=(a,b)=>{
//       console.log(a+b)
//  }
    
//  sum(10,50)

// ******** 10to1*******

//  let num=10
//   for( let i=num;i>=1;i--){
//      console.log(i)
//   }



//******** partten**********
//  let num=5

//   for( let i=1;i<=num;i++){
//    let num2=" "
//     for( let j=1;j<=i;j++){
//         num2+=j

//     }
//     console.log(num2)
//   }
  

//  print  given number is prime or not
//  let   num=4
//  let count=0
//   for( let i=0;i<num;i++){
//      if(num%i ==0){
//        count+=1
//      }
//   }
//    if( count == 1){
//      console.log("Prime")
//    }
//     else{
//        console.log("Not Prime")
//     }
 
   //***************** */  1 to 100 prime numbers ***************8
//  let num=100

//   for( let i=0;i<num;i++){
//     let count =0
//      for( let j=0;j<num;j++){
//        if( i%j ==0){
//          count+=1
//        }
//      }
//       if( count ==2){
//          console.log(i)
//       }
//   }
         
   
   //***************** */  factioral number ***************

   //  let num=5
   //   let num2=1
   //   for( let i=num;i>=1;i--){
   //   num2*=i
   //   }
   //    console.log(num2)
          //***************** */ largestnumberin array   ***************
//  debugger
//            let num=[1,2,3,4,5,6,10,12,98]
//             let  largestnum=num[0]
//             for( let i=0;i<num.length;i++){
//                 if( num[i]> largestnum){
//                    largestnum=num[i]
//                 }

//             }

//              console.log(largestnum)

         //***************** */ largestnumber and smallest number in array   ***************

            //  let num=[1,2,3,4,5,6,10,12,98]
            //  let  largestnum=num[0]
            //  let  smallest=num[0]
            //  for( let i=0;i<num.length;i++){
            //      if( num[i]> largestnum){
            //         largestnum=num[i]
            //      }
            //      if( num[i]< smallest){
            //       smallest=num[i]
            //    }
 
            //  }
            //   console.log(largestnum)
               
            //   console.log(smallest)
             
         //***************** given number is polidriem or not   ***************

         //  let num1="rar"

         // let num2=num1.split("").reverse().join("")

         // if(num1 === num2 ){
         //     console.log("poli")
         // }
         //  else{
         //     console.log("not poli")
         //  }

                 
         //*****************  dupicate values   *******************


         //  let arr=[1,2,3,1,2,3,4,5,1,2,5,63,4,1]

         //   arr.sort(function(a,b){return(a-b)})
         //  let arr2=[]
         //    for ( let i=0;i<arr.length;i++){
         //        if( arr[i] != arr[i+1]){
         //           arr2.push(arr[i])
         //        }
         //    }
         //     console.log(arr2)
                  
         //*****************   voles in  str  *******************


         //   let  str="ravi kumar"
         //    let  str2="a,e,i,o,u,l,s"
         //     let count=0
         //    for( let i=0;i<str.length;i++){
         //        for( let j=0;j<str2.length;j++){
         //           if(str[i] === str2[j]){
         //              count++
         //           }
         //        }

         //    }
         //     console.log(count)

             //*****************  Captal of  each letter in a string   *******************
                

            //   let str='ravi is a good boy'

            //     let str2=str.split(" ")
            //        let str3=" "
            //     for( let i=0;i<str2.length;i++){
            //      str3+=str2[i].replace(str2[i][0],str2[i][0].toUpperCase())+" "
            //     }
            //       console.log(str3)

             
             //*****************  asending number withoput predefind  *******************


            //   let num=[9,8,7,6,5,4,3,2,1]
            //    let swap=""

            //   for( let i=0;i<num.length;i++){
            //     for( let j=0;j<num.length;j++){
            //        if( num[i]< num[j]){
            //          swap=num[i]
            //          num[i]=num[j]
            //          num[j]=swap
            //        }
            //     }
            //   }
            //    console.log(num)
             
             //*****************  find the largest number in an str  *******************


              
            //   let  str="mahesh kasi ravi tharun sai"

            //    let str2=str.split(" ")

            //    let  largestword=[0]
            //      let word=" "

            //     for( let i=0;i<str2.length;i++){
            //        if(  str2[i].length > largestword){
            //          largestword =str2[i].length
            //          word=str2[i]
            //        }
            //     }

            //   console.log(word)
            
              //***********************************  unique values    **************************************
               
               // let arr=[1,2,3,1,2,3,4,4,5]
               
               //   let arr2=[]
               //  for( let i=0;i<arr.length;i++){
               //    let count=0
               //     for( let j=0;j<arr.length;j++){
               //        if( arr[i]===arr[j]){
               //           count++
               //        }
               //     }
               //      if( count ===1){
               //        arr2.push(arr[i])
               //      }
               //  }
               //   console.log(arr2)

   //***********************************    remove duplicates and sort it   **************************************
 
   // const arr = [1,1,2,3,2,4,3,5,6,5,7,-22,-1,-60]
   //                 let arr2=[]
   //                      let swap=" "
   //                  for( let i=0;i<arr.length;i++){
                   
   //                    for( let j=0;j<arr.length;j++){
   //                       if( arr[i] < arr[j]){
   //                         swap=arr[i]
   //                         arr[i]=arr[j]
   //                          arr[j]=swap
 
   //                       } 
   //                    }
   //                  }
                     
                    
   //                  for( let i=0;i<arr.length;i++){
   //                    if( arr[i]!= arr[i+1]){
   //                      arr2.push(arr[i])

   //                    }
   //                  }
   //                   console.log(arr2)

                //***********************************    spered opperator **************************************"12.scriptBees 

               //  let list = [{id:1,name:"a",optionList:[1,2,3,4]},
// {id:2,name:"b",optionList:[4,2]},
// {id:3,name:"c",optionList:[1,2,4]}]

//  let add =[{ id:99,name:"d",optionList:[5,6,7]}]
//   console.log(...list,...add)


    //***********************************   Revers and string templete **************************************"12.scriptBees 

    // let arr= ['e4', '5t', '66', 'ff', '5r']
// // output: [0x5r, 0xff, 0x66, 0x5t, 0xe4]"
//  let arr2=[]
//  for( let i=arr.length-1;i>0;i--){
//     arr2 .push(`0x ${arr[i]}`)
//  }
//   console.log(arr2)
   //***********************************   addind array with out predefind **************************************
// "15.WAP to Push value based on user in array and mutiple each value two times.
// let arr = [1, 2, 3, 4, 5, 6]
// // output = [1, 4, 9, 25, 36]"
//  let arr2=[]
//   for( let  i=0;i<arr.length;i++){
//        arr2.push(arr[i]*2)
//   }
//    console.log(arr2)

   //***********************************   reduce **************************************
// "16.WAP to Add sum of all positive number in array using reduce method.
// let arr = [-2, 0, 39, 4, -223, 2, 1, -3]
// output = 46"

//  let arr= [-2, 0, 39, 4, -223, 2, 1, -3]
 
//   let arr2=arr.filter((values)=>{
//    return( values>0)
//   })
//  let arr3=arr2.reduce((val1,val2)=>{
//     return(val1+val2)
//  })
//    console.log(arr3)

  //***********************************   adding twoo arrays **************************************

//    let arr1=[1,2,3]
//     let arr2=[9,8,7]

//     let arr3=[]
//      for( let i=0;i<arr1.length;i++){
    
//           arr3[i]=arr1[i]+arr2[i]
  
//      }
//  console.log(arr3)


  //***********************************    arr repeting count **************************************

//     let arr=[1,2,3,4,5,3,4,2,3,5,,5,5,5,4,4]
//  arr.sort()
//   let count=1
//    let arr2=[]
//       for( let i=0;i<arr.length;i++){
//          if( arr[i] == arr[i+1]){
//          count++
//          }
//           else{
//            arr2.push(`${arr[i]} count is : ${count}`)
//             count=1
//           }
//       }
//        console.log( arr2)

  //***********************************   unique and assending **************************************

// let arr =[8,9,4,5,6,6,1,1,2,3,3]

// let arr2=[]
// for( let i=0;i<arr.length;i++){
//       let count=0
//    for( let j=0;j<arr.length;j++){
//       if( arr[i] == arr[j]){
//          count++
//       }
//    }
//     if( count ===1){
//        arr2.push(arr[i])
       
//     }
// }
// console.log(arr2)
// let swap=' '
// for( let i=0;i<arr2.length;i++){

//  for( let j=0;j<arr2.length;j++){
//     if( arr2[i] < arr2[j]){
//        swap=arr2[i]
//        arr2[i]=arr2[j]
//        arr2[j]=swap
//     }
//  }
// }
// console.log(arr2)

  //***********************************    revers and adding +5 to array **************************************
// let arr=[1,2,3,4]
// let arr2=[]
// for(let i=arr.length;i>=0;i--){
//   if( arr[i]){
//      arr2.push(arr[i]+5)
//   }
// }
//  console.log(arr2)

 //***********************************     suppreat array strings and numbers **************************************
//  let arr=["a",'b','c',1,2,3]
//  let arr2=[]
//   let arr3=[]
//   for( let i=0;i<arr.length;i++){
//      if( typeof  arr[i] === 'string'){
//          arr2.push(arr[i])
//      }
//       else{
//          arr3.push(arr[i])
//       }
//   }
// console.log( " this are strings   : "+arr2)
// console.log( " this are numbers   : "+arr3)

  //***********************************     **************************************

//   let str='Ravikumar1234#'

//   let count1=0
//   let count2=0
//   let count3=0
  
//    for( let i=0;i<str.length;i++){
//        if(  str[i]>=0 && str[i]<=9){
//           count1++
//        }
//         else if( str[i].match(/[a-z A-X]/)){
//            count2++
//         }
//          else{
//             count3++
//          }
//    }
//     console.log("numbers"+count1)
//        console.log(count2)
//           console.log(count3)

  //***********************************sum of duplatect elements     **************************************
// let num=[1,2,3,4,5,6,1,2,5,4]
// num.sort()
// let num2=0


// for( let i=0;i<num.length;i++){
//   if(  num[i]!= num[i+1]){
//       num2+=num[i]
//   }
// }
//  console.log(num2)

  //*********************************** convert capital lettersto small   **************************************
//  let  name="RaviKumarPulivarthi"
//  let name2=" "
//  for( let i=0;i<name.length;i++){
//     if( name.charCodeAt(i)>=97){
//         name2+=name[i].toUpperCase()
//     }
//       else{
//          name2+=name[i].toLowerCase()
//       }
//  }
//   console.log( name2)


 //***********************************  second largest number  **************************************
  // let num=[10,90,20,40,30,50]
  // let num2=''
  // for( let i=0;i<num.length;i++){
  //    for( let j=0;j<num.length;j++){
  //         if( num[i] < num[j]){
  //            swap=num[i]
  //            num[i]=num[j]
  //            num[j]=swap
  //         }
  //    }
  // }
  //  console.log(swap)

    //***********************************   displat date **************************************

   
 
//     const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 
// const m = new Date();

// let name = Date.month()
//  console.log(name)

  // let day=day[]

   //***********************************   pure javascript  **************************************
  //  let tap=document.getElementsByClassName("tapme")

  //  tap.onclick=click
   
  //   function click(){
  //      alert("why do you tap")
  //   }
    

  //  console.log("Ravi")

   //***********************************  sratparten   *********************************** 


    //  let num=5

    //   for(let i=1;i<=num;i++){
    //      let num2=" "
    //      for( let j=1;j<=i;j++){
    //         num2+=j
    //      }
    //      console.log(num2)
    //   }
     
   
      //***********************************  sratparten   *********************************** 



  //       let nums=[10,9,8,7,6,5,4,3,2,1,0]
  //    let swap=" "
  // for( let i=0;i<nums.length;i++){

  //     for( let j=0;j<nums.length;j++){
  //        if( nums[i] < nums[j]){
  //           swap=nums[i]
  //           nums[i]=nums[j]
  //           nums[j]=swap

  //        }
  //     }
  // }
  //         document.write(nums)



  //  duplatedtelements



//    let nums=[1,2,2,3,4,5,4,5,3,1]
//  nums.sort()
//   let num2=[]
//     for( let i=0;i<nums.length;i++){
//       if(nums[i]!= nums[i+1]){
//          num2.push(nums[i])
//       }
//     }
//      document.write(num2)

  // let nums=[1,2,3,4,5]


  // let num2= nums.map((values)=>{
  //    return( values *3)
  //  })
  //   console.log(num2)

// new10
//    let nums=[1,1,2,2,3,3,4,4,5,6,6,7,7,8,9,10,9]
//  let nums2=[]
//     for( let i=0;i<nums.length;i++){
//        if( nums[i] != nums[i+1]){
//         nums2.push(nums[i])
//        }
//     }
//      console.log(nums2)


 
//************************object******************************

//  let details={name:"Rdghu",age:23,study:"MCA"}

//   delete details.age
//   console.log(details)
 
//************************new ******************************


//  let nums=[1,2,3,4,5,5,6,7,8,9,10]

//    let num3=nums.reduce((element,element2) => {
//    return(  element+element2)
//   });

//    console.log(num3)

 //************************set intervel ******************************

//  function ravi() {
  // Store the interval ID
//   const intervalId = setInterval(() => {
//     console.log("Data");
//   }, 3000);

//   // Example to stop the interval after 10 seconds
//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval stopped");
//   }, 10000); // Stops the interval after 10000 milliseconds (10 seconds)
// }

// ravi(); // Calls the function



 //************************set intervel ******************************
// "Display the all user name  from this array if age is greater than 18"
// const users = [
//   { name: "Jane Doe", id: 2 , age: 19},
//   { name: "Billy Doe", id: 3 , age:25},
//   { name: "Deepak", id: 4 , age:10},
//   { name: "Abhishek", id: 5 , age:19},
//   { name: "Mohan", id: 6 , age:40},
//   { name: "Rohit", id: 7 , age:19}
// ];


//  let user2=users.filter((data)=>{
//    return( data.age > 18 )
//  })
// console.log(user2)

 //************************set intervel ******************************
//  let numbers=[1,2,3,4,10,12,5,6,7,12,3,3,4,5,]
//   const uniquevalues=[...new Set(numbers)]

//    console.log(uniquevalues.sort(function(a,b) {return(a-b)}))


 //************************IIF ******************************




 
//  (function details(name){
//   console.log(name)
//  })("Ravi")

  //************************IIF ******************************

 
//callapply bind


//  let details={name:"Ravikumar"}

//   let details2={names:"Raghu",person:function(age){console.log(this.name+"Age is "+age)}}



//   let detail= details2.person.bind(details,[25])


// detail()

 


  //************************Cloures ******************************

 
  //  function name1(n1){
  //    return function name2(n2){
  //      console.log(n1+n2)
  //    }
  //  }

  //  name1("Ravi")('Kumar')

  //************************ second largetst ******************************

  // let arr = [12, 45, 6, 7, 8] Find largest Number in this array

   

//   let arr = [12, 45, 6, 7, 80] 
   

//   let arr2=arr[0]
//  let arr3=arr[0]

//    for( let i=0;i<arr.length;i++){
//      if( arr[i] < arr2){
//        arr2 = arr[i]
//      }
//      if( arr[i] > arr3){
//       arr3 = arr[i]
//     }
//    }
//     console.log("Smmalest number in the array = "+arr2)
//     console.log("Largest number in the array = "+arr3)

   //************************ second largetst ******************************




    //  let array={name:"Rghu",study:"MCA"}

    // let {name}=array

    //   console.log(name)

     
   //************************ loop  ******************************
    //  let num=10


    //   for( let i=1;i<=num;i++){
    //      console.log(i)
    //   }
     
//  let num=10
//  let i=1
//   while( i<=num){
//      console.log(i) 
//      i++
//   }
     
     
//  do wile


 let num=10
 let i=1
do{
     console.log(i) 
     i++
  }  while( i<=num)
     
     