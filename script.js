
window.onload = function () {
const cardArea = document.getElementById('card-area');

const imageUrl = document.querySelector('#url');
const title = document.getElementById('title');
const textArea = document.querySelector('textarea');
const button = document.querySelector('button')
const avaliation = document.getElementById('avaliation')
button.addEventListener('click', sendInformation)
const savedData = []

function createCards (url, title, description, avaliation) {
    const divCard = document.createElement("div");
    divCard.setAttribute('class', 'card')
    divCard.innerHTML = 
                `
                <div class="face face1">
                <div class="content">
                    <img src=${url}>
                    <h2> ${title} </h2>
                    </div>
                </div>
                <div class="face face2">
                <div class="content">
                   <p> ${description}</p>
                   <button type="text" class="rating">
                    <span class ="nota"> Nota:
                    <h3> ${avaliation}</h3>
                    </button>
                </div>
                </div>
                </div>
`
cardArea.appendChild(divCard)

}
for (let index = 0; index < 3; index++) {
    createCards("https://minhaseriefavorita.com/wp-content/uploads/2022/05/doutor-estranho-2-1.jpg","doutorestranho 2", "Um filme aleatório ai", "5")
}

function sendInformation (event) {
    if (title.value != "" && textArea.value != "" && imageUrl.value !="" && avaliation.value != ""){
    let toSave = {
        name: title.value,
        description: textArea.value,
        url: imageUrl.value,
        avaliation: avaliation.value
    }
    savedData.push(toSave)
    createCards(toSave.url, toSave.name, toSave.description, toSave.avaliation)
    document.forms[0].reset()
}
event.preventDefault()

}
}
