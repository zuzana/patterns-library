import bel from 'bel';

export default function sticky(props, children) {
  return [
    bel`<div class="o-sticky__placeholder js-sticky__placeholder"></div>`,
    bel`<div class="o-sticky__box js-sticky__box">${children}</div>`,
  ];
}