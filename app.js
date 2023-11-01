let kilo = Number(prompt("Lütfen Kilonuzu giriniz"));

let boy = Number(prompt("Lütfen Boyunuzu metre cinsinden giriniz"));

let sonuc = kilo/(boy*2);

if(sonuc<18.5){
    console.log("İdeal kilonun altında!");
}else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal kiloda!");
}else if(sonuc>=25 && sonuc<=29.9){
    console.log("İdeal kilonun üstünde!");
}else if(sonuc>=30 && sonuc<=39.9){
    console.log("İdeal kilonun çok üstünde!(obez)");
}else if(sonuc>=40){
    console.log("İdeal kilonun çok üstünde!(morbid obez)");
}