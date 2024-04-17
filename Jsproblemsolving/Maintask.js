// let button=document.getElementById("button").addEventListener("click",function(){
//         alert("porapandhi")
// })
//  let names=document.getElementById("name")

//   names.innerHTML="<h1>RavikumarPulivarthi</h1>"


//  fetch("https://jsonplaceholder.typicode.com/users").
//  then((responce)=>responce.json()).
//  then((postes)=>{
//      let postlist=document.getElementById("api")
//      postes.forEach((post)=>{postlist.innerHTML+=`<li>${post.id}</li>`})   
//  })


//   function  text(){
//   alert("ravi")
//   }
//   let clicked=document.getElementById("clicked").addEventListener("click",()=>{
//   document.getElementById("content").innerHTML="<h1>Ravikumar</h1>"
//   })

   

let details=([
    {names:"ravi",age:23,salery:2500},
  {names:"kasi",age:19,salery:15000},
  {names:"mahesh",age:14,salery:1800},
    {names:"tharun",age:13,salery:2000}])



     let  sum=details.reduce((total1,total2)=>{
        return((total1+total2.salery))
     },0)
      console.log(sum)