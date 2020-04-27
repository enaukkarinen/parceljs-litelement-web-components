// import './typings.d.ts';
import './styles/main.css';

import './components/header';
import './components/intro';

import { LitElement, html, customElement, property } from '@polymer/lit-element';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  foo = 'foo';

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`<p>${this.foo}</p>`;
  }
}
