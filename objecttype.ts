// var object_name = { 
//    key1: “value1”, //scalar value 
//    key2: “value”,  
//    key3: function() {
//       //functions 
//    }, 
//    key4:[“content1”, “content2”] //collection  
// };


var person={
    firstName:"test",
    lastName:"test lastname"
}
console.log(person.firstName);
console.log(person.lastName);
var newPerson=function(obj:{firstName:string, lastName:string}){
    console.log('first name'+obj.firstName);
    console.log('first name'+obj.lastName);
}
newPerson(person);