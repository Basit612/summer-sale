let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll('.card');

for(let index = 0; index < cards.length; index++){
  const card = cards[index];
  card.addEventListener("click", function(){
    // console.log("clicked");

    const title = card.querySelector("h3").innerText;
    const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);
   
    
    const titleContainer = document.getElementById('title-container');
    // console.log(titleContainer);

    const p = document.createElement("p")
    p.innerText = titleCount + ". " + title;

    titleContainer.appendChild(p);
    titleCount++;


   totalPrice += price;
   document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
  });
}

const btn = document.getElementById('apply-btn');
btn.addEventListener("click", function(){


  const couponElement = document.getElementById('input-field').value;
  const couponCode = couponElement.split("").join("").toUpperCase();
  console.log(couponCode);
  if(totalPrice >= 200){
    if(couponCode === "SELL200"){
      
      const discountElement = document.getElementById("discountPrice");
      const discountAmount = totalPrice * 0.2; 
      discountElement.innerText = discountAmount.toFixed(2); 
      
      
      const restTotal = document.getElementById("total");
      restTotal.innerText = totalPrice - discountAmount.toFixed(2);
      document.getElementById("input-field").value = "";
     }else{
      alert("Invalid Coupone code")
      document.getElementById("input-field").value = "";
    }
  }
  else{
    alert("please at least $200 khoroch kore bhai!");
    document.getElementById("input-field").value = "";
  }
})