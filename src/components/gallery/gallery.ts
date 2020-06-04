import { LitElement, html, customElement, TemplateResult, CSSResult, property } from '@polymer/lit-element';

import styles from './gallery.css';
import closeIcon from '../../assets/close-icon.svg';

export interface GalleryItem {
  url: string;
  label: string;
  description?: string;
}

@customElement('ed-gallery')
export class EdGallery extends LitElement {
  @property({ type: Array }) items: GalleryItem[] = [];

  activeImageUrl?: string;

  static get styles(): CSSResult[] {
    return [styles];
  }

  open(item: GalleryItem): void {
    const el = this.shadowRoot.getElementById('modal');
    // const body = document.getElementsByTagName('body');
    // body[0].style.overflow = 'hidden';
    this.activeImageUrl = item.url;
    this.performUpdate();
    el.style.display = 'block';
  }

  close(): void {
    const el = this.shadowRoot.getElementById('modal');
    // const body = document.getElementsByTagName('body');
    // body[0].style.overflow = 'unset';
    el.style.display = 'none';
    el.focus();

    this.activeImageUrl = undefined;
  }

  render(): TemplateResult {
    return html`
      <div id="modal" @click="${() => this.close()}">
        <div class="modal-backdrop"></div>
        <img class="modal-close-icon" src="${closeIcon}" />
        <div class="modal-content">
          <img src="${this.activeImageUrl}" />
        </div>
        use custom svgs
      </div>
      <div class="gallery">
        ${this.items.map((item) => {
          return html`
            <div class="gallery-item" @click="${() => this.open(item)}">
              <div class="thumbnail" style="background-image: url(${item.url})"></div>
              <div class="content">
                <div class="title">${item.label}</div>
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }

  async performUpdate() {
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    super.performUpdate();
  }
}
