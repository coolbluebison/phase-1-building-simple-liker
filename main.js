// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

// One change to HTML -> adding hidden class
// No changes to CSS

// User clicks on  empty heart
// Invoke mimicServerCall -> addEventListener("click",(event) => mimicServerCall)


const likeButton = document.querySelectorAll(".like-glyph");

likeButton.forEach((button) => {button.addEventListener("click", (e) => {
  mimicServerCall()
    .then(() => {
      button.classList.add("activated-heart")
    })
    .catch(() => {
      console.log("fail")
      const errorModal = document.querySelector("#modal")
      console.log(errorModal)
      errorModal.classList.remove("hidden")

      setTimeout(() => {
        errorModal.classList.add("hidden")
      }, 3000);

    });
})});


// Server returns a failure status
// .then(() => {})
// respond by using .catch( () => {} )
// ?display the error by removing the .hidden class
// display the server error message in the modal
// use setTimeout to hide the modal after 3 seconds (add the .hidden class)

// server returns success
// add .activated-heart class to make the heart appear red

// user clicks on a full heart
// remove .activated-heart class

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
