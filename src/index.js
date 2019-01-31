import catOrDog from './cat-or-dog.js';

const pickForm = document.getElementById('pick-form');
const image = document.getElementById('animal-pic');
const dogNode = document.getElementById('dog-count');
const catNode = document.getElementById('cat-count');
const radioForm = document.getElementById('radio-form');


let dogCount = 0;
let catCount = 0;


radioForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let randomNumber = Math.random();
    let animal = catOrDog(randomNumber);
    let imageSource = '';
    
    if(animal === 'cat') {
        imageSource = '../assets/cat.jpeg';
        catCount++;
        catNode.textContent = catCount;
    }
    else {
        imageSource = '../assets/dog.jpeg';
        dogCount++;
        dogNode.textContent = dogCount;
    }

    image.src = imageSource;
    image.classList.remove('hidden');
}); 

radioForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(radioForm.elements.side.value);
});