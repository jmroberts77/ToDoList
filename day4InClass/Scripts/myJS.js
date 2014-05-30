var MyApp = {};
MyApp.items = [];
//set item isDone to true for clicked items
MyApp.toggleDone = function (index) {
    "use strict";
    //this takes the existing boolean and reverses it
    //stores it in the original location
    MyApp.items[index].isDone = !MyApp.items[index].isDone;
    //write data to page
    MyApp.writeItems();
};
//get items from array to write to document element
MyApp.writeItems = function () {
    "use strict";
    var stringHolder = "";
    //loop over items in the array and adds them to the string
    for (var i in MyApp.items) {
        //statement to determine to apply style
        if (MyApp.items[i].isDone) {
            //if task finished strike through
            //stringHolder += "<span class='done btn btn-success' onclick='MyApp.toggleDone(" + i + ")'>";
            stringHolder += "<span class='done glyphicon glyphicon-ok' onclick='MyApp.toggleDone(" + i + ")'>";
        }
        else {
            //else dont apply strike through style
            //stringHolder += "<span class='btn btn-danger' onclick='MyApp.toggleDone(" + i + ")'>";
            stringHolder += "<span class='' onclick='MyApp.toggleDone(" + i + ")'>";
        }
        //add items onto string
        stringHolder += MyApp.items[i]['taskName'];
        stringHolder += "</span>";
        stringHolder += "<br />";
    }
    //send data to the document list text area
    document.getElementById("list").innerHTML = stringHolder;
};

MyApp.addItem = function () {
    "use strict";
    var newItem = document.getElementById("item-input");
    //create temp item to put in the array later
    var holder = {
        taskName: newItem.value,
        isDone: false
    };
    MyApp.items.push(holder);
    //clear field after data pushed
    newItem.value = "";
    //run writeItems function
    MyApp.writeItems();
};
//function to delete items clicked done and show user items have been removed
MyApp.removeItems = function () {
    "use strict"
    //create holder array to save the Not Done items
    var holderArray = [];
    //loop over items looking for Not done items
    for(var i = MyApp.items.length - 1; i >= 0; i--) {
        if (!MyApp.items[i].isDone) {
            //pull out the item if Not done to save it
            holderArray.push(MyApp.items[i]);
        }
    }
    //move temporary array of Not done items into the items array
    MyApp.items = holderArray;
    //after array is modified redraw the div
    MyApp.writeItems();
};