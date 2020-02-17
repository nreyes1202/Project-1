//initializing firebase
var config = {
    apiKey: "AIzaSyA2QGrQQuHKU30S6xrM9MFwcUzjlcwjltQ",
    authDomain: "to-do-or-not-to-do-list.firebaseio.com/",
    databaseURL: "https://to-do-or-not-to-do-list.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database();

//Creating new to-do when submit button is clicked.

$("#submitButton").on("click", function (event) {
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
database.ref().on("child_added", function (childSnapshot) {
    //Assign values from the database object. 
    var key = childSnapshot.key;
    var value = childSnapshot.val();

    //To-Do Information
    console.log(value);

    //Create checkmark button to add before todo.
    var checkbox = $("<input type='checkbox'>");
    checkbox.on("click", function (event) {
        if ($(this).prop("checked") == true) {
            childSnapshot.ref.child("checked").set($(this).prop("checked"));
        }
        else if ($(this).prop("checked") == false) {
            childSnapshot.ref.child("checked").set(false);
        }
    });

    //Marking tasks on HTML as checked to match database.
    if (value.checked == true) {
        $(checkbox).prop("checked", value.checked)
    };

    //Create the new row
    var newRow = $("<tr>").append(
        $("<td>").text(value.todo).prepend(checkbox),
        $("<td>").text(value.category),
        $("<td>").text(value.importance),
        $("<td>").text(value.date)
        // $("<td>").text(value.timeleft)
    );

    //Append the new row to the table
    $("#to-do-table > #to-do-list").append(newRow);
});

if (value.checked == true) {
    $(value = +- 1)
}
