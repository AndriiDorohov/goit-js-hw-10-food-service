import cardsTemplates from '../templates/cards.hbs';
import menu from '../menu.json';

const markup = cardsTemplates(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);