function murphyInfo() {
  let myPrompt = "Murphy, good boi, cost: $100.00";
  alert(myPrompt);
};

function murphyPurchase() {
total = 0;
total += frm.contact_plugin.value * 10 + frm.mailing_list.value * 10;
document.getElementById("total").innerHTML = total;
}

//const input = document.getElementById('myInput');
//input.value = '0';
let addCart =0;

function buttonClick(event){
   // var startNumber = parseInt(input.value, 10);
    addCart = addCart + 10;
    alert(addCart);
    //input.value = startNumber;
}
