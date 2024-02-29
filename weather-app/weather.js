const isRequired = value => value === '' ? false : true;

// This function shows an error message
const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
  
    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
  };

// This function hides the error message.
const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;
    
  
    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
  
    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
  };

// Here we're checking to see if the zip is ok.
const checkZip = () => {
    let valid = false;
    const length = 5;
    const zip = document.getElementById("zip").value;
    console.log(`The zip length is ${zip.length}`);
  
    if (zip === '') {
        showError(document.getElementById("zip"), 'Zip code cannot be blank.');
    } else if (isNaN(zip)){
        showError(document.getElementById("zip"), `Zip must be a number...`)
    } else if (!(zip.length==5)) {
        showError(document.getElementById("zip"), `Zip must be 5 digits.`)
    } else {
        showSuccess(document.getElementById("zip"));
        valid = true;
    }
    return valid;
  }

  function formSubmit(e){
    e.preventDefault();
  
    if (checkZip()) {
        let zipCode = document.getElementById("zip").value;
        document.getElementsByClassName("form")[0].reset();
        textSpace = document.getElementById("result-space");

        async function getWeather() {
            try {
                const response = await fetch("https://api.weatherapi.com/v1/current.json?key=9b7518c8419f441080b204624242902&q=" + zipCode);
                const weather = await response.json();
                console.log(weather.current.temp_f);
                textSpace.textContent = `The current temp is ${weather.current.temp_f} deg farenheit.`
            } catch {
                textSpace.textContent = "Zip code cannot be found."
            }
        
        }

        getWeather();
    }
  }

document.getElementById("submit").addEventListener("click", function(e){formSubmit(e);});
document.getElementById("zip").onkeydown = function(e){
    if(e.key === 'Enter'){
        formSubmit(e);
    }
 };

