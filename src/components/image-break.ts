import { LitElement, html, customElement, TemplateResult, css, CSSResult, property } from '@polymer/lit-element';

@customElement('ed-image-break')
export class EdImageBreak extends LitElement {
  @property({ type: String }) prop1 = '';

  static get styles(): CSSResult[] {
    return [
      css`
        .image-break {
          width: 100%;
          height: 800px;
          background-size: cover;
          background-attachment: fixed;

          box-shadow: inset 11px -12px 30px -10px rgba(0, 0, 0, 0.35), inset 11px 12px 30px -10px rgba(0, 0, 0, 0.35);

          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          position: relative;
        }
        .backdrop {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          background: #0000002e;
        }
        span {
          position: relative;
          background: #e6f8ff;
          width: 70vw;
          padding: 1rem;
          border-radius: 1rem;
          text-align: center;
        }
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <style>
        .image-break {
          background: url('${this.prop1}');
        }
      </style>
      <div class="image-break">
        <div class="backdrop"></div>
        <slot></slot>
      </div>
    `;
  }
}
