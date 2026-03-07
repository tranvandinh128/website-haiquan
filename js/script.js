102"}
let total = 0;

function addToCart(product,price){

let table = document.getElementById("cart");

let row = table.insertRow();

let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);

cell1.innerHTML = product;
cell2.innerHTML = price + " VNĐ";
cell3.innerHTML = 1;
cell4.innerHTML = price + " VNĐ";

total += price;

document.getElementById("total").innerHTML = tota
