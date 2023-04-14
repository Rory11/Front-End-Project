/*-----Get form information from local storage-----*/

const firstName = localStorage.getItem('first-name');
const lastName = localStorage.getItem('last-name');
const checkWho = localStorage.getItem('check-who');

/*-----If professor was selected display professor otherwise display first name-----*/

if(checkWho == 'Professor') {
    document.getElementById('user-title').innerHTML = checkWho;
} else {
    document.getElementById('user-title').innerHTML = firstName;
}

document.getElementById('last-name').innerHTML = lastName;

/*-----Back to landing page-----*/

document.getElementById('try-again').innerHTML = checkWho;