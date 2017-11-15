import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class MetaNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'o-meta-navigation__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `o-meta-navigation o-meta-navigation--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-meta-navigation', MetaNavigation);