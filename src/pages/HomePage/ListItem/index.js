import './style.css';

export const ListItem = (props) => {
  const { id, done, product, amount, unit } = props;

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  const element = document.createElement('div');
  element.classList.add('list-item');
  element.innerHTML = `
    <button class="icon-btn btn-tick${tickClass}"></button>
    <div class="list-item__body">
      <div class="list-item__product">${product}</div>
      <div class="list-item__amount">${amount} ${unit}</div>
    </div>
  `;

  const handleTick = () => {
    // zde je potřeba zařídit změnu stavu položky
  };

  element.querySelector('.btn-tick').addEventListener('click', handleTick);
  return element;
};
