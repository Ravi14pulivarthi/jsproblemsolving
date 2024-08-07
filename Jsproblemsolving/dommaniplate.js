const  title=document.getElementById("title");
  const changetextbutton= document.getElementById('changetextbutton')
  const  butbackground=document.getElementById('butbackground')
 let additem=document.getElementById("additem")
 let removeitem=document.getElementById("removeitem")
 let tooglebut=document.getElementById("tooglebut")
  let clonebut=document.getElementById("clonebut")











  changetextbutton.addEventListener("click",function(){
     title.textContent='Text changed!'
    
  })


  butbackground.addEventListener("click", function(){
    title.style.color = 'blue';
  })


  additem.addEventListener("click",function(){
     let newitem=document.createElement("li")
     newitem.textContent="new item2"
     itemlist.appendChild(newitem)
  })


  removeitem.addEventListener("click",function(){
     itemlist.removeChild(itemlist.lastElementChild)
  })


  tooglebut.addEventListener("click",function(){
     if(title.style.display ==="none"){
         title.style.display ="block"
     }
      else{
        title.style.display ="none"
      }
  })



  clonebut.addEventListener("click", function(){
    const fristItem=itemlist.firstElementChild.cloneNode(true)
     itemlist.appendChild(fristItem)
  })
