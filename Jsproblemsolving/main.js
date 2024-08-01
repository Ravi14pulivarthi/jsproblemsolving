   
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
   let nums=[1,1,2,2,3,3,4,4,5,6,6,7,7,8,9,10,9]
 let nums2=[]
    for( let i=0;i<nums.length;i++){
       if( nums[i] != nums[i+1]){
        nums2.push(nums[i])
       }
    }
     console.log(nums2)