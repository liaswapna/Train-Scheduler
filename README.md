# Train-Scheduler

### Overview
---
In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

### Requirements
---
* Make sure that your app suits this basic spec:

  * When adding trains, administrators should be able to submit the following:
    
    * Train Name
    
    * Destination 
    
    * First Train Time -- in military time
    
    * Frequency -- in minutes
  
  * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  
  * Users from many different machines must be able to view same train times.
  
### Files
---
* [index.html](https://github.com/liaswapna/Train-Scheduler/blob/master/index.html)

* [style.css](https://github.com/liaswapna/Train-Scheduler/blob/master/assets/css/style.css)

* [app.js](https://github.com/liaswapna/Train-Scheduler/blob/master/assets/javascript/app.js)

### Technologies Used
---
* HTML
* CSS Bootstrap
* JavaScript to make the page dynamic
* jQuery for Dom Manipulation
* Firebase Database for data storage

### Code Explanation
---
* CSS Bootstrap was used to arrange the page into columns, tables and form.
* A form was implemented to add the train details.
* Firebase is used to store the data remotely so that users from many different machines must be able to view same train times.
    * Code and Syntax for push the data to firbase.
    ```javascript
    var database = firebase.database();
    database.ref().push(data);
    ```
* Event listener for submit button is utilized: 
    * To get the inputted data and store in a variable.
    * To push the data into firesbase.
    * To clear the input field.
* Function is called to display the data into the table from the firebase.
* The data is retieved from the firebase is done in the function.
    * Code and Syntax for retrieving data.
    ```javascript
    database.ref().on("child_added",function(snaphotChild){
        let trainName = snaphotChild.val().trainName;
        let destination = snaphotChild.val().destination;
        let startTime = snaphotChild.val().startTime;
        let frequency = snaphotChild.val().frequency;
    }
    ```
* The display function is called in regular intervals using setInterval().
    * Code and Syntax for setInterval().
    ```javascript
    setInterval(updateDisplay,60*1000);
    ```
    

### NOTE
* [Link to my Train Scheduler App](https://liaswapna.github.io/Train-Scheduler/)

