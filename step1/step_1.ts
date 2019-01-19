var price:number = 1200;
var rate:number = 0.08;
var message:string = "円 (税込み)";
var isinc:boolean = false;

if(isinc) {
    alert(price + message);
}else{
    alert(price * (1 + rate) + message);
}

// any type
var something;
