import data from "../info.json" with {type: "json"};

const WIKIPEDIA = "https://pt.wikipedia.org/wiki/";
const cardTemplate = document.getElementById("card_template");

function createCard(cardData) {
    
    const card = cardTemplate.content.cloneNode(true);
    const cardTitle = card.querySelector(".name");
    const cardDescription = card.querySelector(".description");
    const wikiButton = card.querySelector(".wiki");
    const showMoreButton = card.querySelector(".show_more");

    cardTitle.textContent = cardData.Name;
    cardDescription.textContent = cardData.Description;
   
    // Adicionando Os Listeners Pros Botoes Do Template

    wikiButton.addEventListener("click", () => { 
        const formatedName = cardData.Name.replaceAll(" " , "_");
        const wikiLink = WIKIPEDIA + formatedName;
        console.log("Navigating to Wiki:", wikiLink);
        window.location.href = wikiLink;
    })

    showMoreButton.addEventListener("click", () => {
        console.log("Showing more info for:", cardData.Name);
    })

    return card;
}

console.log("Data ->",typeof(data));

data.Cards.forEach(cardData => {
    console.log("Create Card",cardData.name);
    const card = createCard(cardData);
    document.body.appendChild(card);
});