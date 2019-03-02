/* const firstName = 'Zoe';
const lastName = 'Ames';
console.log(firstName + ' ' + lastName);
console.log(`${firstName}      ${lastName}`)

const firstName1 ='Britney';
cosnt lastName1 = 'Spears';

console.log(`${firstName1}   ${lastName}`);

*/



/*
const namePrinter = (firstName, lastName) => {
    console.log(`${firstName}   ${lastName}`);
};

namePrinter('Zoe', 'Ames');
namePrinter('John', 'Doe');

//namePrinter(1,2);
*/
const nuggetizer =(animal) => {
return `processed ${animal}`;
};

console.log(nuggetizer('pig'));



const dogbreedPrinter=(dogBreed)=>{
return `My favorite dog breed is ${dogBreed}`;
};
console.log(dogbreedPrinter('Lab'));

const dogBreedDiv = document.getElementById('dog-breeds');
console.log('dogBreedDiv', dogBreedDiv);

dogBreedDiv.innerHTML ='<h3>hi im an h3</h3>';


const nuggetDiv = document.getElementById('spicyNuggets');

spicyNuggets.innerHTML = nuggetizer('bear');
spicyNuggets.innerHTML += nuggetizer('chicken');

const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById (divId);
selectedDiv.innerHTML += textToPrint;


printToDom('dog-breeds', dogBreed ('lab'))

};

printToDom('spicyNuggets', 'mmmmmm');