import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAFooterMain extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const light = getAttribute(this, 'light');

    this.className = classnames(this.initialClassName, 'm-footer-main', {
      'm-footer-main--light': light,
    });
  }
}

wcdomready(() => {
  window.customElements.define('axa-footer-main', AXAFooterMain);
});

export default AXAFooterMain;
