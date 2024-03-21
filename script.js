// AGGIUNGO IL TEAM

const people = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-managaer.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.log(people);

let conUl = document.querySelector('#containerUl');
console.log(conUl)

for (let key of people) {
    let liDati = document.createElement('li');

    let nameElement = document.createElement('span');
    nameElement.textContent = key.name;

    let roleElement = document.createElement('span');
    roleElement.textContent = key.role;

    let imageElement = document.createElement('img');
    imageElement.src = key.image;

    liDati.appendChild(nameElement);
    liDati.appendChild(roleElement);
    liDati.appendChild(imageElement);

    conUl.appendChild(liDati);
}