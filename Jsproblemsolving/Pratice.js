
document.addEventListener("DOMContentLoaded", async function () {
  // Fetch data from the API
  const url = "https://instagram-media-api.p.rapidapi.com/feed/reelsclips";
//   let myhead=new Headers()
//   myhead.append("Access-Control-Allow-Origin","https://scontent.cdninstagram.com/")
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e4600ea8aamsh0e6d0e8e3fd2ba7p16e3bcjsn80edf445cc25",
      "X-RapidAPI-Host": "instagram-media-api.p.rapidapi.com",
    //   "headers":"myhead"
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);

 result.edges.forEach((item) => {
    // Create elements for displaying product information
    const productDiv = document.createElement("div");
    productDiv.className = "product";
   
    const productName = document.createElement('h6');
    productName.textContent = item.node.media.user.username;
  
    
    const productImage = document.createElement('img');
    productImage.src= item.node.media.user.profile_pic_url;
    productImage.style.width = '180px'; // Set width to 200px
    productImage.style.height = '200px'; // Set height to 200px
    productImage.crossOrigin ="anonymous" ; // Set height to 200px


    productDiv.appendChild(productName);
    productDiv.appendChild(productImage);


    document.getElementById("productContainer").appendChild(productDiv);
  });
});
