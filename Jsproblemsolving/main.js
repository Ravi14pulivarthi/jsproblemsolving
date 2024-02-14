   
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
 
 let num=100

  for( let i=0;i<num;i++){
    let count =0
     for( let j=0;j<num;j++){
       if( i%j ==0){
         count+=1
       }
     }
      if( count ==2){
         console.log(i)
      }
  }
           
      
