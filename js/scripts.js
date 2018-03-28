var database = require("./inventoryBuilder.js")
var myFleet = database.getData();

//var fullString = "Model: ";
//for (var i=0; i<array.length; i++){
//  fullString = fullString + array[i].model + ", ";
//}


for (var i=0; i<5; i++){
  //print model.value();
  console.log(myFleet[i].model);
}



//myFleet[0] = vehicle1;
//myFleet[0].model;
//vehicle1.model = "Husky";

