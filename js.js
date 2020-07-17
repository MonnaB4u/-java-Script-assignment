/*var number=200;
console.log(number);
var name="hero alam";
var name="sakib khan";
console.log(name);

//Arry
var index=[12,13,14,15,16];
console.log(index);
index.push(17,18,19);
console.log(index);
//pop

index.pop();
console.log(index);

//add korte hole

index.shift();
console.log(index);

index.unshift(11);
console.log(index);

index.slice(1,5);
console.log(index);
//Loop

var i,j;
for(i=0; i<6;i++){

    for(i=0;i<7-1;i++){

    console.log("*");
    console.log('');
    }

}*/

//leap year
/*
function factorial(n){
   var i=1;
    var fact=1;
    while(i< n){
        fact=fact*i;
        i++;
    }
    return fact;
}
var result = factorial(6);
console.log(result);*/
//find array highest number
/*var marks=[10,20,50,40,30];
var max=marks[0];
for(var i=0; i<marks.length; i++){
var element=marks[i];
if(element>max){
    max=element;
}
}
console.log("Highest number is ", max);*/

//brickCalclator
function brickCalculator(numberOfFloor){
    if (numberOfFloor <0) {
        return "floor number can't be a negative value"
    }  else {
        if (numberOfFloor <= 10) {
            firstTenFloor = numberOfFloor;
          return firstTenFloor * 15 * 1000;
        } else if ((numberOfFloor > 10) && (numberOfFloor <= 20)) {
            firstTenFloor = 10 
            tenToTwentyFloor = numberOfFloor - firstTenFloor;
            return ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor *12 * 1000));
        } else if (numberOfFloor > 20) {
            firstTenFloor = 10
            twentyToMore = numberOfFloor -20;
            return ((firstTenFloor * 15 * 1000) + (firstTenFloor *12 * 1000) +  (twentyToMore * 10 * 1000));
        }
    }
}
console.log(brickCalculator(22));
console.log(brickCalculator(2));
console.log(brickCalculator(8));
console.log(brickCalculator(15));
console.log(brickCalculator(26));
console.log(brickCalculator(28));