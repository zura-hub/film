import myJson from './data.json';

const main = document.querySelector('.main');

for(let i = 0; i < myJson.title.legnht; i++){
    main.innerHTML += `
    <div>${thumbnail.trending.large}</div>
    `
}

console.log(myJson)