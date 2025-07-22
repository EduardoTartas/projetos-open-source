import type { Card } from './models/Card';
import './style/index.css'

async function carregarCard() {
  const main = document.querySelector<HTMLElement>("main")!;

  const response = await fetch("/cards.json");
  const cards: Card[] = await response.json();

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
  main.innerHTML = cardsHtml;

  console.log(cards);
}

carregarCard();