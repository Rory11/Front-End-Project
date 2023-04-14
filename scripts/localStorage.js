/*-----Set up local storage for form-----*/

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");

const checkWho = document.getElementById('check-who');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const checkWhoValue = checkWho.value; 
    



    localStorage.setItem('first-name', firstNameValue);
    localStorage.setItem('last-name', lastNameValue);
    localStorage.setItem('check-who', checkWhoValue);

    window.location.href = "./pages/home.html";
})


