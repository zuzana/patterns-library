import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterLegals extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const bottom = getAttribute(this, 'bottom');

    this.className = classnames('m-footer-legals', {
      'm-footer-legals--bottom': bottom,
    });
  }
}

window.customElements.define('axa-footer-legals', FooterLegals);