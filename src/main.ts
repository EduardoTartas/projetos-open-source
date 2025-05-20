import type { Card } from './models/Card';
import './style.css'



async function carregarCard() {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  const response = await fetch("http://localhost:5173/cards.json");
  const cards: Card[] = await response.json();

  app.innerHTML = `
    <h1>Projetos Open Source</h1>
    <div id="cards"></div>
  `;

  const cardsContainer = document.querySelector<HTMLDivElement>("#cards")!;

  cardsContainer.innerHTML = `
    <div>Card 1</div>
    <div>Card 2</div>
  `;

  console.log(cards);
}

carregarCard();
