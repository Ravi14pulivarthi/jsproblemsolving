   
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

          let num1="rar"

         let num2=num1.split("").reverse().join("")

         if(num1 === num2 ){
             console.log("poli")
         }
          else{
             console.log("not poli")
          }
            
