let elements = myForm.elements;
let titleName = document.querySelector('#titleName');
let compliment = document.querySelector('.compliment');
let compliment__text = document.querySelector('.compliment__text')
let header = document.querySelector('.header')


elements.myBtn.addEventListener('click', function (event) {
    event.preventDefault();
    titleName.textContent = elements.userName.value;
    compliment.style.backgroundImage = `url(${elements.urlImg.value})`;
    compliment__text.style.fontSize = elements.textSize.value;
    compliment.style.display = 'block';
    header.style.display = 'block';
})
