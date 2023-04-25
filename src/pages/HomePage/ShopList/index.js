import { ListItem } from '../ListItem/index.js';
import { getShoppingItems, addShoppingItem } from '../../../functions/db.js';
import './style.css';

export const ShopList = (props) => {
  const { day, dayResult } = props;

  let dayName = 'Načítám...';
  if (dayResult !== 'loading') {
    dayName = dayResult.dayName;
  }

  const element = document.createElement('div');
  element.classList.add('shoplist');
  element.innerHTML = `
    <div class="shoplist__head">
      <h2>${day}</h2>
    </div>
    <form class="shoplist__new">
      <div class="form-fields">  
        <input class="field-input product-input" type="text" />
        <input class="field-input amount-input" type="text" />
        <input class="field-input unit-input" type="text" />
      </div>
      <div class="form-controls">
        <button class="btn-add">Přidat</button>
      </div>
    </form>
    <div class="shoplist__items"></div>
  `;

  if (dayResult === 'loading') {
    getShoppingItems().then((response) => {
      const { data, error } = response;
      if (data) {
        element.replaceWith(
          ShopList({
            day: day,
            dayResult: data,
          }),
        );
      }
    });
    return element;
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const productInput = element.querySelector('.product-input');
    const amountInput = element.querySelector('.amount-input');
    const unitInput = element.querySelector('.unit-input');

    addShoppingItem(
      productInput.value,
      amountInput.value,
      unitInput.value,
    ).then((response) => {
      getShoppingItems().then((response) => {
        const { data, error } = response;
        if (data) {
          element.replaceWith(
            ShopList({
              day: day,
              dayResult: data,
            }),
          );
        }
      });
    });
  };

  element.querySelector('.btn-add').addEventListener('click', handleAdd);

  const itemsElement = element.querySelector('.shoplist__items');
  itemsElement.append(...dayResult.map((item) => ListItem(item)));

  return element;
};
