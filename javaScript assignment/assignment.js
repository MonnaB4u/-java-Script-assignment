/*function feetToMile(feet){

    var sum = feet/5280;
    return sum;
}
var feetMile= feetToMile(5000);
console.log(feetMile);*/

//woodCalculator

/*function woodCalculator(chair, table, bed){

var chairCount =chair * 10;
var tableCount= table * 30;
var bedCount= bed * 50;
var totalCount=chairCount + tableCount + bedCount;
return totalCount;

}
var totalResult=woodCalculator(2,4,2);
console.log(totalResult);*/

// tinyFriend

function tinyFriend(name){
    var  friendsNames= name[0];
    var str = friendsNames.length ;

    for(i = 1; i < name.length; i++){
        var smallName = name[i] ;
        var smallWord = smallName.length ;

        if(smallWord < str){
            friendsNames= smallName ;
        }
    }
    return friendsNames;
}

var strName = [ "monna", "sam","bappaRaj", "asifAhmed", "apurba"];
result = tinyFriend(strName)
console.log(result)
