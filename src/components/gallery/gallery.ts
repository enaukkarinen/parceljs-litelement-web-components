import { LitElement, html, customElement, TemplateResult, CSSResult, property } from '@polymer/lit-element';

import styles from './gallery.css';
import materialIcons from '../../styles/material-icons';

export interface GalleryItem {
  url: string;
  label: string;
  description?: string;
}

@customElement('ed-gallery')
export class EdGallery extends LitElement {
  @property({ type: Array }) items: GalleryItem[] = [];

  // images = [image2, image7, image8, image11];

  static get styles(): CSSResult[] {
    return [styles, materialIcons];
  }

  open(item: GalleryItem): void {
    const el = this.shadowRoot.getElementById('modal');
    const body = document.getElementsByTagName('body');

    body[0].style.overflow = 'hidden';
    el.style.display = 'block';
  }

  close(): void {
    const el = this.shadowRoot.getElementById('modal');
    const body = document.getElementsByTagName('body');

    el.style.display = 'none';
    body[0].style.overflow = 'unset';
    el.focus();
  }

  render(): TemplateResult {
    return html`
      <div id="modal" @click="${() => this.close()}">
        <i class="close-btn material-icons">close</i>

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
}
