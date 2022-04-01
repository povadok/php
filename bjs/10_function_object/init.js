
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicNameOutput').innerText = initPerson.patronymicName;    
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthOutput').innerText = initPerson.burth;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};

document.querySelector('#btnRetry').addEventListener('click', function () {
	window.onload();
});

document.querySelector('#btnClear').addEventListener('click', function () {
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('patronymicNameOutput').innerText = '';    
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
});