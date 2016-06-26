/* GA assignment Citypix

** John Webster


/******* pseudocode example ***************

on button click
  Get cityName from field
  store cityName

if cityName = "New York" or "New York City" or "NYC"
    then change background to "nyc.jpg"
  elseif cityName = "San Francisco" or "SF" or "Bay Area"
    then change background to "sf.jpg"
  elseif cityName = "Los Angeles" or "LA" or "LAX"
    then change background to "la.jpg"
  elseif cityName = "Austin" or "ATX"
    then change background to "austin.jpg"
  elseif cityName = "Sydney" or "SYD"
    then change background to "sydney.jpg"
  else change background to melbourne
  display message saying no match

Wipe CityName on form

/******end Pseudocode example *****************/


$(document).ready(start);   //Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded


  function start(){

  $(document).ready(function() {//- Prevent a form submission using the ```event.preventDefault()``` function
    $('#submit-btn').click(function(){//- Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button
      event.preventDefault();//- Call ```$.val()``` on inputs to get the string value of your user's input
      var cityName = $('#city-type').val();//- Store user input in ```var city``` ***I used a more explicit name
      cityName = cityName.trim();// - Remove extra spaces or new lines that users or the browser might add before or after their input
      if(cityName == 'New York City' || cityName == 'New York' || cityName == 'NYC') {
        changeNYC()
      }
      else if (cityName == 'San Francisco' || cityName == 'SF' || cityName == 'Bay Area') {
        changeSF()
      }
      else if (cityName == 'Los Angeles' || cityName == 'LA' || cityName == 'LAX') {
        changeLA()
      }
      else if (cityName == 'Austin' || cityName == 'ATX') {
        changeAustin()
      }
      else if (cityName == 'Sydney' || cityName == 'SYD') {
        changeSydney()
      }
      else changeMelbourne()//bulletproof the code this is a catch-all for no match
    });
  });//documentReady

/***** yes we could have done this in one function but I was taught to seperate functions, too much?? ***
/***** each of these calls the updated CSS class with the city in the background and the purdy transition */
function changeNYC(){
  $('body').attr('class','nyc');
  cleanUp()
}

function changeSF(){
  $('body').attr('class','sf');
  cleanUp()
}

function changeAustin(){
  $('body').attr('class','austin');
  cleanUp()
}

function changeLA(){
  $('body').attr('class','la');
  cleanUp()
}

function changeSydney(){
  $('body').attr('class','sydney');
  cleanUp()
}
// catchall with a different input field message
function changeMelbourne(){
  $('body').attr('class','melbourne');
  $('#city-type').val ('')
  $('#city-type').attr('placeholder',"Not available, here's Melbourne");
}


// reset the user input field cleanly if we had a valid record
function cleanUp(){
  $('#city-type').val ('');
  $('#city-type').attr('placeholder',"Enter a city name...");
}


}
