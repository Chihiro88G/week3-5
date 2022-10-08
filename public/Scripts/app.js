// IIFE Immediately Invoked Function Expression
// Client side

/*  
  File: app.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

(function () {
    function start() {
        console.log("App started...");
        let deleteButtons = document.querySelectorAll('.btn-danger');

        // for detele buttoms on bookList
        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/bookList');
                }
            })
        }
    }
    window.addEventListener("load", start);
})();