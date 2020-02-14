//initializing firebase
var config = {
    apiKey: "AIzaSyA2QGrQQuHKU30S6xrM9MFwcUzjlcwjltQ",
    authDomain: "to-do-or-not-to-do-list.firebaseio.com/",
    databaseURL: "https://to-do-or-not-to-do-list.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database();

//Creating new to-do when submit button is clicked.

$("#submitButton").on("click", function(event)
{
    event.preventDefault();

    //grabs user input
    var userToDo = $("#toDoInput").val().trim();
    var toDoCategory = $("#categoryInput").val().trim();
    var toDoColor = $("#colorOfInput").val().trim();
    var toDoImportanceLevel = $("#importanceLevelInput").val().trim();
    var toDoDueDate = $("#dateDueInput").val().trim();

    //Creates local "temporary" object for holding new to-do data
    var newToDo = {
        todo: userToDo,
        category: toDoCategory,
        color: toDoColor,
        importance: toDoImportanceLevel,
        date: toDoDueDate
    };

    //Uploads new to-do to the database
    database.ref().push(newToDo);

    //logs everything to console
    console.log(newToDo.todo);
    console.log(newToDo.category);
    console.log(newToDo.color);
    console.log(newToDo.importance);
    console.log(newToDo.date);

    //clears all text-boxes
    $("#toDoInput").val("");
    $("#categoryInput").val("");
    $("#colorOfInput").val("#000000");
    $("#importanceLevel").val("");
    $("#dateDueInput").val("");
});

//Create firebase event for adding a row in the html when a user adds an entry.
database.ref().on("child_added", function(childSnapshot)
{
    console.log(childSnapshot.val());

    //Store everything into a variable.
    var objectCategory = child.Snapshot.val().category;
    var objectColor = child.Snapshot.val().color;
    var objectDate = child.Snapshot.val().date;
    var objectImportance = child.Snapshot.val().importance;
    var objectToDo = child.Snapshot.val().todo;
});

//Creating score for each importance level item.

//var counter = 0;
    
    //counter
    $('#low').on("add-to-do", function() {


        
    });
    
