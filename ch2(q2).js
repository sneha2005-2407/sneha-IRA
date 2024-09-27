let a = prompt("enter your marks")
console.log(a);

if (a>=80 && a<=100){
    console.log(a, "A");
}else if (a>=70 && a<=89){
    console.log(a, "B");
}else if (a>=60 && a<=69){
    console.log(a, "C");
}else if (a>=50 && a<=59){
    console.log(a, "D");
}else if (a>0 && a<=49) {
    console.log(a, "f");
}else {
    console.log(a, "fail");
}
