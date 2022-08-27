function love(){
    var name1 = document.getElementById("partnerA").Value;
    var name2 = document.getElementById("partnerA").Value;
    if(name1.length<=2){
        alert("enter at least 3 characters");
    }
    if(name2.length<=2){
        alert("enter at least 3 characters");
    } else{
        var random = math.floor(math.radom("*100"));
        document.getElementById("print").innerHTML =name1 + "and" + name2 + "#" +radom + "%" + "of Love";
    }
}



//first enter the names of the two lovers
let partnerA= prompt("enter the name of the firstpartner")
let partnerB= prompt("enter the name of the secondpartner")
let bothNames = partnerA + partnerB;
bothNames + bothNames.toLowerCase();
console.log(bothNames);

let T = (bothNames.match(/t/g) || []).length;
let R = (bothNames.match(/t/g) || []).length;
let U = (bothNames.match(/t/g) || []).length;
let E = (bothNames.match(/t/g) || []).length;

let trueValue = T+R+U+E;

console.log(T);
console.log(R);
console.log(U);
console.log(E);



let L = (bothNames.match(/t/g) || []).length;
let O = (bothNames.match(/t/g) || []).length;
let V = (bothNames.match(/t/g) || []).length;
let I = (bothNames.match(/t/g) || []).length;

let loviValue = L+O+V+I

console.log(L);
console.log(O);
console.log(V);
console.log(I);



