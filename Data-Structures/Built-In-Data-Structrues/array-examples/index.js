let list = [
  {
    text: 'eggs',
    cost: 2.5,
    need: true,
  },
  {
    text: 'milk',
    cost: 1.99,
    need: true,
  },
  {
    text: 'bread',
    cost: 2.49,
    need: false,
  },
  {
    text: 'chicken',
    cost: 5.99,
    need: true,
  },
  {
    text: 'rice',
    cost: 3.99,
    need: true,
  },
  {
    text: 'potatoes',
    cost: 1.99,
    need: true,
  },
  {
    text: 'onions',
    cost: 0.99,
    need: true,
  },
  {
    text: 'tomatoes',
    cost: 1.49,
    need: false,
  },
  {
    text: 'lettuce',
    cost: 0.99,
    need: false,
  },
  {
    text: 'cheese',
    cost: 3.5,
    need: true,
  },
];

let html = '';
let total = 0;

for (let ii = 0; ii < list.length; ii++) {
  let item = list[ii];

  if (item.need) {
    html += `<li>${item.text}</li>`;
    total += item.cost;
  }
}
document.getElementById('list').innerHTML = html;
document.getElementById('cost').innerHTML = total;
