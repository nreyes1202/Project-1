//initializing firebase
var config = {
    apiKey: "AIzaSyA2QGrQQuHKU30S6xrM9MFwcUzjlcwjltQ",
    authDomain: "to-do-or-not-to-do-list.firebaseio.com/",
    databaseURL: "https://to-do-or-not-to-do-list.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database();

//Creating new to-do when submit button is clicked.


