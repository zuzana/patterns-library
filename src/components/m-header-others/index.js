import { BaseComponentGlobal } from '../_abstract/component-types';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAHeaderOthers extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-others`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-others', AXAHeaderOthers);
});

export default AXAHeaderOthers;
