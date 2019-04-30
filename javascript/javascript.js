function murphyInfo() {
  let myPrompt = "Murphy, good boi, cost: $100.00";
  alert(myPrompt);
};

function murphyPurchase() {
total = 0;
total += frm.contact_plugin.value * 10 + frm.mailing_list.value * 10;
document.getElementById("total").innerHTML = total;
}

let addCart =0;

function buttonClick(event){
    addCart = addCart + 100.00;
    alert(addCart);
}
