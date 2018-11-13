
// Firebase authentication & intialization.
var config = {
    apiKey: "AIzaSyBqC7dvfqehPVLpEHmi8mSQwQ-iW870_Gc",
    authDomain: "trainscheduler-d1362.firebaseapp.com",
    databaseURL: "https://trainscheduler-d1362.firebaseio.com",
    projectId: "trainscheduler-d1362",
    storageBucket: "trainscheduler-d1362.appspot.com",
    messagingSenderId: "911055959553"
};
firebase.initializeApp(config);

// Create database.
var database = firebase.database();

// Submit button event.
$("#add-train-button").on("click",function(event){

    event.preventDefault();
    // Create variable to store each value from the form.
    let trainName = $("#train-name-input").val().trim();
    let destination = $("#destination-input").val().trim();
    let startTime = $("#first-time-input").val().trim();
    let frequency = $("#frequency-input").val().trim();
    
    // Create an object to pass to the firebase.
    let data = {
        trainName:trainName,
        destination:destination,
        startTime:startTime,
        frequency:frequency
    }

    // Push the data into the firebase.
    database.ref().push(data);
});

// Function to retrieve, calculate and display the data.
function updateDisplay(){

    $("#display-table-body").empty();

    // Get the data from the firebase and display on the table.
    database.ref().on("child_added",function(snaphotChild){

        // Get the datas from firebase to variables.
        let trainName = snaphotChild.val().trainName;
        let destination = snaphotChild.val().destination;
        let startTime = snaphotChild.val().startTime;
        let frequency = snaphotChild.val().frequency;

        let pastTime = moment(startTime,"HH:mm").subtract(1,"year");
        let diffTime = moment().diff(pastTime,"minutes");
        let modulusTime = diffTime%frequency;
        let remainTime = frequency - modulusTime;
        let trainTime = moment().add(remainTime,"minutes").format("hh:mm a");

        // Display the datas on to the table.
        let newRow = $("<tr>").append(
            $("<td>").text(trainName.toUpperCase()),
            $("<td>").text(destination.toUpperCase()),
            $("<td>").text(frequency),
            $("<td>").text(trainTime),
            $("<td>").text(remainTime)
        )
        $("#display-table-body").append(newRow);
    });

}

// Call funtion to display the data.
updateDisplay();

// Update the data in every 60 seconds.
setInterval(updateDisplay,60*1000);