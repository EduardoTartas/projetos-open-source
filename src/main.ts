import type { Card } from './models/Card';
import './style/index.css'



async function carregarCard() {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  const response = await fetch("http://localhost:5173/cards.json");
  const cards: Card[] = await response.json();

  app.innerHTML = `
    <h1>Projetos Open Source</h1>
    <div id="cards"></div>
  `;

  const cardsContainer = document.querySelector<HTMLDivElement>("#cards")!;

  let cardsHtml = '';
  cards.forEach((card) => {
    cardsHtml += `
      <div class="card">
        <div style="background-color:${card.cor}">
          <img src="${card.icone}" alt="">
        </div>
        <div class="card-content">
          <h3>${card.titulo}</h3>
          <p>${card.descricao}</p>
          ${card.tecnologias.map((tecnologia) => `
            <span>${tecnologia}</span>
          `).join('')}
          <button><a href="${card.link}">Ver projeto</a></button>
        </div>
      </div>
    `;
  });
  cardsContainer.innerHTML = cardsHtml;

  console.log(cards);
}

carregarCard();
