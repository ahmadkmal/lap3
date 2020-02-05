var numTimes;



function run() {
    
var address = prompt("where do you live?");
while (true){
var have_discount  = prompt("do you have discount (y/n)?");
if (have_discount=="y"||have_discount=="n")
{
    break;
}
else{
    have_discount  = prompt("reenter : do you have discount (y/n)?");
}
}
if (address=="amman"){
    a_msg="shiping is avilabel to amman";
}
else{
    a_msg="shiping is not avilabe to your location ("+address+")right now";
}
document.write('<h4>'+'price 1000'+'</h4>')

if(have_discount=="y"){
    var discount_code = prompt("enter your discount .");
    document.write('<h4>'+'you have a discount </br> your discont is :'+'</h4>')
document.write('<h4>'+discount_code+'</h4>')
}
var numTimes = prompt("how many laptop you want?");

document.write('<h4>'+a_msg+'</h4>')
function times() {
    for (var i =0;i< numTimes;i++){
        console.log("hi");
    document.write(' <img src="HP-Pavilion-Touch_Laptop-X360-14-CD1007NE-Intel_Core_i7-Egypt_Laptop-1.jpg" alt="laptop">');
}
console.log("hi");

}
times();
}




