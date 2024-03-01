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

// Here we're checking to see if the input is ok.
const checkFib = () => {
    let valid = false;
    const fib = document.getElementById("fib").value;
  
    if (fib === '') {
        showError(document.getElementById("fib"), 'fib cannot be blank.');
    } else if (isNaN(fib)){
        showError(document.getElementById("fib"), `fib must be a number...`)
    } else if (fib.length < 1 || fib.length > 3) {
        showError(document.getElementById("fib"), `fib must be 1-3 digits.`)
    } else {
        showSuccess(document.getElementById("fib"));
        valid = true;
    }
    return valid;
  }

  function formSubmit(e){
    e.preventDefault();
  
    if (checkFib()) {
        let fib = document.getElementById("fib").value;
        document.getElementsByClassName("form")[0].reset();
        textSpace = document.getElementById("result-space");
        textSpace.textContent = `Iteration results: ${fibs(fib)}. Recursion results: ${fibsRec(0,fib,[0,1])}.`
    }
  }

document.getElementById("submit").addEventListener("click", function(e){formSubmit(e);});
document.getElementById("fib").onkeydown = function(e){
    if(e.key === 'Enter'){
        formSubmit(e);
    }
 };

function fibs(iterations){
    if (iterations==0){
        return [0];
    } else if (iterations == 1){
        return [0,1];
    } else {
        let array = [0,1];
        while (iterations>1){
            iterations -= 1;
            array.push(array[array.length-1]+array[array.length-2]);
        }
        return array;
    }

}

function fibsRec(start, iterations, array){
    let completion = [];
    if (start==0 && iterations==0){
        return [0];
    } else if (start==1 && iterations==1){
        return [0,1];
    } else if (start+1<iterations) {
        array.push(array[array.length-1]+array[array.length-2]);
        return fibsRec(start+1,iterations, array);
    } else {
        return array;
    }
}
