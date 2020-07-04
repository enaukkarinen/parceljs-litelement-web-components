import { LitElement, html, customElement, TemplateResult, css, CSSResult } from '@polymer/lit-element';

import pattern from '../../assets/pattern.png';

@customElement('ed-section-break')
export class EdSectionBreak extends LitElement {
  static get styles(): CSSResult[] {
    return [
      css`
        :host {
          display: block;
          background: var(--primary-bg);
          opacity: 0.99;
        }

        .section-break {
          height: 100px;
          background-size: 50%;
          background-repeat: repeat;
          opacity: 0.33;
        }

        .section-break + .section-break {
          transform: scaleY(-1);
        }
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <style>
        .section-break {
          background: url('${pattern}');
        }
      </style>
      <div class="section-break"></div>
      <!--   <div class="section-break"></div> -->
    `;
  }
}
