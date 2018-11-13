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

* [gif.js](https://github.com/liaswapna/Train-Scheduler/blob/master/assets/javascript/app.js)

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
    
#### Additional Features
* The app is fully mobile responsive.
* Integrated the search with additional APIs such as OMDB.
* Code and Syntax to integrate search with OMDB APIs.
```javascript
var queryURL1 = `https://api.giphy.com/v1/gifs/search?q=${movieName}&api_key=A2Hw4RAXUAp9JUnpyZh9PqNapjox1Tj6&limit=${previousCount}`;
var queryURL2 = `http://www.omdbapi.com/?t=${movieName}&apikey=trilogy`;
$.when( $.ajax({ url:queryURL1,method:"GET",dataType:"json"}), $.ajax({url:queryURL2,method:"GET",dataType:"json"})).then(function(response,omdbResponse ) {
});
```
* Allow users to request additional gifs to be added to the page.
* Code and Syntax to request additional gifs.
```javascript
var queryURL = `http://api.giphy.com/v1/gifs/search?q=${movieName}&api_key=A2Hw4RAXUAp9JUnpyZh9PqNapjox1Tj6&limit=${previousCount}`;
```
* Download button for each gif images that opens in new tab to right click and save image.
* Code and Syntax to download gifs.
```javascript
newAnchor.attr("download","file.jpg");
```

* Allow users to add/remove their favorite gifs to a `favorites` section, made this section persist even when the page is reloaded via `localStorage`.
* Code and Syntax to store/retrieve data from localStorage.
```javascript
localStorage.setItem("fav",JSON.stringify(favourites));

favourites = JSON.parse(localStorage.getItem("fav"));
```
* Code and Syntax to add gifs to favourites.
```javascript
favourites.push(favId);
```
* Code and Syntax to remove gifs from favourites.
```javascript
favourites.splice(remIndex,1);
```

### NOTE
* [Link to my GifTastic App](https://liaswapna.github.io/Train-Scheduler/)

